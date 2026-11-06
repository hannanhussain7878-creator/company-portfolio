
"use client";

import { motion } from "motion/react";
import {
  MousePointer2,
  Hand,
  ArrowLeftRight,
  LoaderCircle,
  Inbox,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const interactions = [
  {
    title: "Micro Animations",
    description: "Springy taps on primary actions.",
    Icon: MousePointer2,
  },
  {
    title: "Gestures",
    description: "Swipe sheets for pickup & fare.",
    Icon: Hand,
  },
  {
    title: "Transitions",
    description: "Map-to-sheet motion continuity.",
    Icon: ArrowLeftRight,
  },
  {
    title: "Loading",
    description: "Pulsing 'waiting for offers' state.",
    Icon: LoaderCircle,
  },
  {
    title: "Empty States",
    description: "Friendly prompts, never dead ends.",
    Icon: Inbox,
  },
  {
    title: "Success",
    description: "Ride complete celebration moment.",
    Icon: CheckCircle2,
  },
  {
    title: "Errors",
    description: "Recoverable, human error copy.",
    Icon: AlertCircle,
  },
  {
    title: "Hover",
    description: "Elevation & glow on interactive cards.",
    Icon: Sparkles,
  },
];

export function RideInteractionDesign() {
  return (
    <section
      id="interaction-design"
      className="bg-background px-5 py-24 text-foreground transition-colors duration-300 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[960px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14"
        >
          <p className="mb-5 text-[10px] font-medium tracking-[0.24em] text-[#ff5a1f]">
            07 — INTERACTION DESIGN
          </p>

          <h2 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[52px]">
            Motion with meaning.
          </h2>
        </motion.div>

        {/* Interaction cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {interactions.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.07,
                }}
                whileHover={{ y: -5 }}
                className="group relative flex min-h-[116px] flex-col justify-end overflow-hidden rounded-[22px] border border-border bg-[var(--surface)] px-5 pb-5 pt-6 shadow-[0_8px_24px_rgba(0,0,0,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#ff5a1f]/25 hover:shadow-[0_14px_30px_rgba(255,90,31,0.08)] sm:min-h-[118px] sm:px-5"
              >
                {/* Orange indicator */}
                <span className="absolute left-5 top-5 size-[7px] rounded-full bg-[#ff5a1f] transition-transform duration-300 group-hover:scale-150" />

                {/* Corner glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 -right-8 size-24 rounded-full bg-[#ff5a1f]/[0.08] blur-2xl transition-all duration-500 group-hover:bg-[#ff5a1f]/[0.17] group-hover:scale-150"
                />

                {/* Icon */}
                <div className="absolute right-5 top-5 text-muted-foreground/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#ff5a1f]">
                  <Icon size={15} strokeWidth={1.7} />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="font-display text-[13px] font-semibold tracking-tight text-foreground sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.6] text-muted-foreground sm:text-[11px]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <span className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-[#ff5a1f] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
