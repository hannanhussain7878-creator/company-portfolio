
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const artworkRows = [
  {
    src: "/images/graphic-design/interior-row-01.png",
    alt: "Interior design campaign — first collection of four posters",
    width: 2048,
    height: 668,
  },
  {
    src: "/images/graphic-design/interior-row-02.png",
    alt: "Interior design campaign — second collection of four posters",
    width: 2048,
    height: 667,
  },
];

export function InteriorDesignShowcase() {
  return (
    <section
      id="interior-design"
      className="relative overflow-hidden bg-background px-4 py-20 text-foreground transition-colors duration-300 sm:px-8 lg:px-10 lg:py-28"
    >
      {/* Ambient orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[450px] rounded-full bg-[#ff5a1f]/[0.07] blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end lg:mb-14"
        >
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ff5a1f]">
              04 — Creative Showcase
            </p>

            <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Spaces that inspire.
              <br />
              <span className="text-[#ff5a1f]">
                Designs that connect.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            A visual exploration of modern interiors, thoughtful spaces,
            and creative design storytelling.
          </p>
        </motion.div>

        {/* Two original artwork images */}
        <div className="space-y-4 sm:space-y-6">
          {artworkRows.map((artwork, index) => (
            <motion.div
              key={artwork.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-xl border border-border bg-[var(--surface)] shadow-sm transition-all duration-500 hover:border-[#ff5a1f]/40 hover:shadow-[0_15px_40px_rgba(255,90,31,0.10)]"
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                sizes="(max-width: 1320px) 100vw, 1320px"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>

        {/* Project information */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Interior Living — Design Campaign
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Interior Design · Creative Direction · Visual Storytelling
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            08 Designs · 02 Artwork Files
          </span>
        </div>
      </div>
    </section>
  );
}
