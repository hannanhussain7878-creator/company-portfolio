
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const posterColumns = [
  {
    id: "left",
    posters: [
      {
        src: "/images/graphic-design/luxora-pure.png",
        alt: "Luxora — Pure, Elegant, You",
        ratio: "aspect-[1.52/1]",
      },
      {
        src: "/images/graphic-design/luxora-statement.png",
        alt: "Luxora — Not Just a Fragrance, It's a Statement",
        ratio: "aspect-[1.25/1]",
      },
    ],
  },
  {
    id: "center",
    posters: [
      {
        src: "/images/graphic-design/luxora-essence.png",
        alt: "Luxora — The Essence of Luxury",
        ratio: "aspect-[1.52/1]",
      },
      {
        src: "/images/graphic-design/luxora-deep-rich.png",
        alt: "Luxora — Deep, Rich, Memorable",
        ratio: "aspect-[1.52/1]",
      },
    ],
  },
  {
    id: "right",
    posters: [
      {
        src: "/images/graphic-design/luxora-statement.png",
        alt: "Luxora fragrance campaign poster",
        ratio: "aspect-[1.52/1]",
      },
      {
        src: "/images/graphic-design/luxora-details.png",
        alt: "Luxora — Luxury in Every Detail",
        ratio: "aspect-[1/1]",
      },
      {
        src: "/images/graphic-design/luxora-elegance.png",
        alt: "Luxora — Where Elegance Meets Intensity",
        ratio: "aspect-[1/1]",
      },
    ],
  },
];

export function LuxoraShowcase() {
  return (
    <section
      id="luxora-showcase"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 size-[500px] rounded-full bg-[#ff5a1f]/[0.07] blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ff5a1f]">
              Creative Portfolio / 05
            </p>

            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Luxury in every
              <span className="text-[#ff5a1f]"> detail.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            A premium visual identity and advertising campaign for Luxora,
            built around elegance, sophistication, and timeless fragrance.
          </p>
        </motion.div>

        {/* Three-column poster composition */}
        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1.25fr_0.58fr] xl:gap-3">
          {posterColumns.map((column, columnIndex) => (
            <div
              key={column.id}
              className={`flex flex-col gap-3 ${
                column.id === "right" ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {column.posters.map((poster, posterIndex) => (
                <motion.div
                  key={`${column.id}-${posterIndex}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: columnIndex * 0.1 + posterIndex * 0.08,
                  }}
                  className={`group relative w-full overflow-hidden rounded-lg border border-border bg-black ${poster.ratio}`}
                >
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 transition-colors duration-300 group-hover:ring-[#ff5a1f]/40" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Project footer */}
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">
              LUXORA — Eau de Parfum
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Brand Identity · Product Advertising · Graphic Design
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            07 Poster Placements
          </span>
        </div>
      </div>
    </section>
  );
}
