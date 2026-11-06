
"use client";

import { motion } from "motion/react";
import { CarFront, Check } from "lucide-react";

const colors = [
  { name: "Quadra Orange", hex: "#FF5A1F", color: "#FF5A1F" },
  { name: "Deep Orange", hex: "#E94C1B", color: "#E94C1B" },
  { name: "Ink", hex: "#080809", color: "#080809" },
  { name: "Cloud", hex: "#F1F1F1", color: "#F1F1F1" },
  { name: "Slate", hex: "#73737B", color: "#73737B" },
  { name: "White", hex: "#FFFFFF", color: "#FFFFFF" },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65 },
};

export function RideBrandIdentity() {
  return (
    <section
      id="brand-identity"
      className="bg-[var(--surface)] px-5 py-24 text-foreground transition-colors duration-300 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[920px]">
        {/* Heading */}
        <motion.div {...fadeUp} className="mb-10 sm:mb-12">
          <p className="mb-4 text-[10px] font-medium tracking-[0.24em] text-[#ff5a1f]">
            02 — BRAND IDENTITY
          </p>

          <h2 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[52px]">
            Warm. Confident. Clear.
          </h2>
        </motion.div>

        {/* Bento layout */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-12">

          {/* Logo card */}
          <motion.div
            {...fadeUp}
            className="relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#080809] p-7 text-white shadow-[0_16px_35px_rgba(0,0,0,0.12)] md:col-span-5 md:min-h-[300px] md:p-8"
          >
            <p className="text-[9px] tracking-[0.22em] text-white/40">
              L O G O
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="grid size-12 place-items-center rounded-[15px] bg-[#ff5a1f] text-black shadow-[0_8px_25px_rgba(255,90,31,0.2)]">
                <CarFront size={26} strokeWidth={2.4} />
              </div>

              <span className="font-display text-[25px] font-bold tracking-tight">
                SMz4U
              </span>
            </div>

            <p className="text-[11px] leading-5 text-white/40">
              A single mark that reads on map, sheet, and splash.
            </p>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-[#ff5a1f]/10 blur-[65px]"
            />
          </motion.div>

          {/* Color palette */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="rounded-[22px] border border-border bg-[var(--background)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] md:col-span-7 md:p-7"
          >
            <p className="mb-6 text-[9px] tracking-[0.2em] text-muted-foreground">
              PRIMARY & SECONDARY COLORS
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className="overflow-hidden rounded-[16px] border border-border bg-[var(--surface)]"
                >
                  <div
                    className="h-[66px] w-full"
                    style={{ backgroundColor: color.color }}
                  />

                  <div className="px-3 py-2.5">
                    <p className="text-[10px] font-semibold text-foreground">
                      {color.name}
                    </p>
                    <p className="mt-1 text-[9px] text-muted-foreground">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="rounded-[22px] border border-border bg-[var(--background)] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.05)] md:col-span-7 md:min-h-[180px] md:p-8"
          >
            <p className="text-[9px] tracking-[0.2em] text-muted-foreground">
              TYPOGRAPHY
            </p>

            <div className="mt-5">
              <p className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Aa
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3">
                <div>
                  <p className="font-display text-[13px] font-semibold text-foreground">
                    Space Grotesk
                  </p>
                  <p className="mt-1 text-[9px] text-muted-foreground">
                    Display · Headlines
                  </p>
                </div>

                <div>
                  <p className="text-[13px] font-medium text-foreground">
                    Poppins
                  </p>
                  <p className="mt-1 text-[9px] text-muted-foreground">
                    Body · UI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Design language */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#ff5a1f] p-7 text-black shadow-[0_14px_30px_rgba(255,90,31,0.16)] md:col-span-5 md:p-8"
          >
            <p className="text-[9px] font-medium tracking-[0.2em] text-black/60">
              DESIGN LANGUAGE
            </p>

            <h3 className="font-display max-w-[320px] text-[18px] font-semibold leading-[1.4] tracking-tight sm:text-xl">
              Rounded, glassy, and generous with light — icons stay geometric
              and clean.
            </h3>

            <div className="absolute -bottom-16 -right-12 size-40 rounded-full border border-black/10" />
            <div className="absolute -bottom-10 -right-6 size-24 rounded-full border border-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
