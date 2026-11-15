
"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function BeautyCampaign() {
  return (
    <section
      id="beauty-campaign"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Subtle company-brand glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 size-[450px] rounded-full bg-[#ff5a1f]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end lg:mb-10"
        >
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
              Creative Portfolio / 08
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
              Beauty meets{" "}
              <span className="text-[#ff5a1f]">
                creativity.
              </span>
            </h2>
          </div>

          <p className="max-w-[300px] text-[12px] leading-6 text-muted-foreground">
            A complete social media advertising campaign for a skincare
            brand, featuring product promotions, lifestyle visuals,
            and Instagram-ready creative content.
          </p>
        </motion.div>

        {/* Single Complete Campaign Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-xl border border-border bg-[var(--surface)] p-2 sm:p-3"
        >
          <Image
            src="/images/graphic-design/beauty-campaign.png"
            alt="Complete skincare social media advertising campaign showing Instagram product promotions on a smartphone and eight skincare promotional posts"
            width={1408}
            height={1056}
            priority={false}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="h-auto w-full rounded-lg object-contain transition-transform duration-700 group-hover:scale-[1.01]"
          />

          {/* Subtle hover border */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 transition-colors duration-500 group-hover:ring-[#ff5a1f]/30" />
        </motion.div>

        {/* Project Footer */}
        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-foreground">
              BeautyGlow — Skincare Campaign
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Social Media Design · Product Branding · Advertising Creatives
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-2 text-[10px] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            Complete Campaign
          </span>
        </div>

      </div>
    </section>
  );
}
