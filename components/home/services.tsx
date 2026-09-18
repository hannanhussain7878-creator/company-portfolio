"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
              What We Do
            </p>

            <h2 className="text-4xl font-display font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
              Every discipline you need,
              <span className="text-muted-foreground">
                {" "}
                under one roof.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
              Seven disciplines. One team. No handoffs, no agency layers, and
              no translation loss between strategy, design, development, and
              launch.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.04}
              className={
                service.featured
                  ? "lg:col-span-4"
                  : "lg:col-span-2"
              }
            >
              <article
                className={`group bg-[#0d0d10] h-full rounded-xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-muted/30 ${
                  service.featured ? "min-h-57.5" : "min-h-51.25"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-7 place-items-center rounded-lg border border-border text-[10px] text-orange-500">
                    {service.icon}
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                    {service.eyebrow}
                  </span>
                </div>

                <h3 className="mt-8 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-5 text-muted-foreground">
                  {service.description}
                </p>

                {service.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2 py-1 text-[8px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <button className="mt-6 inline-flex items-center gap-1 text-[10px] font-medium transition-colors group-hover:text-orange-500">
                  Learn more
                  <ArrowUpRight className="size-3" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}