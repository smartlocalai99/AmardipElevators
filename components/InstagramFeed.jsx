'use client'

import React, { useEffect, useState } from 'react'
import { FaInstagram, FaPlay } from 'react-icons/fa'

const SKELETON_ITEMS = Array.from({ length: 8 })

function InstagramSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {SKELETON_ITEMS.map((_, index) => (
        <div
          key={index}
          className="aspect-square animate-pulse rounded-lg bg-neutral-200"
        />
      ))}
    </div>
  )
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function loadInstagramFeed() {
      try {
        const response = await fetch('/api/instagram')
        const payload = await response.json()

        if (!response.ok) {
          throw new Error(payload?.error || 'Unable to load Instagram feed.')
        }

        if (isMounted) {
          setPosts(payload.data || [])
          setError(null)
        }
      } catch (feedError) {
        if (isMounted) {
          setError(feedError.message)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadInstagramFeed()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 text-center md:mb-12 md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white">
              <FaInstagram size={16} />
              Instagram
            </span>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-black md:text-[56px]">
              Latest From Our Feed
            </h2>
          </div>

          <a
            href="https://www.instagram.com/amardipelevators/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
          >
            View Profile
            <FaInstagram size={16} />
          </a>
        </div>

        {isLoading && <InstagramSkeleton />}

        {!isLoading && error && (
          <div className="rounded-lg border border-red-100 bg-red-50 px-5 py-6 text-center text-sm font-medium text-red-700">
            We could not load Instagram posts right now. Please check back soon.
          </div>
        )}

        {!isLoading && !error && posts.length === 0 && (
          <div className="rounded-lg border border-black/10 bg-neutral-50 px-5 py-6 text-center text-sm font-medium text-black/70">
            No Instagram posts are available yet.
          </div>
        )}

        {!isLoading && !error && posts.length > 0 && (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={post.caption || 'Open Instagram post'}
                className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-100"
              >
                {post.preview_url ? (
                  <img
                    src={post.preview_url}
                    alt={post.caption || 'Instagram post'}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-neutral-200 text-sm font-semibold text-black/50">
                    Instagram
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />

                {post.media_type === 'VIDEO' && (
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white">
                    <FaPlay size={13} />
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
