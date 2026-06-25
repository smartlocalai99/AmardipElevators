'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQ_DATA } from '@/app/data/productData'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('pricing')
  const [openFaq, setOpenFaq] = useState(0)

  const category =
    FAQ_DATA?.find((item) => item.id === activeCategory)

  const safeCategory =
    category?.faqs?.length ? category : FAQ_DATA?.[0]

  // 🔐 safety fallback (prevents blank screen crash)
  if (!safeCategory?.faqs?.length) return null

  return (
    <section className="bg-[#0A0A0A] py-16 md:py-20 lg:py-24 overflow-x-hidden relative text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Badge */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <span className="rounded-full bg-[#E10600] px-8 md:px-10 py-3 text-sm font-bold text-white">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Title */}
          <div className="lg:text-left text-center">
            <h2 className="
              max-w-[650px]
              text-center
              lg:text-left
              text-[34px]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[64px]
              leading-[1]
              tracking-[-0.04em]
              font-medium
              text-white
            ">
              Frequently Asked
              <br />
              <span className="text-[#E10600]">
                Questions
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:text-left text-center">
            <p className="
              max-w-[600px]
              text-center
              lg:text-left
              text-[15px]
              sm:text-[16px]
              lg:text-[18px]
              leading-relaxed
              text-neutral-400
            ">
              Selecting the right elevator solution shouldn&apos;t be complicated.
              We&apos;ve answered the most common questions to help you move forward
              with confidence. Find information about installation, maintenance,
              safety standards, customization options, and ongoing support.
            </p>
          </div>

        </div>

        {/* FAQ Content */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">

          {/* Categories */}
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-5">

            {FAQ_DATA?.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCategory(item.id)
                  setOpenFaq(0)
                }}
                className={`
                  w-full
                  max-w-[240px]
                  lg:max-w-none
                  text-center
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  md:text-base
                  font-semibold
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    activeCategory === item.id
                      ? 'bg-[#E10600] text-white shadow-lg shadow-red-600/20'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {item.title}
              </button>
            ))}

          </div>

          {/* Accordion */}
          <div className="space-y-4 lg:space-y-5">

            {safeCategory?.faqs?.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={index}
                  className={`
                    transition-all
                    duration-300
                    rounded-[24px]
                    lg:rounded-[30px]
                    ${
                      isOpen
                        ? 'bg-neutral-900/60 border border-neutral-800/80 px-5 md:px-8 py-5 md:py-8 shadow-sm'
                        : 'bg-transparent border-b border-white/10 px-4 md:px-6 py-4 md:py-6'
                    }
                  `}
                >
                  <button
                    onClick={() =>
                      setOpenFaq((prev) => (prev === index ? -1 : index))
                    }
                    className="w-full flex items-start justify-between gap-6 md:gap-8 cursor-pointer focus:outline-none"
                  >
                    <h3 className="text-[15px] md:text-[18px] lg:text-[20px] font-semibold leading-snug text-white text-left">
                      {faq.question}
                    </h3>

                    <div className="shrink-0 mt-1 text-white/70">
                      {isOpen ? (
                        <Minus size={22} strokeWidth={3} />
                      ) : (
                        <Plus size={22} strokeWidth={3} />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed text-neutral-400 max-w-4xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}