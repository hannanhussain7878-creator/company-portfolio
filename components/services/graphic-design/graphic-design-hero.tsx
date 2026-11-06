
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "40+", label: "Projects" },
  { value: "15+", label: "Brands" },
  { value: "6+", label: "Design Categories" },
];

export function GraphicDesignHero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#080809] px-5 pb-12 pt-28 text-white sm:px-8 lg:h-svh lg:min-h-[680px] lg:px-10 lg:pb-10 lg:pt-24">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 size-[500px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,88,42,0.19), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-[550px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,88,42,0.14), transparent 70%)",
        }}
      />

      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      {/* Main content */}
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] w-full max-w-[1480px] items-center gap-10 lg:h-full lg:min-h-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-[680px] lg:mx-0"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#e8582a] shadow-[0_0_14px_rgba(232,88,42,0.8)]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f26a38] sm:text-xs">
              Visual Stories · Brand Identities · Creative Work
            </p>
          </div>

          <h1 className="font-display max-w-[760px] text-[clamp(2.8rem,5.2vw,5.4rem)] font-bold leading-[0.99] tracking-[-0.055em] text-white">
            Design that makes brands{" "}
            <span className="text-[#e8582a]">impossible</span> to ignore.
          </h1>

          <p className="mt-6 max-w-[560px] text-sm leading-7 text-neutral-400 sm:text-base">
            A collection of visual identities, campaigns, packaging and
            creative work crafted to make ideas memorable.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#portfolio"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#e8582a] px-7 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(232,88,42,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#f06432] hover:shadow-[0_12px_35px_rgba(232,88,42,0.35)]"
            >
              Explore Portfolio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#portfolio"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-white/25 px-6 text-sm font-medium text-white transition duration-300 hover:border-[#e8582a] hover:bg-[#e8582a]/10"
            >
              <span className="grid size-6 place-items-center rounded-full border border-white/50 transition group-hover:border-[#e8582a]">
                <Play className="ml-0.5 size-3 fill-current" />
              </span>
              Watch Reel
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-10 flex max-w-[580px] items-center divide-x divide-white/15">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 px-4 first:pl-0">
                <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] text-neutral-400 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[360px] w-full max-w-[680px] sm:h-[460px] lg:h-[min(72vh,620px)]"
        >
          {/* Artwork glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8582a]/20 blur-[100px]"
          />

          {/* Back brand identity card */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [3, 2, 3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[5%] top-[5%] h-[58%] w-[48%] overflow-hidden rounded-[24px] border border-white/20 bg-[#25201d] shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
          >
            <Image
              src="/images/graphic-design/organic-marketing.png"
              alt="Brand identity design showcase"
              fill
              priority
              sizes="(max-width: 768px) 45vw, 320px"
              className="object-cover"
            />
          </motion.div>

          {/* Coffee packaging card */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [-4, -3, -4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[20%] top-[12%] z-10 h-[48%] w-[43%] overflow-hidden rounded-[22px] border border-white/20 bg-[#171311] shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
          >
            <Image
              src="/images/graphic-design/chime-hero.png"
              alt="Coffee packaging creative design"
              fill
              priority
              sizes="(max-width: 768px) 45vw, 300px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs font-semibold text-white">
              Packaging Design
            </p>
          </motion.div>

          {/* Main campaign card */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [2, 1, 2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[1%] top-[27%] z-20 h-[48%] w-[54%] overflow-hidden rounded-[24px] border border-[#f26a38]/50 bg-[#e8582a] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/images/graphic-design/blisko-family.png"
              alt="Creative brand campaign design"
              fill
              priority
              sizes="(max-width: 768px) 55vw, 370px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-sm font-semibold text-white">
              Brand Campaign
            </p>
          </motion.div>

          {/* Editorial design card */}
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [-3, -2, -3] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[1%] right-[8%] z-30 h-[39%] w-[53%] overflow-hidden rounded-[22px] border border-white/20 bg-[#eee8df] shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/images/graphic-design/layered-paddle.png"
              alt="Editorial and print design showcase"
              fill
              sizes="(max-width: 768px) 55vw, 360px"
              className="object-cover"
            />
          </motion.div>

          {/* Orange accent */}
          <div className="absolute bottom-[12%] left-[5%] -z-0 size-20 rounded-full bg-[#e8582a]/20 blur-3xl" />
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">
          Scroll to explore
        </span>
        <span className="h-7 w-px bg-gradient-to-b from-[#e8582a] to-transparent" />
      </div>
    </section>
  );
}
