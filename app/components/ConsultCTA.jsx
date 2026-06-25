'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

import SupportGirl from '../assets/Support_Girl.png'

export default function ConsultCTA() {
  return (
    <section className="overflow-hidden bg-[#ffffff] py-16 md:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[30px] md:rounded-[40px] bg-black overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* LEFT SIDE */}
            <div className="px-6 py-10 sm:px-8 lg:px-16 lg:py-16 text-center lg:text-left">

              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.1] text-white">
                Need Help Choosing The
                <br />
                Right <span className="text-[#E10600]">Elevator</span> ?
              </h2>

              <p className="mt-6 max-w-[520px] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/80 mx-auto lg:mx-0">
                Our specialists help you choose the ideal elevator
                system based on your building requirements,
                available space, traffic flow, and project budget.
              </p>

              {/* CTA Section */}
              <div className="mt-12 flex justify-center lg:justify-start">
                <div className="flex flex-col items-center">

                {/* CTA 1 */}
                <a
                  href="tel:+910000000000"
                  className="
      inline-flex items-center gap-2 sm:gap-4
      rounded-full
      bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#0a0a0a]
      border border-white/10
      px-2 py-2
      text-white
      transition-all duration-300 ease-out
      hover:brightness-125 hover:contrast-125
      active:scale-[0.98]
      group
    "
                >
                  <span className="px-3 sm:px-5 text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                    Talk to our team
                  </span>

                  <span className="
      flex h-10 w-10 sm:h-12 sm:w-12
      items-center justify-center
      rounded-full
      bg-white text-black
      transition-all duration-300
      group-hover:bg-[#E10600]
      group-hover:text-white
      group-hover:rotate-12
    ">
                    <ArrowUpRight size={20} />
                  </span>
                </a>

                {/* OR perfectly centered BETWEEN */}
                <div className="my-6">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#E10600] text-sm font-bold text-white">
                    OR
                  </div>
                </div>

                {/* CTA 2 */}
                <Link
                  href="/products"
                  className="
      inline-flex items-center gap-3
      rounded-full
      border-2 border-white
      px-6 sm:px-8 py-3 sm:py-4
      text-white
      transition-all duration-300
      hover:bg-white hover:text-black
    "
                >
                  <span className="font-semibold">Explore Now</span>
                  <ArrowRight size={20} />
                </Link>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex items-end justify-center min-h-[320px] sm:min-h-[450px] lg:min-h-[650px]">

              {/* RED BACKGROUND */}
              <div
                className="
                absolute bottom-0 z-0
                h-[240px] w-[240px]
                sm:h-[360px] sm:w-[360px]
                lg:h-[520px] lg:w-[520px]
                rounded-[20px] sm:rounded-[24px] lg:rounded-[32px]
                bg-[#E10600]
              "
              />

              {/* IMAGE */}
              <Image
                src={SupportGirl}
                alt="Elevator Consultation"
                priority
                className="
                relative z-10
                w-[300px]
                sm:w-[400px]
                lg:w-[680px]
                h-auto object-contain
              "
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}