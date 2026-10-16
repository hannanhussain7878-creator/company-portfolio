
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
    <section className="relative isolate overflow-hidden bg-[#0b0a0a] text-center">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
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
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[65%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(115,43,23,0.20), transparent 72%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center px-5 pb-0 pt-33 sm:pt-45">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px] font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-[#f5f3f1]"
        >
          We build the full stack of
          <br className="hidden sm:block" /> your brand
          <br />
          <span className="text-[#777479]">design, code </span>
          <span className="text-[#f45125]">&amp; AI</span>
          <span>.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-[780px] text-[13px] leading-[1.4] text-[#a5a1a5] sm:text-[15px]"
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
            className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-[#ff4b19] px-4.5 text-[11px] font-medium text-black shadow-[0_4px_22px_rgba(255,75,25,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff6035]"
          >
            Start a Project
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/work"
            className="group inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-4.5 text-[11px] text-white transition hover:border-white/25 hover:bg-white/5"
          >
            See Our Work
            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Client logos integrated into the hero */}
      <div className="relative mt-13.5 min-h-46.25 overflow-hidden px-5 pb-8 pt-16.25 sm:mt-13.5 sm:min-h-48.75">
        {/* Large orange semicircle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full overflow-hidden"
        >
          <div
            className="absolute left-1/2 top-0 h-107.5 w-[155%] -translate-x-1/2 rounded-[50%] bg-[#0b0a0a]"
            style={{
              borderTop: "1px solid rgba(255,90,38,0.22)",
              boxShadow:
                "inset 0 18px 48px rgba(255,75,25,0.42), inset 0 42px 95px rgba(150,43,20,0.28)",
            }}
          />

          <div
            className="absolute inset-x-0 bottom-0 h-12"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #0b0a0a)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mx-auto max-w-[1100px]"
        >
          <p className="text-[15px] font-normal text-[#f0eeee] sm:text-[16px]">
            Built for founders, startups &amp; scaling teams
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] font-medium text-[#777479] sm:gap-x-6 sm:text-[12px]">
            {clients.map((name) => (
              <li
                key={name}
                className="transition-colors duration-200 hover:text-white"
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
