import Image from "next/image";
import HeroImg from "../assets/Hero_img.webp";

export default function Hero() {
    return (
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden py-16 md:py-20 lg:py-24">

            {/* Background Image */}
            <Image
                src={HeroImg}
                alt="Luxury Elevators"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-right"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

            {/* Content */}
            <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">

                    <h1 className="break-words text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[88px]">
                        <span className="text-brand-yellow drop-shadow-[0_0_18px_rgba(255,215,1,0.25)]">
                            Luxury Elevators
                        </span>{" "}
                        For Modern Architecture
                    </h1>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
                        Smart, safe, and premium elevator solutions engineered for
                        modern residential, commercial, and healthcare spaces.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                        <a
                            href="tel:+910000000000"
                            className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 font-medium text-white transition hover:bg-red-700"
                        >
                            Let&apos;s Talk
                        </a>

                        <a
                            href="#products"
                            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
                        >
                            Explore Solutions
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}