
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  featured?: boolean;
};

const projects: PortfolioItem[] = [
  // Featured projects
  {
    title: "Organic vs Paid Marketing",
    category: "Infographic Design",
    image: "/images/graphic-design/organic-marketing.png",
    featured: true,
  },
  {
    title: "Campaign Strategy",
    category: "Campaign Design",
    image: "/images/graphic-design/campaign-strategy.png",
    featured: true,
  },
  {
    title: "Digital Dominance",
    category: "Brand Communication",
    image: "/images/graphic-design/digital-dominance.png",
    featured: true,
  },

  // Supporting projects
  {
    title: "Digital Growth",
    category: "Social Media Design",
    image: "/images/graphic-design/digital-growth.png",
  },
  {
    title: "Brand Growth Strategy",
    category: "Marketing Design",
    image: "/images/graphic-design/brand-growth.png",
  },
  {
    title: "500 Followers",
    category: "Personal Branding",
    image: "/images/graphic-design/500-followers.png",
  },
  {
    title: "AI Powered Marketing",
    category: "Creative Campaign",
    image: "/images/graphic-design/ai-marketing.png",
  },
  {
    title: "LinkedIn Campaign",
    category: "Social Media Design",
    image: "/images/graphic-design/linkedin-campaign.png",
  },
  {
    title: "Marketing Strategies",
    category: "Infographic Design",
    image: "/images/graphic-design/marketing-strategies.png",
  },
];

export function GraphicDesignGallery() {
  return (
    <section
      id="graphic-portfolio"
      className="relative overflow-hidden bg-background px-5 py-20 text-foreground transition-colors duration-300 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Ambient orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{
          background: "rgba(255, 90, 31, 0.09)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff5a1f]">
              02 — Selected Work
            </p>

            <h2 className="font-display max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Ideas made
              <br />
              <span className="text-[#ff5a1f]">impossible to ignore.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            A collection of visual stories, creative campaigns and brand
            experiences designed to make an impression.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-w-0 overflow-hidden rounded-xl border border-border bg-[var(--surface)] shadow-[0_8px_28px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ff5a1f]/50 hover:shadow-[0_18px_40px_rgba(255,90,31,0.12)] ${
                project.featured
                  ? "col-span-1 sm:col-span-2"
                  : "col-span-1"
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[var(--surface-raised)] ${
                  project.featured
                    ? "aspect-[3/4]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={
                    project.featured
                      ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                      : "(max-width: 640px) 50vw, 16vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 flex translate-y-3 items-end justify-between gap-2 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-white sm:text-sm">
                      {project.title}
                    </p>
                    <p className="mt-1 text-[10px] text-white/65">
                      {project.category}
                    </p>
                  </div>

                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ff5a1f] text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex min-h-10 items-center justify-between gap-2 px-2.5 py-2 sm:px-3">
                <div className="min-w-0">
                  <h3 className="truncate text-[10px] font-semibold text-foreground sm:text-xs">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 truncate text-[9px] text-muted-foreground">
                    {project.category}
                  </p>
                </div>

                <span className="size-1.5 shrink-0 rounded-full bg-[#ff5a1f]" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:mt-14 sm:flex-row sm:items-center"
        >
          <p className="text-xs text-muted-foreground">
            Selected creative work · Quadnodes Studio
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-foreground transition-colors hover:text-[#ff5a1f]"
          >
            Have a project in mind?
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
