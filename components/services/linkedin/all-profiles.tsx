
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type PaletteKey = "orange" | "coral" | "mint" | "pink" | "amber" | "sky";

type Person = {
  name: string;
  kind: "photo" | "banner";
  palette: PaletteKey;
  role?: string;
  photo?: string;
};

const palettes: Record<
  PaletteKey,
  { banner: string; role: string; dot: string }
> = {
  orange: {
    banner: "from-[#ffc5a5] via-[#ffdcc9] to-[#fff0e6]",
    role: "#a94720",
    dot: "#ff5a1f",
  },
  coral: {
    banner: "from-[#ffbca5] via-[#ffdbce] to-[#fff0e9]",
    role: "#a94227",
    dot: "#f26b45",
  },
  mint: {
    banner: "from-[#b5e8d6] via-[#cdf0e3] to-[#e5f8f0]",
    role: "#2a9b7e",
    dot: "#3ccf91",
  },
  pink: {
    banner: "from-[#f7b8d4] via-[#fcd5e6] to-[#feeaf2]",
    role: "#bd477d",
    dot: "#ec5c9c",
  },
  amber: {
    banner: "from-[#f8d9a0] via-[#fbe6bf] to-[#fdf2dc]",
    role: "#b47719",
    dot: "#e8a83d",
  },
  sky: {
    banner: "from-[#b3dcf8] via-[#cde9fb] to-[#e6f4fe]",
    role: "#2f8fd0",
    dot: "#3aa6e8",
  },
};

const people: Person[] = [
  { name: "Alex Chen", kind: "photo", palette: "orange", photo: "/people/alex-chen.jpg" },
  { name: "Maria Santos", kind: "banner", palette: "orange", role: "Marketing Director" },
  { name: "James Okafor", kind: "banner", palette: "mint", role: "Freelance Developer" },
  { name: "Sofia Rossi", kind: "photo", palette: "coral", photo: "/people/sofia-rossi.jpg" },
  { name: "David Kim", kind: "banner", palette: "orange", role: "Product Manager" },

  { name: "Priya Nair", kind: "banner", palette: "coral", role: "Data Scientist" },
  { name: "Nora Williams", kind: "photo", palette: "pink", photo: "/people/nora-williams.jpg" },
  { name: "Omar Haddad", kind: "banner", palette: "amber", role: "Ecosystem Partner" },
  { name: "Elise Martin", kind: "banner", palette: "mint", role: "Partner Leader" },
  { name: "Theo Grant", kind: "photo", palette: "orange", photo: "/people/theo-grant.jpg" },

  { name: "Amina Bello", kind: "banner", palette: "orange", role: "UX Researcher" },
  { name: "Lucas Meyer", kind: "banner", palette: "sky", role: "Finance Lead" },
  { name: "Jade Thompson", kind: "photo", palette: "pink", photo: "/people/jade-thompson.jpg" },
  { name: "Ravi Patel", kind: "banner", palette: "mint", role: "Operations Advisor" },
  { name: "Clara Jensen", kind: "banner", palette: "amber", role: "Founder" },

  { name: "Mateo Silva", kind: "photo", palette: "mint", photo: "/people/mateo-silva.jpg" },
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function CardFooter({ person }: { person: Person }) {
  return (
    <div className="flex items-center justify-between gap-2 px-2.5 py-2 sm:px-3">
      <span className="truncate text-[10px] font-medium text-foreground sm:text-[11px]">
        {person.name}
      </span>

      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: palettes[person.palette].dot }}
      />
    </div>
  );
}

function PhotoCard({ person }: { person: Person }) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <div className="p-1.5">
        <div className="relative aspect-[1/1.02] overflow-hidden rounded-lg bg-[var(--surface-raised)]">
          {person.photo && !failed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={person.photo}
              alt={`Professional portfolio portrait of ${person.name}`}
              loading="lazy"
              onError={() => setFailed(true)}
              className="size-full object-cover"
            />
          ) : (
            <div className="grid size-full place-items-center text-lg font-semibold text-muted-foreground sm:text-2xl">
              {initialsOf(person.name)}
            </div>
          )}
        </div>
      </div>

      <CardFooter person={person} />
    </>
  );
}

function BannerCardBody({ person }: { person: Person }) {
  const palette = palettes[person.palette];

  return (
    <>
      <div className="p-1.5 pb-0">
        <div
          className={`relative flex min-h-[58px] items-center overflow-hidden rounded-lg bg-gradient-to-br px-3 py-2.5 sm:min-h-[64px] ${palette.banner}`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.48)_50%,transparent_70%)]" />

          <div className="relative min-w-0">
            <p className="truncate text-[11px] font-bold leading-tight text-[#28201c] sm:text-xs">
              {person.name}
            </p>

            <p
              className="mt-0.5 truncate text-[9px] leading-tight sm:text-[10px]"
              style={{ color: palette.role }}
            >
              {person.role}
            </p>
          </div>
        </div>
      </div>

      <CardFooter person={person} />
    </>
  );
}

function PersonCard({ person, index }: { person: Person; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: (index % 5) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-xl border border-border bg-[var(--surface)] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.11)]"
    >
      {person.kind === "photo" ? (
        <PhotoCard person={person} />
      ) : (
        <BannerCardBody person={person} />
      )}
    </motion.article>
  );
}

export function ContactSheet() {
  return (
    <section
      id="contact-sheet"
      className="relative isolate overflow-hidden bg-background px-5 py-20 text-foreground transition-colors duration-300 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Quadra orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 size-[420px] rounded-full blur-3xl sm:size-[520px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,31,0.13), transparent 68%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 size-[380px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,31,0.09), transparent 68%)",
        }}
      />

      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-3 sm:mb-12"
        >
          <div>
            <p className="mb-2 text-[10px] font-medium tracking-wide text-[#ff5a1f]">
              PERSONAL BRAND PORTFOLIO
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              All 16, together.
            </h2>
          </div>

          <p className="pb-1 text-[11px] text-muted-foreground">
            Final contact sheet
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-2 items-start gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
          {people.map((person, index) => (
            <PersonCard
              key={person.name}
              person={person}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col gap-6 rounded-2xl border border-border bg-[var(--surface)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
              Make yours memorable.
            </h3>

            <p className="mt-2 text-[11px] text-muted-foreground">
              LinkedIn profile design · Strategy · Content
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#ff5a1f] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_6px_20px_rgba(255,90,31,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ed4c18]"
          >
            Start a revamp
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
