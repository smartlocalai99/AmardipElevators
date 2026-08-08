'use client'

import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

function ReviewsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-48 animate-pulse rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        />
      ))}
    </div>
  )
}

export default function GoogleReviewsSection() {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadGoogleReviews() {
      try {
        const response = await fetch('/api/google-reviews')
        const payload = await response.json()
        if (isMounted) {
          setReviews(payload.data || [])
        }
      } catch (err) {
        console.error('Failed to load Google reviews:', err)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadGoogleReviews()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="w-full bg-[#f8f9fa] py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Google Place Header Card */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:p-8">
          <div className="flex items-center gap-4">
            {/* Google "G" Logo Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-md border border-slate-100">
              <svg className="h-10 w-10" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Amardip Elevators</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                  <svg className="h-3 w-3 fill-blue-600" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Verified Business
                </span>
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900">4.9</span>
                <div className="flex items-center text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-500">(25 Google reviews)</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-500">Elevator service in Kadapa, Andhra Pradesh</p>
            </div>
          </div>

          <a
            href="https://share.google/HtJ80ANEdREEbCGcY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1a73e8] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1557b0] hover:shadow-md"
          >
            <span>Review us on Google</span>
            <FiExternalLink size={16} />
          </a>
        </div>

        {/* Dynamic Reviews Content */}
        {isLoading ? (
          <ReviewsSkeleton />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, idx) => (
              <div
                key={review.id || idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* User Info Header (Google Style) */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${review.bgColor || 'bg-blue-600'} text-base font-bold text-white shadow-sm`}>
                        {review.initial || (review.name ? review.name.charAt(0) : 'G')}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">{review.name}</h4>
                        <p className="text-xs text-slate-500">{review.location || 'Kadapa'}</p>
                      </div>
                    </div>

                    {/* Google G Logo in corner */}
                    <svg className="h-5 w-5 shrink-0 opacity-80" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>

                  {/* Rating & Date */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center text-amber-400">
                      {Array.from({ length: review.rating || 5 }).map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-slate-400">• {review.date || 'Google Review'}</span>
                  </div>

                  {/* Review Text */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {review.comment}
                  </p>
                </div>

                {/* Bottom Badge */}
                <div className="mt-5 border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <svg className="h-3.5 w-3.5 fill-emerald-500" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Posted on Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
