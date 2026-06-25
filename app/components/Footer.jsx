'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo_Footer from "../assets/Final_Logo_red.webp"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/#about' },
      { label: 'Contact Us', to: '/#contact' },
      { label: 'Projects', to: '/#projects' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Lift Types', to: '/#products' },
      { label: 'Elevator Configurations', to: '/#products' },
      { label: 'Door Systems', to: '/#products' },
      { label: 'Cabin Designs', to: '/#products' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Modernization', to: '/#services' },
      { label: 'Maintenance', to: '/#services' },
      { label: 'Spare Parts', to: '/#services' },
    ],
  },
]

const SOCIAL_ICONS = [
  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/amardipelevators/' },
  { Icon: FaFacebook, label: 'Facebook', href: '#' },
  { Icon: FaTwitter, label: 'Twitter', href: '#' },
  { Icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@amardipelevators3458/' },
]

export default function Footer() {


  return (
    <footer className="relative z-20 overflow-hidden bg-black">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative z-10 py-16 md:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">

            {/* Brand */}
            <div className="flex flex-col items-center text-center xl:items-start xl:text-left gap-6">

              <Link
                href="/"
                className="flex items-center justify-center xl:justify-start"
              >
                <Image
                  src={Logo_Footer}
                  alt="Amardip Elevators"
                  className="h-14 md:h-16 w-auto"
                />

                <div className="flex flex-col justify-center pl-3 md:pl-4">
                  <span className="text-xl md:text-2xl font-semibold tracking-[0.08em] text-white">
                    Amardip
                  </span>

                  <span className="text-xs md:text-sm uppercase tracking-[0.32em] text-white/60">
                    Elevators
                  </span>
                </div>
              </Link>

              <p className="max-w-sm text-sm leading-7 text-white/70">
                Providing reliable, safe, and modern elevator solutions
                for residential, commercial, and healthcare spaces.
              </p>

              <a
                href="tel:+910000000000"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:text-black"
              >
                Let&apos;s Talk
                <FaArrowUpRightFromSquare size={15} />
              </a>

            </div>

            {/* Footer Columns */}
            {FOOTER_COLUMNS.map((col) => (
              <div
                key={col.title}
                className="text-center xl:text-left"
              >
                <h4 className="mb-5 text-lg font-semibold tracking-[0.04em] text-white">
                  {col.title}
                </h4>

                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.to}
                        className="text-sm text-white/65 transition-colors duration-300 hover:text-red-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Section */}
          <div className="mt-16 lg:mt-20 border-t border-white/10 pt-8">

            <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">

              <p className="text-sm text-white/50">
                © 2026 Amardip Elevators. All Rights Reserved.
              </p>

              <div className="flex flex-col items-center gap-4 lg:flex-row">

                <span className="text-sm font-medium tracking-[0.04em] text-white/70">
                  Connect With Us Through Social Media
                </span>

                <div className="flex flex-wrap items-center justify-center gap-3">

                  {SOCIAL_ICONS.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target='_blank'
                      rel="noopener noreferrer"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-red-600
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-red-600/30
                        hover:bg-red-600
                        hover:text-white
                        hover:shadow-[0_10px_30px_rgba(255,0,0,0.25)]
                      "
                    >
                      <Icon size={18} />
                    </a>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}