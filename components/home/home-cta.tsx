"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function HomeCTA() {
  return (
    <section className="bg-background px-5 py-24 text-foreground transition-colors duration-300 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-[1100px] flex-col items-center text-center"
      >
        <p className="text-base text-[#ff5a1f]">Next step</p>

        <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
          Have a project in mind?
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
          Tell us what you are building. You get a written scope with phases,
          dates, and a fixed price within two working days.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#e8582a] px-6 text-xs font-medium text-white shadow-[0_6px_28px_rgba(232,88,42,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f06432]"
          >
            Start a Project
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="mailto:hello@quadra.studio"
            className="text-[11px] text-muted-foreground transition-colors hover:text-foreground"
          >
            or email hello@quadra.studio
          </a>
        </div>
      </motion.div>
    </section>
  );
}