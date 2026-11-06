
"use client";

import { motion } from "motion/react";
import {
  Search,
  Bell,
  MapPin,
  ArrowUpRight,
  Check,
  Navigation,
} from "lucide-react";

const palette = [
  { name: "Quadra Orange", hex: "#FF5A1F", color: "#FF5A1F" },
  { name: "Deep Orange", hex: "#E94C1B", color: "#E94C1B" },
  { name: "Ink", hex: "#080809", color: "#080809" },
  { name: "Cloud", hex: "#F1F1F1", color: "#F1F1F1" },
  { name: "White", hex: "#FFFFFF", color: "#FFFFFF" },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

function Panel({
  label,
  children,
  className = "",
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.65, delay }}
      className={`rounded-[22px] border border-white/[0.09] bg-[#111113] p-6 sm:p-7 ${className}`}
    >
      <p className="mb-6 text-[9px] font-medium tracking-[0.22em] text-white/40">
        {label}
      </p>
      {children}
    </motion.div>
  );
}

export function RideDesignSystem() {
  return (
    <section
      id="design-system"
      className="relative isolate overflow-hidden bg-[#080809] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      {/* Subtle orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 size-[480px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,31,0.10), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[980px]">
        {/* Heading */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <p className="mb-5 text-[10px] font-medium tracking-[0.24em] text-[#ff5a1f]">
            04 — DESIGN SYSTEM
          </p>

          <h2 className="font-display text-[39px] font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[52px]">
            One kit. Every screen.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-12">

          {/* Color palette */}
          <Panel
            label="COLOR PALETTE"
            className="md:col-span-7"
            delay={0.05}
          >
            <div className="overflow-hidden rounded-[16px]">
              <div className="grid grid-cols-5">
                {palette.map((item) => (
                  <div
                    key={item.name}
                    className="h-[65px] sm:h-[75px]"
                    style={{ backgroundColor: item.color }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-5 bg-[#1b1b1d]">
                {palette.map((item) => (
                  <div key={item.name} className="min-w-0 px-2 py-3">
                    <p className="truncate text-[7px] font-semibold text-white sm:text-[9px]">
                      {item.name}
                    </p>
                    <p className="mt-1 truncate text-[6px] text-white/40 sm:text-[8px]">
                      {item.hex}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          {/* Buttons */}
          <Panel
            label="BUTTONS"
            className="md:col-span-5"
            delay={0.1}
          >
            <div className="space-y-2">
              <button
                type="button"
                className="flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#ff5a1f] text-[10px] font-semibold text-black transition hover:bg-[#ff7544]"
              >
                <Check size={12} />
                Accept · PKR 2500
              </button>

              <button
                type="button"
                className="h-9 w-full rounded-full border border-white/10 bg-transparent text-[10px] font-medium text-white transition hover:border-[#ff5a1f]/50 hover:text-[#ff5a1f]"
              >
                Decline
              </button>

              <button
                type="button"
                className="h-7 w-full rounded-full bg-[#29292b] text-[9px] font-medium text-white/65 transition hover:bg-[#333335]"
              >
                Cash · +5 / −5
              </button>
            </div>
          </Panel>

          {/* Inputs */}
          <Panel
            label="INPUTS"
            className="md:col-span-5"
            delay={0.15}
          >
            <div className="space-y-2.5">
              <div className="flex h-10 items-center gap-3 rounded-xl bg-[#202022] px-3">
                <MapPin size={14} className="text-[#ff5a1f]" />
                <span className="text-[10px] text-white/50">
                  Pick up location
                </span>
              </div>

              <div className="flex h-10 items-center gap-3 rounded-xl bg-[#202022] px-3">
                <Search size={14} className="text-white/45" />
                <span className="text-[10px] text-white/50">
                  Where to?
                </span>
              </div>
            </div>
          </Panel>

          {/* Icons */}
          <Panel
            label="ICONS"
            className="md:col-span-3"
            delay={0.2}
          >
            <div className="flex min-h-[76px] items-center justify-around gap-2">
              {[
                Search,
                Bell,
                MapPin,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="grid size-10 place-items-center rounded-xl bg-[#ff5a1f]/15 text-[#ff5a1f] transition duration-300 hover:-translate-y-1 hover:bg-[#ff5a1f]/25"
                >
                  <Icon size={17} strokeWidth={2} />
                </div>
              ))}
            </div>
          </Panel>

          {/* Radius */}
          <Panel
            label="RADIUS"
            className="md:col-span-2"
            delay={0.25}
          >
            <div className="flex min-h-[76px] flex-col justify-center">
              <p className="font-display text-[23px] font-bold tracking-tight text-[#ff5a1f]">
                24–32
              </p>
              <p className="text-[9px] text-white/40">
                rounded px
              </p>
            </div>
          </Panel>

          {/* Spacing */}
          <Panel
            label="SPACING"
            className="md:col-span-2"
            delay={0.3}
          >
            <div className="flex min-h-[76px] flex-col justify-center">
              <p className="font-display text-[23px] font-bold tracking-tight text-[#ff5a1f]">
                8pt
              </p>
              <p className="text-[9px] text-white/40">
                base grid
              </p>
            </div>
          </Panel>

          {/* Shadows and cards */}
          <Panel
            label="SHADOWS & CARDS"
            className="md:col-span-4"
            delay={0.35}
          >
            <div className="flex min-h-[76px] items-center gap-3">
              <div className="h-10 flex-1 rounded-xl bg-white shadow-[0_12px_30px_rgba(255,90,31,0.28)]" />

              <div className="h-10 flex-1 rounded-xl border border-white/[0.04] bg-[#29292b]" />
            </div>
          </Panel>
        </div>

        {/* Footer note */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5"
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            <p className="text-[9px] text-white/40">
              Consistent components. One visual language.
            </p>
          </div>

          <span className="text-[9px] tracking-wider text-white/30">
            SMz4U · UI KIT
          </span>
        </motion.div>
      </div>
    </section>
  );
}
