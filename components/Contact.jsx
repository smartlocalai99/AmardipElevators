'use client'

import React from 'react'

import {
    FaEnvelope,
    FaPhoneAlt,
    FaClock,
} from "react-icons/fa"

export default function ContactSection() {
    return (
        <section id="contact" className="bg-white py-16 md:py-20 lg:py-24">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Badge */}
                <div className="mb-6 md:mb-8 flex justify-center">
                    <span className="rounded-full bg-[#E10600] px-6 md:px-8 py-2 md:py-2.5 text-xs md:text-sm font-bold text-white">
                        Contact
                    </span>
                </div>

                {/* Heading & Subtitle */}
                <div className="mb-12 lg:mb-16 text-center">

                    <h2 className="text-[30px] md:text-[44px] lg:text-[64px] font-bold leading-tight tracking-tight text-black">
                        Let’s Build Your <span className="text-[#E10600]">Next Project</span>
                    </h2>

                    <p className="mt-5 md:mt-6 max-w-2xl text-[14px] md:text-[16px] lg:text-[17px] font-medium leading-relaxed text-neutral-500 mx-auto">
                        Connect with our team for premium elevator solutions, project consultations,
                        installation support, and expert guidance.
                    </p>

                </div>

                {/* Info Grid */}
                <div className="w-full flex justify-center">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-4xl">

                        {/* Mobile No Column */}
                        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">

                            <div className="mb-6 flex items-center gap-3 text-[#E10600]">
                                <FaPhoneAlt size={20} />
                                <h3 className="text-lg md:text-xl font-bold">Contact Details :</h3>
                            </div>

                            <div className="space-y-6 md:space-y-8">

                                <div>
                                    <h4 className="mb-2 text-[14px] md:text-[15px] font-bold text-black">
                                        Company Mobile Number :
                                    </h4>
                                    <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-neutral-500">
                                        +91 9247932351
                                    </p>
                                </div>

                                <div>
                                    <h4 className="mb-2 text-[14px] md:text-[15px] font-bold text-black">
                                        Customer Support Details
                                    </h4>
                                    <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-neutral-500">
                                        +91 9247932352
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Email & Hours Column */}
                        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm space-y-10 md:space-y-12">

                            <div>
                                <div className="mb-4 flex items-center gap-3 text-[#E10600]">
                                    <FaEnvelope size={20} />
                                    <h3 className="text-lg md:text-xl font-bold">Email</h3>
                                </div>

                                <a
                                    href="mailto:amardipelevators@gmail.com"
                                    className="text-[14px] md:text-[15px] font-medium leading-relaxed text-neutral-500 hover:text-[#E10600] transition"
                                >
                                    amardipelevators@gmail.com
                                </a>
                            </div>

                            <div>
                                <div className="mb-4 flex items-center gap-3 text-[#E10600]">
                                    <FaClock size={20} />
                                    <h3 className="text-lg md:text-xl font-bold">Working Hours</h3>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-neutral-500">
                                        Monday - Saturday
                                    </p>
                                    <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-neutral-500">
                                        9:00 AM - 7:00 PM
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
