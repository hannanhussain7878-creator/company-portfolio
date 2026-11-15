
"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function NesofyCampaign() {
  return (
    <section
      id="nesofy-campaign"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Company portfolio theme glow */}
      <div className="pointer-events-none absolute -right-40 top-20 size-[450px] rounded-full bg-[#ff5a1f]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
              Creative Portfolio / 10
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
              Safety meets{" "}
              <span className="text-[#ff5a1f]">
                design.
              </span>
            </h2>
          </div>

          <p className="max-w-[310px] text-xs leading-6 text-muted-foreground">
            A complete product advertising campaign for NESOFY safety
            earmuffs, highlighting product design, noise reduction,
            comfort, protection, and everyday usability.
          </p>
        </motion.div>

        {/* Single Complete Campaign Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-xl border border-border bg-[var(--surface)]"
        >
          <Image
            src="/images/graphic-design/nesofy-campaign.png"
            alt="NESOFY safety earmuff complete advertising campaign featuring product photography, packaging, product features, and workplace protection"
            width={1460}
            height={1024}
            priority={false}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
          />

          {/* Subtle company-theme hover border */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 transition-colors duration-300 group-hover:ring-[#ff5a1f]/40" />
        </motion.div>

        {/* Project Footer */}
        <div className="mt-7 flex flex-col justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-foreground">
              NESOFY — Safety Earmuff Campaign
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Product Branding · Advertising Design · Product Photography ·
              Marketing Creatives
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
