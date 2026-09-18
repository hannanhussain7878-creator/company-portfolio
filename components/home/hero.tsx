"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="hero-glow absolute right-10 top-0 h-64 w-64 sm:h-105 sm:w-105 lg:h-260 lg:w-260" />

        <div className="grid-background absolute inset-0 opacity-60 " />
      </div>

      <div className="mx-auto max-w-300 px-5 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex  items-center rounded-full border border-border px-3 py-1.5 text-[13px]  text-[#c7c7cc]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d92b00] me-2"></span>{" "}
            4 founders · 7 disciplines · One team.{" "}
            <ArrowRight className="ms-2 size-3.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display max-w-4xl text-[clamp(2.25rem,7vw,5.6rem)] font-bold leading-[0.88] tracking-[-0.055em]"
          >
            We build the full
            <br />
            stack
            <br />
            of your brand —{" "}
            <span className="text-muted-foreground">design, code</span>{" "}
            <span className="text-orange-500">& AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 max-w-xl text-lg  leading-6 text-muted-foreground"
          >
            One studio for identity, interfaces, web and mobile products, and
            the AI systems behind them. From Figma to production in weeks, not
            quarters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-light  text-white transition hover:bg-orange-600"
            >
              Start a Project
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition hover:bg-muted"
            >
              See Our Work
              <ArrowUpRight className="size-3.5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-border bg-[#0b0b0d] shadow-2xl lg:mt-20 mb-8"
        >
          <div className="relative aspect-16/8">
            <Image
              src="/images/hero.png"
              alt="Hero"
              fill
              className="object-fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
