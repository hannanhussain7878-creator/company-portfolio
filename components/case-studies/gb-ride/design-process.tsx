
"use client";

import { motion } from "motion/react";
import {
  Search,
  ChartNoAxesCombined,
  Users,
  Route,
  PanelsTopLeft,
  Palette,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Research",
    description:
      "Rider and driver interviews across regional markets.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Competitor Analysis",
    description:
      "Benchmarked global ride-hailing patterns.",
    Icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "User Persona",
    description:
      "Defined the value-driven, safety-first commuter.",
    Icon: Users,
  },
  {
    number: "04",
    title: "User Flow",
    description:
      "Mapped the end-to-end ride journey.",
    Icon: Route,
  },
  {
    number: "05",
    title: "Wireframes",
    description:
      "Low-fidelity structure for every core screen.",
    Icon: PanelsTopLeft,
  },
  {
    number: "06",
    title: "Design Exploration",
    description:
      "Orange-led visual language iterations.",
    Icon: Palette,
  },
  {
    number: "07",
    title: "Testing",
    description:
      "Usability rounds on booking and fare flows.",
    Icon: FlaskConical,
  },
  {
    number: "08",
    title: "Final UI",
    description:
      "Polished, shippable production design.",
    Icon: CheckCircle2,
  },
];

export function RideDesignProcess() {
  return (
    <section
      id="design-process"
      className="bg-background px-5 py-24 text-foreground transition-colors duration-300 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1120px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-[480px] sm:mb-16"
        >
          <p className="mb-5 text-[10px] font-medium tracking-[0.24em] text-[#ff5a1f]">
            03 — DESIGN PROCESS
          </p>

          <h2 className="font-display text-[40px] font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[54px]">
            From insight to
            <br />
            interface.
          </h2>
        </motion.div>

        {/* Process cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {processSteps.map((step, index) => {
            const Icon = step.Icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.07,
                }}
                className="group relative flex min-h-[160px] flex-col overflow-hidden rounded-[23px] border border-border bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a1f]/30 hover:shadow-[0_12px_32px_rgba(255,90,31,0.07)] sm:min-h-[165px] sm:p-6"
              >
                {/* Number and indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-[23px] font-bold tracking-tight text-foreground/10 transition-colors duration-300 group-hover:text-[#ff5a1f]/60">
                    {step.number}
                  </span>

                  <span className="grid size-6 place-items-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 group-hover:bg-[#ff5a1f]/10 group-hover:text-[#ff5a1f]">
                    <Icon size={12} strokeWidth={1.8} />
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-auto pt-5">
                  <h3 className="font-display text-[14px] font-semibold tracking-tight text-foreground sm:text-[15px]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[230px] text-[11px] leading-[1.7] text-muted-foreground sm:text-xs">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#ff5a1f] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
