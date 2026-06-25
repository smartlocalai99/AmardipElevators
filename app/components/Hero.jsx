import Image from "next/image";
import Link from "next/link";
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

                    <h1 className="break-words text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]">
                        <span className="text-red-600 drop-shadow-[0_0_18px_rgba(225,6,0,0.25)]">
                            Amardeep Elevators
                        </span>{" "}
                        in Kadapa
                    </h1>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
                        The best elevator company in Kadapa. Smart, safe, and energy-efficient home lifts, passenger elevators, and AMC services tailored for modern residential and commercial spaces in Andhra Pradesh.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                        <a
                            href="tel:+919247932351"
                            className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 font-medium text-white transition hover:bg-red-700"
                        >
                            Call Us Now
                        </a>

                        <Link
                            href="/services/home-elevators"
                            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
                        >
                            Explore Solutions
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}