"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Ledgerline",
    subtitle: "Ledgerline · B2B Fintech",
    image: "/images/work/ledgerline.png",
    tags: ["UI/UX Design", "Web Development"],
    href: "/work",
  },
  {
    title: "Kite Health",
    subtitle: "Kite Health · Healthtech",
    image: "/images/work/kite-health.png",
    tags: ["App Development", "UI/UX Design"],
    href: "/work",
  },
  {
    title: "Orbit Ops Copilot",
    subtitle: "Orbit Logistics · Logistics",
    image: "/images/work/orbit-ops.png",
    tags: ["AI Solutions"],
    href: "/work",
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-background px-5 py-3 text-foreground transition-colors duration-300 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md text-center"
        >
          <p className="text-xs text-[#ff5a1f]">Featured Work</p>

          <h2 className="font-display mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Shipped, measured, handed over
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <Link
                href={project.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--text-tertiary)] hover:shadow-lg hover:shadow-black/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--surface-raised)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-[#ff5a1f]" />
                </div>

                <p className="mt-3 text-[13px] text-muted-foreground">
                  {project.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-[var(--surface-raised)] px-3 py-1.5 text-[10px] text-[var(--text-secondary)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-5 py-2.5 text-[11px] font-medium text-foreground transition-colors duration-300 hover:border-[#ff5a1f]/40 hover:bg-muted"
          >
            View All Work
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}