'use client'

import React from 'react'
import { DIFFERENTIATORS } from '../data/productData.js'


/* =========================
   BADGE (same file)
========================= */

function Badge({ children, className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        bg-red-600
        px-6 py-2.5
        text-sm font-bold
        text-white
        ${className}
      `}
    >
      {children}
    </span>
  )
}

/* =========================
   MAIN SECTION
========================= */

export default function DifferentiatorsGrid() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 md:py-20 lg:py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <div className="flex flex-col items-center text-center">

          <Badge>Why Choose Us</Badge>

          <h2 className="mt-6 md:mt-8 max-w-5xl text-3xl md:text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.04em] text-white">
            What Makes Us{' '}
            <span className="text-red-600 italic">
              Different
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed text-white/60">
            Engineered for premium spaces with unmatched safety, elegant design,
            and long-term performance.
          </p>
        </div>

        {/* GRID */}
        <div className="relative mt-12 lg:mt-16 grid grid-cols-1 gap-x-6 md:gap-x-10 gap-y-10 md:gap-y-14 md:grid-cols-2 xl:grid-cols-4">

          {DIFFERENTIATORS.map((item, index) => (
            <div
              key={item.title}
              className="
  group
  w-full
  max-w-none md:max-w-sm
  mx-auto
  pt-2
  text-center md:text-left
  transition-all
  duration-500
  hover:-translate-y-2
"
            >

              {/* NUMBER + LINE */}
              <div className="flex items-center gap-3 md:gap-4">

                <span className="text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="h-px w-10 md:w-16 bg-red-600/40"></div>

              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-base leading-relaxed text-white/70">
                {item.subtitle}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}