"use client";

import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "One call. We understand the problem, users, business goals, and what success needs to look like.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plans and prototypes in Figma, reviewed quickly with you so the direction is right before development.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The right people ship the product. You see progress continuously instead of waiting for a final reveal.",
  },
  {
    number: "04",
    title: "Deliver & grow",
    description:
      "Launch with confidence, measure results, and continue improving when the next opportunity appears.",
  },
];

export function Process() {
  return (
    <section className="border-b border-border py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
            How We Work
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Four steps, no surprises.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            A fixed process that keeps projects moving without unnecessary
            meetings, handoffs, or mystery.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <article>
                <div className="text-5xl font-light tracking-[-0.07em] text-muted-foreground/30">
                  {step.number}
                </div>

                <h3 className="mt-4 text-sm font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}