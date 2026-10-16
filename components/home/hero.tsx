"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const clients = [
  "Ledgerline",
  "Orbit Logistics",
  "Kite Health",
  "Northmark",
  "Atlas Supply",
  "Fieldnote",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
        }}
      />

      {/* Warm background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[85%]"
        style={{
          background: `
      radial-gradient(ellipse 38% 65% at 8% 100%, rgba(115,43,23,0.24), transparent 75%),
      radial-gradient(ellipse 42% 70% at 50% 100%, rgba(115,43,23,0.20), transparent 75%),
      radial-gradient(ellipse 38% 65% at 92% 100%, rgba(115,43,23,0.24), transparent 75%)
    `,
        }}
      />

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center px-5 pb-0 pt-50 text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[760px] font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-foreground"
        >
          We build the full stack of
          <br className="hidden sm:block" /> your brand
          <br />
          <span className="text-muted-foreground">design, code </span>
          <span className="text-[#f45125]">&amp; AI</span>
          <span className="text-foreground">.</span>
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-[780px] text-[13px] leading-[1.4] text-muted-foreground sm:text-[15px]"
        >
          One studio for identity, interfaces, web and mobile products, and the
          AI systems behind them.
          <br className="hidden sm:block" />
          From Figma to production in weeks, not quarters.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2.5"
        >
          <Link
            href="/contact"
            className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-[#ff4b19] px-4.5 text-[11px] font-medium text-white shadow-[0_4px_22px_rgba(255,75,25,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff6035]"
          >
            Start a Project
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/work"
            className="group inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-background/30 px-4.5 text-[11px] text-foreground transition hover:border-foreground/25 hover:bg-muted"
          >
            See Our Work
            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Client strip and orange semicircular glow */}
      <div className="relative mt-[54px] min-h-[185px] overflow-hidden bg-background px-5 pb-8 pt-[65px] text-center transition-colors duration-300 sm:mt-[54px] sm:min-h-[195px]">
        {/* Large orange arc */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-full overflow-hidden"
        >
          <div
            className="absolute left-1/2 top-0 h-[430px] w-[155%] -translate-x-1/2 rounded-[50%] bg-background"
            style={{
              borderTop: "1px solid rgba(255,90,38,0.28)",
              boxShadow:
                "inset 0 18px 48px rgba(255,75,25,0.35), inset 0 42px 95px rgba(150,43,20,0.22)",
            }}
          />

          <div
            className="absolute inset-x-0 bottom-0 h-12"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--background))",
            }}
          />
        </div>

        {/* Client names */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mx-auto max-w-[1100px]"
        >
          <p className="text-[15px] font-normal text-foreground sm:text-[16px]">
            Built for founders, startups &amp; scaling teams
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] font-medium text-muted-foreground sm:gap-x-6 sm:text-[12px]">
            {clients.map((name) => (
              <li
                key={name}
                className="transition-colors duration-200 hover:text-foreground"
              >
                {name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
