"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const stats = [
    {
      number: 25,
      suffix: "+",
      label: "Year's Experience",
    },
    {
      number: 700,
      suffix: "+",
      label: "Project's Completed",
    },
    {
      number: 450,
      suffix: "+",
      label: "Lift Installations",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support Services",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="w-full bg-[#d90404]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative text-center py-10 px-6"
            >
              <h2 className="text-white text-4xl md:text-5xl font-bold">
                {inView && (
                  <>
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.5}
                    />
                    {item.suffix}
                  </>
                )}
              </h2>

              <div className="w-10 h-[1px] bg-gray-300 mx-auto my-4"></div>

              <p className="text-white-600 uppercase tracking-widest text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}