'use client'
import Image from "next/image";
import React, { useState } from 'react';
import Project1 from "../assets/Project_1.webp";
import Project2 from "../assets/Project_2.webp";
import Project3 from "../assets/Project_3.webp";
import Project4 from "../assets/Project_4.webp";
import Project5 from "../assets/Project_5.webp";
import Project6 from "../assets/Project_6.webp";
import { RxCross2 } from "react-icons/rx";

/* =========================
   BADGE
========================= */

function Badge({ children, className = '' }) {
    return (
        <span
            className={`inline-flex items-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white ${className}`}
        >
            {children}
        </span>
    )
}

/* =========================
   DATA
========================= */

const PLACEHOLDER_IMAGES = [
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
]

/* =========================
   MAIN COMPONENT
========================= */

export default function ProjectsGallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section id="projects" className="bg-white py-16 md:py-20 lg:py-24">

            <div className="mx-auto flex max-w-7xl flex-col items-center text-center px-4 sm:px-6 lg:px-8">

                {/* BADGE */}
                <Badge>Our Projects</Badge>

                {/* HEADING */}
                <h2 className="mt-6 md:mt-8 max-w-4xl text-4xl font-medium leading-tight text-black md:text-[64px]">
                    Installed Across Modern Spaces
                </h2>

                {/* GRID */}
                <div className="mt-12 lg:mt-16 w-full">

                    <div className="grid w-full grid-cols-4 auto-rows-[70px] gap-3  md:grid-cols-4 md:auto-rows-[150px] lg:grid-cols-9 lg:grid-rows-7 lg:h-[800px]">

                        {PLACEHOLDER_IMAGES.map((src, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(src)}
                                className={`
      relative overflow-hidden rounded-[12px] cursor-pointer group

      ${index === 0
                                        ? 'col-span-2 row-span-3 md:col-span-4 md:row-span-1 lg:col-span-5 lg:row-span-4'
                                        : ''
                                    }

      ${index === 1
                                        ? 'col-span-2 row-span-3 col-start-3 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-4 lg:col-start-6 lg:row-start-1'
                                        : ''
                                    }

      ${index === 2
                                        ? 'col-span-2 row-span-3 row-start-4 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-4 lg:col-start-8 lg:row-start-1'
                                        : ''
                                    }

      ${index === 3
                                        ? 'col-span-2 row-span-3 col-start-3 row-start-4 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-5'
                                        : ''
                                    }

      ${index === 4
                                        ? 'col-span-2 row-span-3 row-start-7 md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-3 lg:col-start-3 lg:row-start-5'
                                        : ''
                                    }

      ${index === 5
                                        ? 'col-span-2 row-span-3 col-start-3 row-start-7 md:col-span-4 md:row-span-1 lg:col-span-4 lg:row-span-3 lg:col-start-6 lg:row-start-5'
                                        : ''
                                    }
    `}
                            >
                                <Image
                                    src={src}
                                    alt={`Project ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* LIGHTBOX */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* close button */}
                    <button
                        className="absolute top-6 right-6 text-3xl z-10 font-bold bg-white rounded-full p-1.5 md:p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <RxCross2 className="text-[#E10600]" />
                    </button>

                    {/* modal container */}
                    <div
                        className="relative w-[92%] md:w-[80%] h-[75%] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* inner wrapper */}
<div
    className="w-full h-full rounded-2xl overflow-x-auto overflow-y-auto md:overflow-hidden flex items-center justify-start"
>                            <Image
    src={selectedImage}
    alt="project preview"
    width={2000}
    height={2000}
    className="max-w-none h-auto w-auto object-none shrink-0"
 />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}