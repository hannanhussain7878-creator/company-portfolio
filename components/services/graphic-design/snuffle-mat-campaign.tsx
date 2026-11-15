
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const campaignImages = [
  {
    src: "/images/graphic-design/snuffle-mat-01.png",
    alt: "Snuffle mat dimensions and adjustable suitability for different pet breeds",
    title: "Product Overview",
    category: "Product Information",
  },
  {
    src: "/images/graphic-design/snuffle-mat-02.png",
    alt: "Dog owner using a snuffle mat to reduce boredom and encourage sniffing",
    title: "Why Pets Need a Snuffle Mat",
    category: "Lifestyle Advertisement",
  },
  {
    src: "/images/graphic-design/snuffle-mat-03.png",
    alt: "Snuffle mat being placed into a washing machine",
    title: "Easy to Wash",
    category: "Product Benefits",
  },
  {
    src: "/images/graphic-design/snuffle-mat-04.png",
    alt: "Puppy using a snuffle mat with key product features and benefits",
    title: "Key Features & Benefits",
    category: "Feature Highlights",
  },
  {
    src: "/images/graphic-design/snuffle-mat-05.png",
    alt: "Snuffle mat being carried and stored in a basket",
    title: "Easy to Carry & Store",
    category: "Product Convenience",
  },
  {
    src: "/images/graphic-design/snuffle-mat-06.png",
    alt: "Comparison between ordinary pet feeding and using a snuffle mat",
    title: "Benefits of Snuffle Mat",
    category: "Product Comparison",
  },
  {
    src: "/images/graphic-design/snuffle-mat-07.png",
    alt: "Dog sniffing and finding treats inside a snuffle mat",
    title: "Easy to Use",
    category: "Usage Demonstration",
  },
  {
    src: "/images/graphic-design/snuffle-mat-08.png",
    alt: "Puppy exploring a grey and white snuffle mat with hidden treats",
    title: "Product in Action",
    category: "Product Photography",
  },
  {
    src: "/images/graphic-design/snuffle-mat-09.png",
    alt: "Snuffle mat usage demonstration with feeding and enrichment examples",
    title: "Snuffle Mat Experience",
    category: "Marketing Creative",
  },
];

export function SnuffleMatCampaign() {
  return (
    <section
      id="snuffle-mat-campaign"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Brand theme glow */}
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
              Creative Portfolio / 13
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
              Designed for pets,{" "}
              <span className="text-[#ff5a1f]">
                made to engage.
              </span>
            </h2>
          </div>

          <p className="max-w-[310px] text-xs leading-6 text-muted-foreground">
            A complete snuffle mat advertising campaign featuring
            product information, lifestyle photography, usage
            demonstrations, and engaging product benefits.
          </p>
        </motion.div>

        {/* Individual Creative Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {campaignImages.map((item, index) => (
            <motion.article
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
              {/* Original image proportions are preserved */}
              <div className="relative overflow-hidden bg-[var(--surface-raised)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={1400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>

              {/* Image caption */}
              <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-4">
                <div className="min-w-0">
                  <h3 className="truncate text-xs font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] text-muted-foreground">
                    {item.category}
                  </p>
                </div>

                <span className="size-2 shrink-0 rounded-full bg-[#ff5a1f] opacity-70 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Project Footer */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-foreground">
              Snuffle Mat — Pet Product Advertising Campaign
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Product Branding · Advertising Design · Product Photography ·
              Lifestyle Creatives · Marketing Graphics
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-2 text-[10px] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            09 Creative Assets
          </span>
        </div>

      </div>
    </section>
  );
}
