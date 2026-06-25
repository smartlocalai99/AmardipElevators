'use client'

import Image from 'next/image';
import FeatureIcons from './FeatureIcons';
export default function ComponentTypeTemplate({ product }) {
    return (
        <section className="bg-[#fafafa] text-neutral-900 py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-24 lg:grid-cols-[45%_55%]">

                    {/* Left */}
                    <div>
                        <span className="text-6xl sm:text-7xl md:text-9xl font-bold text-red-600 leading-none">
                            {product.number}
                        </span>

                        <h1 className="
mt-4
text-4xl sm:text-5xl md:text-7xl
font-bold
tracking-[-0.05em]
leading-[0.9]
uppercase
">
                            {product.title}
                        </h1>

                        <p className="mt-8 max-w-lg text-neutral-600
leading-relaxed
text-lg">
                            {product.description}
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4 md:gap-8">
                            {product.mainIcons?.map((icon, index) => (
                                <div
                                    key={index}
                                    className="
group
bg-white
rounded-[24px]
border
border-neutral-200
p-6
shadow-[0_10px_30px_rgba(0,0,0,0.04)]
"
                                >
                                    <FeatureIcons
                                        iconName={icon.icon}
                                        className="mb-4 h-10 w-10 text-red-500"
                                    />

                                    <span className="whitespace-pre-line text-sm">
                                        {icon.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className='lg:mr-10'>
                        <Image
                            src={product.largeImage}
                            alt={product.title}
                            width={1200}
                            height={800}
                            className="
w-full
rounded-[40px]
border
border-neutral-200
shadow-[0_30px_100px_rgba(0,0,0,0.08)]
object-cover
"
                        />
                    </div>

                </div>

                {/* Features */}
                {product.features && (
                    <div className="mt-20 border-t border-neutral-800 pt-12">
                        <h3 className="mb-10 text-xl font-semibold text-red-500">
                            Features
                        </h3>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {product.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="
  rounded-[24px]
  bg-white
  border
  border-neutral-200
  p-6
  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
  "
                                >
                                    <div className="mb-3 h-1 w-10 rounded-full bg-red-600" />
                                    {feature.replace(/\n/g, ' ')}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-24">
                    <div className="
    rounded-[40px]
    bg-black
    text-white
    p-8 md:p-16
    text-center
  ">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Need More Information?
                        </h2>

                        <p className="mt-4 text-white/70">
                            Speak with our elevator specialists to find the right component for your project.
                        </p>

                        <a
                            href="tel:+919063857857"
                            className="
    mt-8
    inline-block
    rounded-full
    bg-red-600
    px-10
    py-4
    font-semibold
    text-white
  "
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}