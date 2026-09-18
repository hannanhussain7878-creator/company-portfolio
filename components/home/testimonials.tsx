"use client";

import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
            Client Words
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Outcomes,
            <span className="text-muted-foreground"> in their words.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.05}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-border p-5 transition hover:border-orange-500/20">
                <p className="text-xs leading-6 text-foreground/80">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-muted text-[9px] font-semibold">
                    {testimonial.initials}
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold">
                      {testimonial.name}
                    </p>

                    <p className="text-[8px] text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}