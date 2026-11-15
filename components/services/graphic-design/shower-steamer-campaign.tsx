
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const creatives = [
  {
    id: "benefits",
    src: "/images/graphic-design/shower-steamer-01.png",
    alt: "Shower steamer benefits and calming shower experience",
    position:
      "col-span-2 row-span-1 md:col-start-1 md:row-start-1 md:row-span-2",
  },
  {
    id: "packaging",
    src: "/images/graphic-design/shower-steamer-02.png",
    alt: "Eucalyptus and mint shower steamer packaging",
    position: "col-span-1 row-span-1 md:col-start-3 md:row-start-1",
  },
  {
    id: "lifestyle",
    src: "/images/graphic-design/shower-steamer-04.png",
    alt: "Shower steamer lifestyle and relaxing moments",
    position: "col-span-1 row-span-1 md:col-start-4 md:row-start-1",
  },
  {
    id: "comparison",
    src: "/images/graphic-design/shower-steamer-03.png",
    alt: "Comparison between our shower steamer and other products",
    position: "col-span-1 row-span-1 md:col-start-1 md:row-start-3",
  },
  {
    id: "size",
    src: "/images/graphic-design/shower-steamer-05.png",
    alt: "Shower steamer size and weight comparison",
    position: "col-span-1 row-span-1 md:col-start-2 md:row-start-3",
  },
  {
    id: "premium",
    src: "/images/graphic-design/shower-steamer-06.png",
    alt: "Premium shower steamer product advertisement",
    position:
      "col-span-2 row-span-1 md:col-start-3 md:row-start-2 md:row-span-2",
  },
];

export function ShowerSteamerCampaign() {
  return (
    <section
      id="shower-steamer-campaign"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Portfolio theme glow */}
      <div className="pointer-events-none absolute -left-40 top-20 size-[400px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[400px] rounded-full bg-[#ff5a1f]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Optional section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
            Graphic Design / Product Campaign
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Shower Steamer
            <span className="ml-2 text-[#ff5a1f]">Campaign</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            A complete product advertising campaign featuring packaging,
            lifestyle creatives, product benefits, and promotional designs.
          </p>
        </motion.div>

        {/* Reference-style collage */}
        <div
          className="
            grid
            grid-cols-2
            grid-rows-[repeat(4,minmax(0,1fr))]
            gap-2
            sm:gap-3
            md:aspect-[4/3]
            md:grid-cols-4
            md:grid-rows-3
            md:gap-3
          "
        >
          {creatives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className={`
                group relative min-h-0 overflow-hidden rounded-lg
                border border-border
                bg-[var(--surface)]
                transition-colors duration-300
                hover:border-[#ff5a1f]/60
                ${item.position}
              `}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index === 0}
                sizes="
                  (max-width: 767px) 50vw,
                  (max-width: 1100px) 25vw,
                  275px
                "
                className="
                  object-contain
                  transition-transform duration-700 ease-out
                  group-hover:scale-[1.025]
                "
              />

              {/* Very subtle hover border */}
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/[0.03] transition-all duration-300 group-hover:ring-[#ff5a1f]/30" />
            </motion.div>
          ))}
        </div>

        {/* Project footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <div>
            <p className="text-xs font-semibold text-foreground">
              Eucalyptus & Mint — Shower Steamer
            </p>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Product Design · Advertising · Packaging · Visual Campaign
            </p>
          </div>

          <span className="rounded-full border border-border px-3 py-2 text-[10px] text-muted-foreground">
            <span className="mr-2 inline-block size-1.5 rounded-full bg-[#ff5a1f]" />
            06 Individual Designs
          </span>
        </div>
      </div>
    </section>
  );
}
