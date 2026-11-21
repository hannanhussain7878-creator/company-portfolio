"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const clients = [
  "Ledgerline",
  "Orbit Logistics",
  "Kite Health",
  "Northmark",
  "Atlas Supply",
  "Fieldnote",
];

const stars: [number, number, number][] = [
  [12, 62, 0],
  [27, 78, 1.2],
  [41, 70, 2.1],
  [58, 84, 0.6],
  [73, 66, 1.8],
  [88, 76, 0.9],
  [20, 48, 2.6],
  [94, 58, 1.5],
];

export function Hero() {
  const reduce = useReducedMotion();

  const loop = (duration: number, delay = 0) =>
    reduce
      ? undefined
      : {
          duration,
          delay,
          repeat: Infinity,
          repeatType: "mirror" as const,
          ease: "easeInOut" as const,
        };

  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground [--h:clamp(380px,34vw,520px)]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
        }}
      />

      {/* ───────── HERO GLOW COLUMN ─────────
          This single overlay spans from the planet rim (bottom) all the way
          up to the heading top. All glow layers are anchored to its BOTTOM
          (the rim) and stretch UP toward the heading, so the light visibly
          climbs from the planet to the center text. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-40 -z-10 sm:top-48"
      >
        {/* Glow 1: wide, faint wash — rim → heading top */}
        <motion.div
          className="absolute inset-0"
          style={{
            transformOrigin: "50% 100%",
            background:
              "radial-gradient(ellipse 75% 100% at 50% 100%, rgba(235,75,28,0.26) 0%, rgba(170,56,24,0.15) 40%, rgba(110,40,20,0.04) 70%, transparent 100%)",
          }}
          animate={reduce ? undefined : { opacity: [0.6, 1] }}
          transition={loop(5)}
        />

        {/* Glow 2: tall central column — brightest at rim, fading to heading top */}
        <motion.div
          className="absolute inset-y-0 left-1/2 w-[58%] max-w-[860px] -translate-x-1/2 blur-2xl"
          style={{
            transformOrigin: "50% 100%",
            background:
              "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(255,92,36,0.5) 0%, rgba(215,70,30,0.28) 38%, rgba(150,50,24,0.08) 68%, transparent 100%)",
          }}
          animate={reduce ? undefined : { opacity: [0.55, 1], scaleY: [0.9, 1] }}
          transition={loop(4.5)}
        />

        {/* Glow 3: pulse of light that travels UP from rim to heading top */}
        {!reduce && (
          <motion.div
            className="absolute bottom-0 left-1/2 h-64 w-[34%] max-w-[480px] -translate-x-1/2 rounded-[50%] blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,120,64,0.55) 0%, rgba(255,80,30,0.2) 55%, transparent 80%)",
            }}
            initial={{ y: "0%", opacity: 0 }}
            animate={{ y: ["0%", "-130%"], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeOut",
              times: [0, 0.35, 1],
            }}
          />
        )}

        {/* Glow 4: hot base where the light starts (planet rim) */}
        <motion.div
          className="absolute bottom-0 left-1/2 h-24 w-[28%] max-w-[440px] -translate-x-1/2 rounded-[50%] blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,140,84,0.7) 0%, rgba(255,86,32,0.28) 55%, transparent 80%)",
          }}
          animate={reduce ? undefined : { opacity: [0.45, 1], scaleX: [0.85, 1.15] }}
          transition={loop(4.5, 0.2)}
        />
      </div>

      {/* ───────── Hero content ───────── */}
      <div className="relative z-10 flex flex-col items-center px-5 pb-28 pt-40 text-center sm:pt-48">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-250 font-display text-[clamp(3rem,5.4vw,5rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-foreground"
        >
          We build the full stack of
          <br className="hidden sm:block" /> your brand
          <br />
          <span className="text-muted-foreground">design, code </span>
          <span className="text-[#f45125]">&amp; AI</span>
          <span className="text-foreground">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-195 text-[15px] leading-[1.4] text-muted-foreground"
        >
          One studio for identity, interfaces, web and mobile products, and the
          AI systems behind them.
          <br className="hidden sm:block" />
          From Figma to production in weeks, not quarters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
        >
          <Link
            href="/contact"
            className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-[#f05a28] px-5 text-xs font-medium text-white shadow-[0_4px_22px_rgba(255,75,25,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff6035]"
          >
            Start a Project
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/work"
            className="group inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-background/30 px-5 text-xs text-foreground transition hover:border-foreground/25 hover:bg-muted"
          >
            See Our Work
            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* ───────── Planet + client strip ───────── */}
      <div className="relative min-h-75 px-5 pb-20 pt-25 text-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* RISING LIGHT ring around the planet — now starts exactly at rim
              and fades out at --h (heading top). */}
          <motion.div
            className="absolute left-1/2 aspect-square -translate-x-1/2 rounded-full"
            style={{
              top: "calc(var(--h) * -1)",
              width: "calc(232vw + 2 * var(--h))",
              background:
                "radial-gradient(circle closest-side at 50% 50%, transparent calc(116vw - 2px), rgba(255,88,34,0.6) 116vw, rgba(235,75,28,0.38) calc(116vw + var(--h) * 0.12), rgba(190,62,26,0.2) calc(116vw + var(--h) * 0.4), rgba(130,46,22,0.08) calc(116vw + var(--h) * 0.75), transparent calc(116vw + var(--h)))",
              WebkitMaskImage:
                "linear-gradient(to right, transparent calc(50% - 62vw), black calc(50% - 26vw), black calc(50% + 26vw), transparent calc(50% + 62vw))",
              maskImage:
                "linear-gradient(to right, transparent calc(50% - 62vw), black calc(50% - 26vw), black calc(50% + 26vw), transparent calc(50% + 62vw))",
            }}
            animate={reduce ? undefined : { opacity: [0.6, 1] }}
            transition={loop(4.5)}
          />

          {/* Outer halo */}
          <motion.div
            className="absolute left-1/2 top-0 aspect-square w-[232vw] -translate-x-1/2 rounded-full"
            animate={
              reduce
                ? { boxShadow: "0 -14px 70px rgba(255,75,25,0.22)" }
                : {
                    boxShadow: [
                      "0 -10px 50px rgba(255,75,25,0.12)",
                      "0 -18px 100px rgba(255,75,25,0.38)",
                    ],
                  }
            }
            transition={loop(4.5)}
          />

          {/* Planet body */}
          <div
            className="absolute left-1/2 top-0 aspect-square w-[232vw] -translate-x-1/2 overflow-hidden rounded-full"
            style={{
              background:
                "radial-gradient(circle closest-side at 50% 50%, var(--background) 0%, var(--background) 90%, rgba(80,30,16,1) 95%, rgba(128,46,22,1) 98.8%, rgba(175,70,34,1) 100%)",
              borderTop: "1px solid rgba(255,100,50,0.45)",
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle closest-side at 50% 50%, transparent 0%, transparent 91%, rgba(255,80,30,0.32) 96.5%, rgba(255,115,60,0.75) 100%)",
              }}
              animate={reduce ? undefined : { opacity: [0.05, 1] }}
              transition={loop(4.5)}
            />

            {stars.map(([l, t, d], i) => (
              <motion.span
                key={i}
                className="absolute size-[2px] rounded-full bg-white/40"
                style={{ left: `${l}%`, top: `${t / 6}%` }}
                animate={reduce ? undefined : { opacity: [0.1, 0.7] }}
                transition={loop(3, d)}
              />
            ))}
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--background))",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative z-10 mx-auto max-w-[1100px]"
        >
          <p className="text-base text-foreground sm:text-lg">
            Built for founders, startups &amp; scaling teams
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground sm:gap-x-7 sm:text-[13px]">
            {clients.map((name) => (
              <li
                key={name}
                className="transition-colors duration-200 hover:text-foreground"
              >
                {name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}