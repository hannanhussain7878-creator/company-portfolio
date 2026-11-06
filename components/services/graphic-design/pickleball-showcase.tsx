
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  {
    id: "product",
    src: "/images/graphic-design/product-set.png",
    alt: "Smash Ace ultimate pickleball set",
    position: "col-start-1 row-start-1",
  },
  {
    id: "bounce",
    src: "/images/graphic-design/bounce-campaign.png",
    alt: "Precision bounce and shock resistant pickleballs",
    position: "col-start-2 row-start-1",
  },
  {
    id: "paddles",
    src: "/images/graphic-design/paddle-product.png",
    alt: "Smash Ace pickleball paddles and accessories",
    position: "col-start-3 row-start-1",
  },
  {
    id: "sweet-spot-small",
    src: "/images/graphic-design/sweet-spot.png",
    alt: "Large sweet spot pickleball paddle campaign",
    position: "col-start-4 row-start-1",
  },
  {
    id: "layers-small",
    src: "/images/graphic-design/layered-paddle.png",
    alt: "Layered paddle construction and materials",
    position: "col-start-5 row-start-1",
  },
  {
    id: "action",
    src: "/images/graphic-design/action-player.png",
    alt: "Pickleball player demonstrating Smash Ace paddle",
    position: "col-span-2 row-span-2 col-start-1 row-start-2",
  },
  {
    id: "product-detail",
    src: "/images/graphic-design/product-detail.png",
    alt: "Pickleball set product details and dimensions",
    position: "col-start-3 row-start-2",
  },
  {
    id: "layers-detail",
    src: "/images/graphic-design/layered-detail.png",
    alt: "Exploded view of pickleball paddle construction",
    position: "col-start-3 row-start-3",
  },
  {
    id: "sweet-spot-large",
    src: "/images/graphic-design/sweet-spot-large.png",
    alt: "Smash Ace large sweet spot paddle advertising",
    position: "col-span-2 row-span-2 col-start-4 row-start-2",
  },
];

export function PickleballShowcase() {
  return (
    <section
      id="pickleball-showcase"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-1/3 size-[450px] rounded-full bg-[#ff5a1f]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end lg:mb-10"
        >
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
              Creative Portfolio / 07
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
              Performance meets{" "}
              <span className="text-[#ff5a1f]">
                creativity.
              </span>
            </h2>
          </div>

          <p className="max-w-[280px] text-[12px] leading-6 text-muted-foreground">
            A complete visual advertising campaign for Smash Ace,
            featuring product photography, performance highlights,
            product specifications, and lifestyle visuals.
          </p>
        </motion.div>

        {/* Desktop Gallery */}
        <div
          className="hidden grid-cols-5 grid-rows-3 gap-2.5 md:grid"
          style={{ aspectRatio: "1.59 / 1" }}
        >
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.055,
              }}
              className={`group relative min-h-0 min-w-0 overflow-hidden rounded-md border border-border bg-[var(--surface-raised)] ${item.position}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1200px) 20vw, 240px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-[#ff5a1f]/50" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Gallery */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              className={`group relative aspect-square min-w-0 overflow-hidden rounded-md border border-border bg-[var(--surface-raised)] ${
                index === 5 || index === 8 ? "col-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.div>
          ))}
        </div>

        {/* Project Footer */}
        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-foreground">
              Smash Ace — Pickleball Set
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Product Branding · Advertising Design · Product Photography
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
