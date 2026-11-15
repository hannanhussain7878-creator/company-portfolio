
"use client";

import Image from "next/image";
import { motion } from "motion/react";

const campaignImages = [
  {
    src: "/images/graphic-design/main-1.png",
    alt: "WIPEOUT X product overview and accessories",
    title: "Product Overview",
    placement: "md:col-start-1 md:row-start-1",
  },
  {
    src: "/images/graphic-design/main-2.png",
    alt: "WIPEOUT X step-by-step product usage guide",
    title: "Step-by-Step Guide",
    placement: "md:col-start-1 md:row-start-2",
  },
  {
    src: "/images/graphic-design/main-8.png",
    alt: "WIPEOUT X toilet plunger in action",
    title: "Product in Action",
    placement: "md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2",
  },
  {
    src: "/images/graphic-design/main-9.png",
    alt: "WIPEOUT X compact bathroom design",
    title: "Compact Design",
    placement: "md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-2",
  },
  {
    src: "/images/graphic-design/main-3.png",
    alt: "WIPEOUT X compact product design",
    title: "Compact Design",
    placement: "md:col-start-1 md:row-start-3",
  },
  {
    src: "/images/graphic-design/main-4.png",
    alt: "WIPEOUT X product dimensions",
    title: "Product Dimensions",
    placement: "md:col-start-2 md:row-start-3",
  },
  {
    src: "/images/graphic-design/main-5.png",
    alt: "WIPEOUT X premium features",
    title: "Premium Features",
    placement: "md:col-start-3 md:row-start-3",
  },
  {
    src: "/images/graphic-design/main-6.png",
    alt: "WIPEOUT X before and after results",
    title: "Before & After",
    placement: "md:col-start-4 md:row-start-3",
  },
  {
    src: "/images/graphic-design/main-7.png",
    alt: "WIPEOUT X multi-purpose applications",
    title: "Multi-Use Applications",
    placement: "md:col-start-5 md:row-start-3",
  },
];

export function WipeoutXCampaign() {
  return (
    <section
      id="wipeoutx-campaign"
      className="relative overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Company portfolio glow */}
      <div className="pointer-events-none absolute -right-40 top-20 size-[450px] rounded-full bg-[#ff5a1f]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
              Creative Portfolio / 09
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
              Creativity meets{" "}
              <span className="text-[#ff5a1f]">
                functionality.
              </span>
            </h2>
          </div>

          <p className="max-w-[310px] text-xs leading-6 text-muted-foreground">
            A complete product advertising campaign for WIPEOUT X,
            showcasing product features, installation instructions,
            performance, and real-world applications.
          </p>
        </motion.div>

        {/* Asymmetric Creative Gallery */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-5 md:auto-rows-[clamp(130px,18vw,220px)]">

          {campaignImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: (index % 5) * 0.06,
              }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-[var(--surface)] transition-colors duration-300 md:aspect-auto ${item.placement}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />

              {/* Hover caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-[10px] font-medium text-white sm:text-xs">
                  {item.title}
                </p>
              </div>

              {/* Orange hover border */}
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5 transition-all duration-300 group-hover:ring-[#ff5a1f]/60" />
            </motion.div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-7 flex flex-col justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-foreground">
              WIPEOUT X — Multi-Purpose Drain Cleaner
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Product Branding · Advertising Design · Product Photography ·
              Marketing Creatives
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
