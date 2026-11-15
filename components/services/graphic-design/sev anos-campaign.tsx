
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const campaignImages = [
  {
    src: "/images/graphic-design/sevanos-main.png",
    alt: "SEVANOS foot file promotional design showing smooth feet and product benefits",
    title: "Smooth Feet, Every Time",
    category: "Main Advertisement",
  },
  {
    src: "/images/graphic-design/sevanos-packaging.png",
    alt: "SEVANOS premium foot file product packaging design",
    title: "Product Packaging",
    category: "Packaging Design",
  },
  {
    src: "/images/graphic-design/sevanos-benefits.png",
    alt: "SEVANOS foot file product benefits and features",
    title: "Product Benefits",
    category: "Product Features",
  },
  {
    src: "/images/graphic-design/sevanos-how-to-use.png",
    alt: "SEVANOS foot file step-by-step usage instructions",
    title: "How to Use",
    category: "Instructional Design",
  },
  {
    src: "/images/graphic-design/sevanos-why-choose.png",
    alt: "SEVANOS foot file quality, durability, and ergonomic design",
    title: "Why Choose SEVANOS?",
    category: "Product Information",
  },
  {
    src: "/images/graphic-design/sevanos-everyday-care.png",
    alt: "SEVANOS foot care promotional design showing everyday use",
    title: "Everyday Foot Care",
    category: "Lifestyle Advertisement",
  },
];

export function SevanosCampaign() {
  return (
    <section
      id="sevanos-campaign"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Company theme glow */}
      <div className="pointer-events-none absolute -right-40 top-20 size-[450px] rounded-full bg-[#ff5a1f]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
              Creative Portfolio / 12
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
              Beauty meets{" "}
              <span className="text-[#ff5a1f]">
                thoughtful design.
              </span>
            </h2>
          </div>

          <p className="max-w-[310px] text-xs leading-6 text-muted-foreground">
            A complete product advertising campaign for SEVANOS,
            featuring promotional graphics, product packaging,
            product benefits, and step-by-step usage instructions.
          </p>
        </motion.div>

        {/* Individual Campaign Designs */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {campaignImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.08,
              }}
              className="group overflow-hidden rounded-xl border border-border bg-[var(--surface)] transition-colors duration-300 hover:border-[#ff5a1f]/50"
            >
              {/* Full image — no cropping */}
              <div className="relative overflow-hidden bg-[var(--surface-raised)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1700}
                  height={1816}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>

              {/* Image Details */}
              <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-4">
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-foreground">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] text-muted-foreground">
                    {item.category}
                  </p>
                </div>

                <span className="size-2 shrink-0 rounded-full bg-[#ff5a1f] opacity-70 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Footer */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-foreground">
              SEVANOS — Premium Foot File Campaign
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Product Branding · Packaging Design · Advertising Design ·
              Product Marketing · Lifestyle Creatives
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-2 text-[10px] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            06 Creative Assets
          </span>
        </div>

      </div>
    </section>
  );
}
