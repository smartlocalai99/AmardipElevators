"use client";

import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingCTA() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100"
        >
          <FaArrowUp size={16} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919247932351?text=Hi%20Amardeep%20Elevators%20Kadapa,%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20a%20lift%20installation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919247932351"
        aria-label="Call Amardeep Elevators"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E10600] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_25px_rgba(225,6,0,0.4)]"
      >
        <FaPhoneAlt size={22} className="animate-pulse" />
      </a>
    </div>
  );
}
