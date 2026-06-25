'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center">
      {/* Product Label */}
      <div className="mb-6 inline-flex items-center justify-center rounded-full border border-[#D8D8D8] bg-white px-8 py-2 shadow-sm">
        <span className="text-[16px] font-bold tracking-wide text-[#E10600]">
          {product.cardTitle}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-[450px] w-full max-w-[400px] overflow-hidden rounded-[34px]">
        <Image
          src={product.image}
          alt={product.cardTitle}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>

      {/* Button Outside */}
      <Link
        href={`/product/${product.id}`}
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-black px-2 py-2 pr-5 text-white transition-all duration-300 hover:bg-[#E10600]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <ArrowUpRight className="h-5 w-5 text-black" />
        </span>

        <span className="text-[15px] font-medium whitespace-nowrap">
          Explore Now
        </span>
      </Link>
    </div>
  )
}