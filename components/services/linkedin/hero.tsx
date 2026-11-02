"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

function ProfileAvatar({
  initials,
  color,
}: {
  initials: string;
  color: string;
}) {
  return (
    <div
      className={`grid size-9 shrink-0 place-items-center rounded-full border-2 border-[var(--surface)] text-[10px] font-bold text-white ${color}`}
    >
      {initials}
    </div>
  );
}

export function LinkedInHero() {
  return (
    <section
      id="linkedin-hero"
      className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-background px-5 pb-20 pt-32 text-foreground transition-colors duration-300 lg:min-h-[780px] lg:px-8 lg:pt-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 38% 48% at 0% 0%, rgba(255,90,31,0.10), transparent 75%),
            radial-gradient(ellipse 38% 55% at 100% 100%, rgba(255,90,31,0.13), transparent 75%),
            radial-gradient(ellipse 30% 40% at 50% 100%, rgba(255,90,31,0.06), transparent 75%)
          `,
        }}
      />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[510px] lg:mx-0"
        >
          <p className="mb-4 text-[11px] font-medium tracking-wide text-[#ff5a1f]">
            LinkedIn Profile & Content Optimization
          </p>

          <h1 className="font-display text-[clamp(3.3rem,6.5vw,5.6rem)] font-bold leading-[0.94] tracking-[-0.065em] text-foreground">
            16 profiles.
            <br />
            One sharp
            <br />
            first
            <br />
            impression.
          </h1>

          <p className="mt-6 max-w-[390px] text-sm leading-7 text-muted-foreground">
            Your LinkedIn profile is more than a digital resume. We shape your
            professional presence with strategic positioning, compelling
            content, and a visual identity that gets noticed.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#standouts"
              className="group inline-flex h-11 items-center gap-3 rounded-full bg-[#ff5a1f] px-6 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(255,90,31,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ed4c18]"
            >
              Explore profiles
              <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-1" />
            </Link>

            <span className="text-[10px] text-muted-foreground">
              2024–2025 Selection
            </span>
          </div>
        </motion.div>

        {/* Right visual composition */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[500px]"
        >
          {/* Main banner card */}
          <div className="absolute left-[4%] top-[7%] z-10 w-[68%] rounded-2xl border-[5px] border-[var(--surface)] bg-[#101827] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.15)] sm:p-5">
            <div className="relative flex aspect-[2.05/1] items-center overflow-hidden rounded-lg bg-[#101d32] px-5 sm:px-7">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background: `
                    radial-gradient(circle at 20% 50%, rgba(255,90,31,0.25), transparent 45%),
                    linear-gradient(120deg, #0c1423, #172b45, #09101d)
                  `,
                }}
              />

              {/* Abstract network lines */}
              <svg
                viewBox="0 0 400 180"
                className="absolute inset-0 size-full opacity-50"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 130 L80 40 L150 110 L230 25 L310 95 L400 10 M0 35 L100 150 L190 65 L280 145 L400 65"
                  stroke="#ff8b5c"
                  strokeWidth="1"
                />
                <circle cx="80" cy="40" r="4" fill="#ff8b5c" />
                <circle cx="230" cy="25" r="4" fill="#ff8b5c" />
                <circle cx="310" cy="95" r="4" fill="#ff8b5c" />
              </svg>

              <div className="relative z-10">
                <p className="font-display text-[clamp(12px,2vw,20px)] font-bold leading-tight tracking-tight text-white">
                  BUILDING THE FUTURE OF WORK
                </p>
                <p className="mt-2 text-[6px] uppercase tracking-[0.2em] text-white/60 sm:text-[8px]">
                  A professional brand built around you
                </p>
              </div>
            </div>
          </div>

          {/* Small floating profile */}
          <div className="absolute right-[1%] top-[20%] z-30 w-[43%] rounded-xl border border-border bg-[var(--surface)] p-3 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:w-[42%]">
            <div className="h-8 rounded-t-lg bg-gradient-to-r from-orange-100 to-orange-200 px-3 py-2">
              <p className="text-[8px] font-bold text-[#56230f]">Priya Nair</p>
              <p className="text-[6px] text-[#7c432d]">AI · Data · Decisions</p>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <ProfileAvatar initials="PN" color="bg-orange-600" />
              <div className="min-w-0">
                <p className="flex items-center gap-1 text-[8px] font-semibold text-foreground">
                  Priya Nair
                  <BadgeCheck className="size-2.5 text-[#ff5a1f]" />
                </p>
                <p className="text-[7px] text-muted-foreground">
                  Data Scientist
                </p>
              </div>
            </div>
          </div>

          {/* Main profile card */}
          <div className="absolute bottom-[12%] left-[2%] z-20 w-[70%] overflow-hidden rounded-2xl border border-border bg-[var(--surface)] shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
            <div className="relative h-[100px] overflow-hidden bg-gradient-to-br from-orange-100 via-orange-200 to-orange-50 sm:h-[125px]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(145deg, transparent 0px, transparent 18px, rgba(255,90,31,0.10) 19px, transparent 21px)",
                }}
              />

              <div className="absolute left-4 top-4">
                <p className="text-[9px] font-bold text-[#612c17]">
                  Maria Santos
                </p>
                <p className="mt-1 text-[7px] text-[#8d5036]">
                  Marketing Director · Growth Strategist
                </p>
              </div>
            </div>

            <div className="relative px-4 pb-4">
              <div className="-mt-5 flex items-end justify-between">
                <ProfileAvatar initials="MS" color="bg-[#9b6249]" />
                <span className="mb-1 rounded-full bg-orange-100 px-2 py-1 text-[7px] font-semibold text-orange-700">
                  Optimized Profile
                </span>
              </div>

              <p className="mt-2 flex items-center gap-1 text-[10px] font-bold text-foreground">
                Maria Santos
                <BadgeCheck className="size-3 text-[#ff5a1f]" />
              </p>

              <p className="mt-1 text-[8px] leading-4 text-muted-foreground">
                Scaling B2B brands through strategy, content and meaningful
                connections.
              </p>

              <div className="mt-3 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#ff5a1f] px-3 py-1.5 text-[7px] font-medium text-white">
                  <ArrowUpRight className="size-2.5" />
                  Connect
                </span>

                <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[7px] text-muted-foreground">
                  <MessageCircle className="size-2.5" />
                  Message
                </span>
              </div>
            </div>
          </div>

          {/* Portrait-style profile card */}
          <div className="absolute bottom-[10%] right-[2%] z-20 w-[25%] rounded-2xl border border-border bg-(--surface) p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.13)] sm:w-[23%]">
            <div className="relative aspect-[0.72/1] w-full overflow-hidden rounded-xl bg-[var(--surface-raised)]">
              <Image
                src="/images/personal-brand-image-1.webp"
                alt="Professional personal brand portrait"
                fill
                sizes="(max-width: 768px) 25vw, 150px"
                className="object-cover object-top"
              />
            </div>

            <div className="mt-1.5 space-y-1 px-1">
              <div className="h-1 w-[75%] rounded-full bg-[#ff5a1f]" />
              <div className="h-1 w-[45%] rounded-full bg-orange-200" />
            </div>
          </div>

          {/* Floating decorative accents */}
          <div className="absolute left-[5%] top-[0%] -z-10 size-24 rounded-full bg-[#ff5a1f]/10 blur-3xl" />
          <div className="absolute bottom-[3%] right-[4%] -z-10 size-40 rounded-full bg-[#ff5a1f]/15 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
