'use client'

import ModernizationImg from '../assets/Modernization.webp'
import MaintenanceImg from '../assets/Maintenance.webp'
import SparePartsImg from '../assets/Spare_Parts.webp'

export default function ServicesSection() {
    return (
        <section id="services" className="bg-[#ffffff] py-16 md:py-20 lg:py-24">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Badge */}
                <div className="mb-6 md:mb-8 flex justify-center">
                    <span className="rounded-full bg-[#E10600] px-6 md:px-10 py-2 md:py-3 text-xs md:text-sm font-bold text-white">
                        Services
                    </span>
                </div>

                {/* ========================= */}
                {/* 01 MODERNIZATION */}
                {/* ========================= */}

                <div className="grid items-center gap-6 lg:grid-cols-[340px_1fr] text-center lg:text-left">

                    <div
                        className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[210px] font-black leading-none text-transparent bg-cover bg-center bg-clip-text mx-auto lg:mx-0"
                        style={{
                            backgroundImage: `url(${ModernizationImg.src})`,
                        }}
                    >
                        01
                    </div>

                    <div className="ml-0 lg:ml-2">

                        <h3 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] font-bold leading-tight text-black">
                            Modernization
                        </h3>

                        <p className="mt-4 md:mt-5 max-w-[850px] text-[16px] md:text-[20px] font-semibold leading-snug text-neutral-500 mx-auto lg:mx-0">
                            Upgrade outdated elevator systems with improved safety,
                            performance, and modern technology solutions.
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5 text-black">

                            <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                Basic Modernization
                            </span>

                            <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                Advanced Modernization
                            </span>

                            <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                Total Modernization
                            </span>

                        </div>

                    </div>

                </div>

                {/* ========================= */}
                {/* 02 MAINTENANCE */}
                {/* ========================= */}

                <div className="relative mt-12 lg:mt-16">

                    <div className="text-center">

                        {/* Mobile 02 */}
                        <div
                            className="lg:hidden mb-4 text-[80px] sm:text-[120px] md:text-[160px] font-black leading-none text-transparent bg-cover bg-center bg-clip-text"
                            style={{
                                backgroundImage: `url(${MaintenanceImg.src})`,
                            }}
                        >
                            02
                        </div>

                        <div className="px-2 md:px-0">

                            <h3 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] font-bold leading-tight text-black">
                                Maintenance Service
                            </h3>

                            <p className="mx-auto mt-4 md:mt-5 max-w-[800px] text-[16px] md:text-[20px] font-semibold leading-snug text-neutral-500">
                                Ensure smooth elevator performance with preventive
                                maintenance, breakdown support, and regular inspections.
                            </p>

                            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-5 text-black">

                                <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                    Comprehensive
                                </span>

                                <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                    Non-Comprehensive
                                </span>

                                <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                    24/7 Support
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Desktop decorative number */}
                    <div
                        className="absolute right-[-40px] top-1/2 hidden -translate-y-1/2 lg:block text-[210px] font-black leading-none text-transparent bg-cover bg-center bg-clip-text"
                        style={{
                            backgroundImage: `url(${MaintenanceImg.src})`,
                        }}
                    >
                        02
                    </div>

                </div>

                {/* ========================= */}
                {/* 03 SPARE PARTS */}
                {/* ========================= */}

                <div className="mt-12 lg:mt-16 grid items-center gap-6 lg:grid-cols-[340px_1fr] text-center lg:text-left">

                    <div
                        className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[210px] font-black leading-none text-transparent bg-cover bg-center bg-clip-text mx-auto lg:mx-0"
                        style={{
                            backgroundImage: `url(${SparePartsImg.src})`,
                        }}
                    >
                        03
                    </div>

                    <div className="ml-0 lg:ml-2 text-black">

                        <h3 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[56px] font-bold leading-tight">
                            Spare Parts
                        </h3>

                        <p className="mt-4 md:mt-5 max-w-[800px] text-[16px] md:text-[20px] font-semibold leading-snug text-neutral-500 mx-auto lg:mx-0">
                            Access reliable elevator spare parts and replacement
                            components for uninterrupted system performance.
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5">

                            <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                Standard Spares
                            </span>

                            <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                Quick Replacement
                            </span>

                            <span className="flex h-12 md:h-14 items-center rounded-full bg-[#f1f1f1] px-5 md:px-8 text-[14px] md:text-[18px] font-bold">
                                Reliable Supply
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}