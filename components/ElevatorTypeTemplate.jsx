'use client'

import { useState } from 'react'
import Image from 'next/image'
import FeatureIcons from './FeatureIcons'

export default function ElevatorTypeTemplate({ product }) {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <>
            <section className="bg-[#fafafa] text-neutral-900 py-28">

                <div className="relative z-10 mx-auto max-w-7xl px-6">

                    {/* Hero */}
                    <div className="grid items-center gap-24 lg:grid-cols-[45%_55%]">

                        <div>

                            <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400">
                                Premium Lift Solutions
                            </span>

                            <h1 className="mt-6 text-6xl md:text-8xl font-bold leading-[0.88] tracking-[-0.06em]">
                                {product.title}
                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
                                {product.description}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <button onClick={() => window.location.href = "tel:+919063857857"} className="rounded-full text-white bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-500 border hover:border-red-500">
                                    Let&apos;s Talk
                                </button>

                                <button className="rounded-full border border-black/0.1 px-8 py-4 font-semibold transition hover:bg-black hover:text-white border border-black/0.1">
                                    Download Brochure
                                </button>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="
                            relative
                            mr-10
overflow-hidden
rounded-[40px]
bg-white
border
border-neutral-200
shadow-[0_30px_100px_rgba(0,0,0,0.08)]
">

                                <Image
                                    src={product.largeImage}
                                    alt={product.title}
                                    width={1200}
                                    height={900}
                                    className="h-full w-full object-contain"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            </div>

                        </div>

                    </div>

                    {/* Main Features */}
                    <div className="mt-28">

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                            {product.mainIcons?.map((icon, index) => (
                                <div
                                    key={index}
                                    className="group rounded-[28px] border bg-white
border-neutral-200
shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-6 backdrop-blur-xl"
                                >

                                    <FeatureIcons
                                        iconName={icon.icon}
                                        className="mb-5 h-10 w-10 text-red-500"
                                    />

                                    <h4 className="font-semibold">
                                        {icon.label}
                                    </h4>

                                    <p className="mt-2 text-sm text-zinc-500">
                                        {icon.subLabel}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* About */}
                    <div className="mt-32 grid gap-12 lg:grid-cols-2">

                        <div>

                            <span className="text-sm uppercase tracking-widest text-red-500">
                                About
                            </span>

                            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                                {product.aboutTitle}
                            </h2>

                        </div>

                        <div className="
rounded-[40px]
bg-white
border
border-neutral-200
p-12
shadow-[0_10px_40px_rgba(0,0,0,0.04)]
">

                            <p className="leading-relaxed text-zinc-600">
                                {product.aboutDescription}
                            </p>

                        </div>

                    </div>

                    {/* Key Features */}
                    <div className="mt-32">

                        <h2 className="mb-14 text-center text-4xl font-bold">
                            Key Features
                        </h2>

                        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">

                            {product.keyFeatures?.map((feature, index) => (
                                <div
                                    key={index}
                                    className="
group
rounded-[32px]
bg-white
border
border-neutral-200
p-8
text-center
"
                                >

                                    <FeatureIcons
                                        iconName={feature.icon}
                                        className="mx-auto mb-5 h-12 w-12 text-red-500"
                                    />

                                    <h4 className="font-semibold">
                                        {feature.label}
                                    </h4>

                                    <p className="mt-3 text-sm text-zinc-500">
                                        {feature.subLabel}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Specs */}
                    {product.specs && (
                        <div className="mt-32">

                            <h2 className="mb-14 text-center text-4xl font-bold">
                                Technical Specifications
                            </h2>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                                {product.specs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="
rounded-[32px]
bg-white
border
border-neutral-200
p-8
shadow-[0_10px_40px_rgba(0,0,0,0.04)]
"
                                    >

                                        <FeatureIcons
                                            iconName={spec.icon}
                                            className="mb-5 h-10 w-10 text-red-500"
                                        />

                                        <p className="text-zinc-500">
                                            {spec.label}
                                        </p>

                                        <p className="mt-3 text-2xl font-bold">
                                            {spec.value}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-32">

                        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-black p-16 text-center">

                            <h2 className="text-white text-5xl md:text-7xl font-bold">
                                Elevate Your Building Experience
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-white/80">
                                Engineered for luxury residences, commercial buildings and premium architectural spaces.
                            </p>

                            <button onClick={() => window.location.href = "tel:+919063857857"} className="mt-10 rounded-full bg-red-600 px-10 py-4 font-semibold text-white transition hover:scale-105">
                                Contact US
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6"
                    onClick={() => setSelectedImage(null)}
                >

                    <Image
                        src={selectedImage}
                        alt=""
                        width={1600}
                        height={1200}
                        className="max-h-[90vh] w-auto rounded-[32px] object-contain"
                    />

                </div>
            )}
        </>
    )
}