"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Final_Logo_red.webp";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!window.location.hash) {
                if ("scrollRestoration" in window.history) {
                    window.history.scrollRestoration = "manual";
                }
                window.scrollTo({ top: 0, behavior: "instant" });
            }
        }
    }, []);


    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 overflow-x-clip">
                <div className="px-3 py-3 sm:px-4 md:px-6">
                    {/* Main Navbar */}
                    <div className="mx-auto w-full max-w-7xl rounded-full border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                        <div className="flex h-16 items-center justify-between px-4 sm:px-6">

                            {/* Logo */}
                            <Link
                                href="/"
                                className="flex min-w-0 items-center gap-2 focus-visible:outline-none"
                            >
                                <Image
                                    src={Logo}
                                    alt="Amardip Elevators Logo"
                                    width={40}
                                    height={40}
                                    priority
                                    className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
                                />

                                <div className="min-w-0 leading-tight">
                                    <p className="truncate text-sm font-bold tracking-tight text-red-600 sm:text-base">
                                        Amardip
                                    </p>
                                    <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-red-600/90 sm:text-xs">
                                        Elevators
                                    </p>
                                </div>
                            </Link>

                            {/* Desktop Navigation Links */}
                            <nav className="hidden items-center gap-6 text-sm font-semibold text-black/80 md:flex lg:gap-8">
                                <Link href="/" className="transition hover:text-red-600">
                                    Home
                                </Link>
                                <Link href="/#products" className="transition hover:text-red-600">
                                    Products
                                </Link>
                                <Link href="/services/home-elevators" className="transition hover:text-red-600">
                                    Services
                                </Link>
                                <Link href="/blog" className="transition hover:text-red-600">
                                    Blog
                                </Link>
                                <Link href="/faqs" className="transition hover:text-red-600">
                                    FAQs
                                </Link>
                                <Link href="/#contact" className="transition hover:text-red-600">
                                    Contact
                                </Link>
                            </nav>

                            {/* Desktop CTA Button */}
                            <a
                                href="tel:+919247932351"
                                className="hidden rounded-full bg-red-600 px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-red-700 hover:shadow-lg md:block whitespace-nowrap"
                            >
                                Book Free Consultation
                            </a>

                            {/* Mobile Hamburger Toggle */}
                            <button
                                aria-label={open ? "Close Menu" : "Open Menu"}
                                onClick={() => setOpen(!open)}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-black transition hover:bg-black/5 focus:outline-none md:hidden"
                            >
                                {open ? "✕" : "☰"}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {open && (
                        <div className="mt-2 w-full max-w-full overflow-hidden rounded-2xl border border-black/5 bg-white/98 shadow-xl backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                            <nav className="flex flex-col p-3 text-sm font-medium text-black/80 divide-y divide-black/5">
                                <Link
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className="py-3 px-2 transition active:bg-black/5 rounded-lg active:text-red-600"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/#products"
                                    onClick={() => setOpen(false)}
                                    className="py-3 px-2 transition active:bg-black/5 rounded-lg active:text-red-600"
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/services/home-elevators"
                                    onClick={() => setOpen(false)}
                                    className="py-3 px-2 transition active:bg-black/5 rounded-lg active:text-red-600"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/blog"
                                    onClick={() => setOpen(false)}
                                    className="py-3 px-2 transition active:bg-black/5 rounded-lg active:text-red-600"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/faqs"
                                    onClick={() => setOpen(false)}
                                    className="py-3 px-2 transition active:bg-black/5 rounded-lg active:text-red-600"
                                >
                                    FAQs
                                </Link>
                                <Link
                                    href="/#contact"
                                    onClick={() => setOpen(false)}
                                    className="py-3 px-2 transition active:bg-black/5 rounded-lg active:text-red-600"
                                >
                                    Contact
                                </Link>
                                <div className="pt-3 px-2">
                                    <a
                                        href="tel:+919247932351"
                                        onClick={() => setOpen(false)}
                                        className="block w-full text-center rounded-xl bg-red-600 px-5 py-3 font-medium text-white shadow-md transition active:bg-red-700"
                                    >
                                        Book Free Consultation
                                    </a>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </header>


        </>
    );
}