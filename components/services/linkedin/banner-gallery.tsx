"use client";

import { motion } from "motion/react";

type PaletteKey =
  | "indigo"
  | "violet"
  | "pink"
  | "amber"
  | "mint"
  | "sky"
  | "teal";

type Item = {
  name: string;
  category: string;
  tagline: string;
  palette: PaletteKey;
  wide?: boolean;
};

const palettes: Record<
  PaletteKey,
  { banner: string; tagline: string; stroke: string }
> = {
  indigo: {
    banner: "from-[#c9c2ff] via-[#dbd6ff] to-[#ebe8ff]",
    tagline: "text-[#6a5bd8]",
    stroke: "#6a5bd8",
  },
  violet: {
    banner: "from-[#d6bcf5] via-[#e5d6fa] to-[#f3eafd]",
    tagline: "text-[#8750d0]",
    stroke: "#8750d0",
  },
  pink: {
    banner: "from-[#f7b8d4] via-[#fcd5e6] to-[#feeaf2]",
    tagline: "text-[#d9488a]",
    stroke: "#d9488a",
  },
  amber: {
    banner: "from-[#f8d9a0] via-[#fbe6bf] to-[#fdf2dc]",
    tagline: "text-[#d28618]",
    stroke: "#d28618",
  },
  mint: {
    banner: "from-[#b5e8d6] via-[#cdf0e3] to-[#e5f8f0]",
    tagline: "text-[#2a9b7e]",
    stroke: "#2a9b7e",
  },
  sky: {
    banner: "from-[#b3dcf8] via-[#cde9fb] to-[#e6f4fe]",
    tagline: "text-[#2f8fd0]",
    stroke: "#2f8fd0",
  },
  teal: {
    banner: "from-[#a9e6dc] via-[#c4efe8] to-[#e0f8f4]",
    tagline: "text-[#1f9e92]",
    stroke: "#1f9e92",
  },
};

/*
 * Order matters: the grid auto-flows left → right, and `wide` cards span two
 * columns. Narrow cards keep their natural height (items-start) which creates
 * the staggered "rhythm" from the design.
 */
const items: Item[] = [
  {
    name: "David Kim",
    category: "Tech",
    tagline: "Building developer tools at scale",
    palette: "indigo",
    wide: true,
  },
  {
    name: "Priya Nair",
    category: "AI",
    tagline: "Turning messy data into decisions",
    palette: "violet",
  },
  {
    name: "Nora Williams",
    category: "Creative",
    tagline: "Brand stories for bold launches",
    palette: "pink",
  },
  {
    name: "Omar Haddad",
    category: "Venture",
    tagline: "Backing early-stage climate founders",
    palette: "amber",
    wide: true,
  },
  {
    name: "Elise Martin",
    category: "HR",
    tagline: "Designing people-first workplaces",
    palette: "mint",
  },
  {
    name: "Theo Grant",
    category: "Growth",
    tagline: "Growth loops for B2B SaaS",
    palette: "indigo",
  },
  {
    name: "Amina Bello",
    category: "Product",
    tagline: "Shipping products people love",
    palette: "violet",
  },
  {
    name: "Lucas Meyer",
    category: "Finance",
    tagline: "Making fintech simple and safe",
    palette: "sky",
    wide: true,
  },
  {
    name: "Jade Thompson",
    category: "Design",
    tagline: "Calm, usable interfaces",
    palette: "pink",
  },
  {
    name: "Ravi Patel",
    category: "Consulting",
    tagline: "Operations strategy that sticks",
    palette: "mint",
  },
  {
    name: "Clara Jensen",
    category: "Wellness",
    tagline: "Mindful leadership for busy teams",
    palette: "amber",
  },
  {
    name: "Mateo Silva",
    category: "Climate",
    tagline: "Clean energy, finance, and policy",
    palette: "teal",
    wide: true,
  },
];

function BannerCard({ item, index }: { item: Item; index: number }) {
  const p = palettes[item.palette];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`overflow-hidden rounded-xl border border-border bg-[var(--surface)] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 ${
        item.wide ? "sm:col-span-2" : ""
      }`}
    >
      {/* Banner — every banner is 4:1, so wide cards are simply taller */}
      <div
        className={`relative aspect-[4/1] min-h-[88px] overflow-hidden bg-gradient-to-br ${p.banner}`}
      >
        {/* soft white bloom, bottom-left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(255,255,255,0.7),transparent_55%)]" />

        {/* network line pattern */}
        <svg
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full opacity-40"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-20 70 L80 28 L170 64 L260 14 L340 58 L420 22"
            stroke={p.stroke}
            strokeWidth="0.9"
          />
          <path
            d="M-20 96 L110 56 L200 90 L300 44 L420 82"
            stroke={p.stroke}
            strokeWidth="0.7"
          />
          <circle cx="170" cy="64" r="2" fill={p.stroke} />
          <circle cx="260" cy="14" r="2" fill={p.stroke} />
          <circle cx="340" cy="58" r="2" fill={p.stroke} />
        </svg>

        {/* name + tagline, vertically centred in the banner */}
        <div className="absolute inset-y-0 left-4 z-10 flex max-w-[85%] flex-col justify-center sm:left-5">
          <p className="text-[13px] font-bold leading-tight text-[#1d1d24]">
            {item.name}
          </p>
          <p className={`mt-1 text-[11px] leading-snug ${p.tagline}`}>
            {item.tagline}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5">
        <span className="truncate text-[11px] font-medium text-foreground">
          {item.name}
        </span>
        <span className="shrink-0 text-[11px] text-muted-foreground">
          {item.category}
        </span>
      </div>
    </motion.article>
  );
}

export function BannerRhythm() {
  return (
    <section
      id="banners"
      className="relative isolate overflow-hidden bg-background px-5 py-20 text-foreground transition-colors duration-300 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* faint lavender glow, bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 100% 100%, rgba(139,120,255,0.08), transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <p className="mb-3 text-[11px] font-semibold text-[#6a5bd8]">
            Banner collection
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]">
            Banners, in rhythm.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <BannerCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}