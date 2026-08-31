'use client'

import { FaPhoneAlt } from "react-icons/fa"

export default function FloatingCTA() {
    return (
        <a
            href="tel:+919247932351"
            aria-label="Call for Assistance"
            className="
                fixed
                bottom-5
                right-5
                z-[90]
                flex
                items-center
                gap-2
                rounded-full
                bg-red-600
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(225,6,0,0.4)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-red-700
                sm:bottom-6
                sm:right-6
            "
        >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <FaPhoneAlt size={12} />
            </span>
            <span className="hidden sm:inline">Call for Assistance</span>
            <span className="sm:hidden">Call Us</span>
        </a>
    )
}
