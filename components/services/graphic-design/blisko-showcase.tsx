
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const projects = [
  {
    id: "main-product",
    image: "/images/graphic-design/blisko-main-product.png",
    alt: "BLISKO glossy vinyl sticker paper packaging",
    desktop: "col-span-2 row-span-2 col-start-1 row-start-1",
    mobile: "col-span-2 aspect-square",
  },
  {
    id: "product-pack",
    image: "/images/graphic-design/blisko-product-pack.png",
    alt: "BLISKO sticker paper product packaging",
    desktop: "col-start-3 row-start-1",
    mobile: "aspect-square",
  },
  {
    id: "family",
    image: "/images/graphic-design/blisko-family.png",
    alt: "Family enjoying creative sticker activities",
    desktop: "col-start-4 row-start-1",
    mobile: "aspect-square",
  },
  {
    id: "water-resistant",
    image: "/images/graphic-design/blisko-water-resistant.png",
    alt: "BLISKO water resistant sticker demonstration",
    desktop: "col-start-1 row-start-3",
    mobile: "aspect-square",
  },
  {
    id: "surfaces",
    image: "/images/graphic-design/blisko-surfaces.png",
    alt: "BLISKO stickers displayed on different surfaces",
    desktop: "col-start-2 row-start-3",
    mobile: "aspect-square",
  },
  {
    id: "dimensions",
    image: "/images/graphic-design/blisko-dimensions.png",
    alt: "BLISKO sticker paper dimensions and product features",
    desktop: "col-span-2 row-span-2 col-start-3 row-start-2",
    mobile: "col-span-2 aspect-square",
  },
];

export function BliskoShowcase() {
  return (
    <section
      id="blisko-showcase"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[450px] rounded-full bg-[#ff5a1f]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
              Creative Portfolio / 06
            </p>

            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[54px]">
              Creativity meets{" "}
              <span className="text-[#ff5a1f]">
                functionality.
              </span>
            </h2>
          </div>

          <p className="max-w-[270px] text-[12px] leading-6 text-muted-foreground">
            A complete product advertising campaign for BLISKO,
            showcasing glossy vinyl sticker paper, its features,
            dimensions, and everyday creative possibilities.
          </p>
        </motion.div>

        {/* Desktop: fixed 4-column × 3-row composition */}
        <div
          className="hidden grid-cols-4 grid-rows-3 gap-2.5 md:grid"
          style={{ aspectRatio: "4 / 3" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
              className={`group relative min-h-0 min-w-0 overflow-hidden rounded-md border border-border bg-[var(--surface-raised)] ${project.desktop}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-[#ff5a1f]/40" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: responsive two-column layout */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={`group relative min-w-0 overflow-hidden rounded-md border border-border bg-[var(--surface-raised)] ${project.mobile}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-foreground">
              BLISKO — Glossy Vinyl Sticker Paper
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Product Branding · Advertising Design · Product Photography
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
