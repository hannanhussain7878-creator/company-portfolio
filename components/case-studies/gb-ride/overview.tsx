
"use client";

import { motion } from "motion/react";

const overviewCards = [
  {
    number: "01",
    label: "Problem",
    title: "Booking felt slow",
    description:
      "Riders juggled scattered screens just to hail a car and negotiate a fair price.",
  },
  {
    number: "02",
    label: "Solution",
    title: "One fluid flow",
    description:
      "A single, map-first journey from pickup to payment — offers surface in seconds.",
  },
  {
    number: "03",
    label: "Goal",
    title: "Trust at speed",
    description:
      "Make every fare, driver, and route feel transparent, safe, and effortless.",
  },
];

export function RideOverview() {
  return (
    <section
      id="overview"
      className="bg-background px-5 py-24 text-foreground transition-colors duration-300 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-[650px]"
        >
          <p className="mb-5 text-[10px] font-medium tracking-[0.24em] text-[#ff5a1f]">
            01 — OVERVIEW
          </p>

          <h2 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[56px]">
            A smarter way to
            <br className="hidden sm:block" />
            move through the city.
          </h2>

          <p className="mt-6 max-w-[390px] text-[13px] leading-6 text-muted-foreground sm:text-sm">
            SMz4U rethinks ride-hailing around one idea: the rider is in
            control.
          </p>
        </motion.div>

        {/* Problem / Solution / Goal */}
        <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3 lg:mt-20">
          {overviewCards.map((card, index) => (
            <motion.article
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative flex min-h-[165px] flex-col justify-between overflow-hidden rounded-[24px] border border-border bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a1f]/30 hover:shadow-[0_15px_35px_rgba(255,90,31,0.07)] sm:p-7 lg:min-h-[175px]"
            >
              {/* Subtle hover accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-[#ff5a1f]/[0.04] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium text-[#ff5a1f]">
                    {card.label}
                  </span>

                  <span className="text-[9px] tabular-nums text-muted-foreground/50">
                    {card.number}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-[19px] font-semibold tracking-tight text-foreground sm:text-xl">
                  {card.title}
                </h3>

                <p className="mt-3 max-w-[290px] text-[11px] leading-[1.8] text-muted-foreground sm:text-xs">
                  {card.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#ff5a1f]/50 transition-transform duration-500 group-hover:scale-x-100 sm:left-7 sm:right-7" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
