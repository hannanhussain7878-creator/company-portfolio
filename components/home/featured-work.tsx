"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  return (
    <section className="border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
                Featured Work
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl">
                Shipped, measured,
                <br />
                handed over.
              </h2>
            </div>

            <Link
              href="/work"
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-[10px] font-medium md:inline-flex"
            >
              View All Work
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <Link href={project.href ?? `/work/${project.id}`}>
                <article className="group overflow-hidden rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30">
                  <div className="relative aspect-[1.2/1] overflow-hidden bg-[#0d0d0f]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,85,20,.25),transparent_45%)]" />

                    <div className="absolute inset-[18%] rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl transition-transform duration-700 group-hover:scale-105">
                      <div className="m-4 h-2 w-16 rounded-full bg-orange-500/80" />

                      <div className="m-4 mt-7 h-20 rounded-lg border border-white/10 bg-white/[0.04]">
                        <div className="mx-4 mt-7 h-1 w-24 rounded bg-white/20" />

                        <div className="mx-4 mt-3 flex gap-2">
                          <span className="h-8 flex-1 rounded bg-orange-500/20" />
                          <span className="h-8 flex-1 rounded bg-white/5" />
                          <span className="h-8 flex-1 rounded bg-white/5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">{project.title}</h3>

                      <ArrowUpRight className="size-3 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>

                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {project.client}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2 py-1 text-[8px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/work"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[10px] font-medium md:hidden"
        >
          View All Work
          <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </section>
  );
}
