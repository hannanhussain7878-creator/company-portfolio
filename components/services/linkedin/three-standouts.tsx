"use client";

import Image from "next/image";
import { ArrowUpRight, BadgeCheck, MessageSquare, Users } from "lucide-react";
import { motion } from "motion/react";

const profiles = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    headline: "Building the future of work · SaaS · AI",
    description: "Building the future of work through SaaS and AI.",
    initials: "AC",
    color: "bg-[#a66c50]",
    status: "violet",
  },
  {
    name: "Maria Santos",
    role: "Marketing Director",
    headline: "Scaling DTC brands from 0 to 8 figures",
    description: "Scaling DTC brands through strategic marketing.",
    initials: "MS",
    color: "bg-[#85634f]",
    status: "orange",
  },
  {
    name: "James Okafor",
    role: "Freelance Developer",
    headline: "Shipping resilient backends · Fintech · Go",
    description: "Shipping resilient backends for modern businesses.",
    initials: "JO",
    color: "bg-[#537b67]",
    status: "green",
  },
];

function ProfileCard({
  profile,
  index,
}: {
  profile: (typeof profiles)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative min-w-0 rounded-2xl border border-border bg-[var(--surface)] p-2 shadow-[0_12px_35px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.11)]"
    >
      {/* Banner */}
      <div
        className={`relative h-[105px] overflow-hidden rounded-xl ${
          profile.status === "green"
            ? "bg-gradient-to-br from-[#d8f2e8] via-[#c5eadc] to-[#edf8f2]"
            : profile.status === "orange"
              ? "bg-gradient-to-br from-[#ffe4d6] via-[#ffd3bf] to-[#fff0e8]"
              : "bg-gradient-to-br from-[#ffe0d0] via-[#ffcbb4] to-[#fff0e7]"
        }`}
      >
        {/* Decorative banner lines */}
        <svg
          viewBox="0 0 400 110"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-50"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-20 80 L90 35 L170 75 L270 20 L420 70"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <path
            d="M-20 95 L100 55 L205 95 L300 48 L420 90"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <path
            d="M20 15 L140 65 L230 28 L360 72"
            stroke="#ffffff"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute left-4 top-5 z-10">
          <p className="text-[9px] font-bold text-[#482719]">
            {profile.name}
          </p>
          <p className="mt-1 max-w-[190px] text-[8px] text-[#77503c]">
            {profile.headline}
          </p>
        </div>

        <span className="absolute right-4 top-4 size-1 rounded-full bg-white" />
        <span className="absolute right-10 top-10 size-1 rounded-full bg-white" />
      </div>

      {/* Main profile details */}
      <div className="relative flex min-h-[190px] items-end justify-between px-2 pb-2 pt-3">
        <div className="min-w-0 pr-2">
          <h3 className="font-display text-[15px] font-bold tracking-tight text-foreground">
            {profile.name}
          </h3>

          <p className="mt-1 text-[9px] text-muted-foreground">
            {profile.role}
          </p>

          <p className="mt-2 text-[9px] text-[var(--text-tertiary)]">
            Profile reframe
          </p>
        </div>

        {/* Floating mini profile */}
        <div className="relative -mt-[92px] w-[39%] shrink-0 rounded-xl border border-border bg-[var(--surface)] p-2 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex justify-center">
            <div
              className={`relative grid size-10 place-items-center overflow-hidden rounded-full border-2 border-[var(--surface)] ${profile.color}`}
            >
              <span className="text-[10px] font-bold text-white">
                {profile.initials}
              </span>
            </div>
          </div>

          <p className="mt-2 flex items-center gap-1 text-[9px] font-bold text-foreground">
            {profile.name.split(" ")[0]}
            <BadgeCheck className="size-2.5 shrink-0 text-[#ff5a1f]" />
          </p>

          <p className="mt-1 line-clamp-3 text-[8px] leading-[1.5] text-muted-foreground">
            {profile.description}
          </p>

          <p className="mt-1 text-[7px] text-[var(--text-tertiary)]">
            {profile.role}
          </p>

          <div className="mt-2 flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#ff5a1f] px-2 py-1 text-[7px] font-medium text-white">
              <Users className="size-2" />
              Connect
            </span>

            <span className="grid size-5 place-items-center rounded-full border border-border text-muted-foreground">
              <MessageSquare className="size-2.5" />
            </span>
          </div>
        </div>

        <ArrowUpRight className="absolute bottom-2 right-2 size-3 text-[#ff5a1f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </motion.article>
  );
}

export function ThreeStandouts() {
  return (
    <section
      id="standouts"
      className="bg-background px-5 py-20 text-foreground transition-colors duration-300 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
            Three standouts.
          </h2>

          <p className="pb-1 text-[10px] text-muted-foreground">
            Selected revamps
          </p>
        </motion.div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={profile.name}
              profile={profile}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}