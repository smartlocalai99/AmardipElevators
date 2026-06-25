'use client'

import { useState } from 'react'
import ProductTabs from './ProductTabs'
import ProductCard from './ProductCard'
import { PRODUCT_TABS, PRODUCT_CONTENT } from '../data/productData'

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('liftTypes')

  const activeContent = PRODUCT_CONTENT[activeTab]

  return (
    <section
      id="products"
      className="bg-[#ffffff] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <span className="rounded-full bg-[#E10600] px-6 py-2.5 text-sm font-bold text-white lg:px-8 lg:py-3">
            Our Products
          </span>
        </div>

        {/* Heading */}
        <div className="grid items-center gap-8 xl:grid-cols-[1.4fr_0.6fr] xl:gap-12">

          <div>
            <h2 className="text-black font-medium leading-none tracking-[-0.04em] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[82px] text-center xl:text-left">
              Elevator Systems For
              <br />

              <span className="block text-center xl:text-right xl:mr-24">
                Modern <span className="text-[#E10600]">Spaces</span>
              </span>
            </h2>
          </div>

          <div className="flex justify-center xl:justify-end">
            <p className="max-w-[450px] text-center xl:text-left text-base lg:text-[18px] leading-relaxed text-black">
              Advanced elevator systems designed for safety,
              performance, and seamless movement across
              residential, commercial, and healthcare
              environments.
            </p>
          </div>

        </div>

        {/* Products Layout */}
        <div className="mt-12 lg:mt-16 flex flex-col xl:flex-row gap-8 xl:gap-12">

          {/* Sidebar */}
          <div className="w-full xl:w-[380px] shrink-0">

            <p className="mb-4 text-[15px] font-semibold text-black text-center xl:text-left">
              You Can Check Our All Products By Clicking Here
            </p>

            <div className="rounded-[32px] bg-white p-4 lg:p-5 shadow-sm border border-neutral-200 flex flex-col items-center xl:items-start justify-center min-h-[320px] xl:h-[420px]">
              <ProductTabs
                tabs={PRODUCT_TABS}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>

          </div>

          {/* Products Grid */}
          <div className="flex-1 flex flex-wrap justify-center gap-8">
            {activeContent.products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-[calc(50%-1rem)] max-w-[400px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}