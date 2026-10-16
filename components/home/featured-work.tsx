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
    <section className="px-5 py-3 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-350">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md text-center"
        >
          <p className="text-xs text-[#ff5a1f]">Featured Work</p>
          <h2 className="font-display mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
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
            >
              <Link
                href={project.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-linear-to-b from-[#121214] to-[#0a0a0b] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="size-3.5 text-neutral-400 transition group-hover:text-white" />
                </div>

                <p className="mt-3 text-[13px] text-neutral-400">
                  {project.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-neutral-300"
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
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-[11px] font-medium text-white transition hover:bg-white/10"
          >
            View All Work
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}