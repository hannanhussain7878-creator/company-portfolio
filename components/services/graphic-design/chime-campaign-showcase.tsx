
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const campaignImages = [
  {
    title: "Friday Starts Sooner",
    category: "Campaign Creative",
    src: "/images/graphic-design/chime-friday.png",
    placement: "lg:col-[1/4] lg:row-[1/3]",
  },
  {
    title: "No Need to Ask the Kids",
    category: "Social Media Campaign",
    src: "/images/graphic-design/chime-no-need.png",
    placement: "lg:col-[1/4] lg:row-[3/5]",
  },
  {
    title: "Bank Like You",
    category: "Brand Advertising",
    src: "/images/graphic-design/chime-bank-like.png",
    placement: "lg:col-[1/4] lg:row-[5/7]",
  },
  {
    title: "Cash Out Complete",
    category: "Campaign Artwork",
    src: "/images/graphic-design/chime-cashout.png",
    placement: "lg:col-[4/8] lg:row-[1/5]",
  },
  {
    title: "Chime Brand Campaign",
    category: "Featured Visual",
    src: "/images/graphic-design/chime-hero.png",
    placement: "lg:col-[8/13] lg:row-[1/7]",
  },
  {
    title: "Banking That Moves With You",
    category: "Digital Campaign",
    src: "/images/graphic-design/chime-app.png",
    placement: "lg:col-[4/6] lg:row-[5/7]",
  },
  {
    title: "Simple as It Should Be",
    category: "Social Media Creative",
    src: "/images/graphic-design/chime-simple.png",
    placement: "lg:col-[6/8] lg:row-[5/7]",
  },
];

export function ChimeCampaignShowcase() {
  return (
    <section
      id="featured-campaign"
      className="relative overflow-hidden bg-background px-5 py-20 text-foreground transition-colors duration-300 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Ambient company-orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[450px] rounded-full blur-[150px]"
        style={{ background: "rgba(255, 90, 31, 0.08)" }}
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff5a1f]">
              03 — Featured Campaign
            </p>

            <h2 className="font-display max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              One campaign.
              <br />
              <span className="text-[#ff5a1f]">
                A complete visual world.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            A closer look at a cohesive creative campaign, where every visual
            works together to tell one memorable brand story.
          </p>
        </motion.div>

        {/* Campaign collage */}
        <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[115px] lg:gap-4">
          {campaignImages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-h-[210px] overflow-hidden rounded-xl border border-border bg-[var(--surface)] shadow-[0_8px_28px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ff5a1f]/50 hover:shadow-[0_18px_40px_rgba(255,90,31,0.13)] sm:min-h-[260px] lg:min-h-0 ${item.placement}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Hover information */}
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-3 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                <div className="min-w-0">
                  <h3 className="truncate text-xs font-semibold text-white sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-white/70">
                    {item.category}
                  </p>
                </div>

                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ff5a1f] text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              {/* Small orange corner accent */}
              <span className="pointer-events-none absolute right-3 top-3 size-2 rounded-full bg-[#ff5a1f] opacity-0 shadow-[0_0_12px_rgba(255,90,31,0.7)] transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:mt-14 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-semibold text-foreground">
              Chime — Integrated Campaign
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Brand visuals · Social media · Advertising
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-[10px] font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            Selected creative project
          </span>
        </motion.div>
      </div>
    </section>
  );
}
