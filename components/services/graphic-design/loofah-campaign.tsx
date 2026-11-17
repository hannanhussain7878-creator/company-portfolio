
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const campaignImages = [
  {
    src: "/images/graphic-design/loofah/bath-experience.png",
    alt: "Enjoy every second of your bath with a soft mesh loofah",
    title: "Bath Experience",
    category: "Lifestyle Advertising",
    area: "bathExperience",
  },
  {
    src: "/images/graphic-design/loofah/gift-set.png",
    alt: "Loofah gift set for loved ones",
    title: "Perfect Gift for Loved Ones",
    category: "Gift Set Campaign",
    area: "giftSet",
  },
  {
    src: "/images/graphic-design/loofah/gentle-scrub.png",
    alt: "Gentle scrub and deep cleansing with a mesh loofah",
    title: "Gentle Scrub",
    category: "Product Benefits",
    area: "gentleScrub",
  },
  {
    src: "/images/graphic-design/loofah/soft-mesh.png",
    alt: "Soft mesh loofah with strong and durable knot",
    title: "Soft Mesh",
    category: "Product Features",
    area: "softMesh",
  },
  {
    src: "/images/graphic-design/loofah/product-weight.png",
    alt: "Loofah product size and weight information",
    title: "Product Weight",
    category: "Product Information",
    area: "productWeight",
  },
  {
    src: "/images/graphic-design/loofah/quality.png",
    alt: "Loofah quality and durability comparison",
    title: "Best Quality",
    category: "Quality Showcase",
    area: "quality",
  },
  {
    src: "/images/graphic-design/loofah/bath-benefits.png",
    alt: "Bathing benefits and product usage",
    title: "Bath Benefits",
    category: "Marketing Creative",
    area: "bathBenefits",
  },
  {
    src: "/images/graphic-design/loofah/strong-knot.png",
    alt: "Close-up demonstration of the strong knot construction",
    title: "Strong Knot",
    category: "Product Durability",
    area: "strongKnot",
  },
  {
    src: "/images/graphic-design/loofah/product-collection.png",
    alt: "Collection of colorful mesh loofahs",
    title: "Product Collection",
    category: "Product Photography",
    area: "productCollection",
  },
];

const desktopPositions: Record<string, string> = {
  bathExperience: "lg:col-start-1 lg:row-start-1",
  giftSet: "lg:col-start-1 lg:row-start-2",
  gentleScrub:
    "lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  softMesh:
    "lg:col-start-4 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  productWeight: "lg:col-start-1 lg:row-start-3",
  quality: "lg:col-start-2 lg:row-start-3",
  bathBenefits: "lg:col-start-3 lg:row-start-3",
  strongKnot: "lg:col-start-4 lg:row-start-3",
  productCollection: "lg:col-start-5 lg:row-start-3",
};

export function LoofahCampaign() {
  return (
    <section
      id="loofah-campaign"
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
              Creative Portfolio / 14
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
              Elevate your bath,{" "}
              <span className="text-[#ff5a1f]">
                enjoy every moment.
              </span>
            </h2>
          </div>

          <p className="max-w-[310px] text-xs leading-6 text-muted-foreground">
            A complete loofah advertising campaign showcasing product
            features, lifestyle creatives, quality, durability, and
            everyday bathing experiences.
          </p>
        </motion.div>

        {/* Collage Gallery */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:grid-rows-[190px_190px_220px]">
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
              className={`group relative flex min-h-[180px] flex-col overflow-hidden rounded-xl border border-border bg-[var(--surface)] transition-colors duration-300 hover:border-[#ff5a1f]/50 ${desktopPositions[item.area]}`}
            >
              {/* Original image proportions */}
              <div className="relative min-h-0 flex-1 overflow-hidden bg-[var(--surface-raised)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  priority={index < 4}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[10px] text-white/70">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Image caption */}
              <div className="flex items-center justify-between gap-3 border-t border-border px-3 py-3 sm:px-4">
                <div className="min-w-0">
                  <h3 className="truncate text-xs font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-1 truncate text-[10px] text-muted-foreground">
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
              Loofah — Bath & Body Product Advertising Campaign
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
