"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaDribbble, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const serviceColumns = [
  ["UI/UX Design", "Graphic Design", "Web Development"],
  ["WordPress Development", "AI Solutions & Automation", "App Development"],
  ["LinkedIn Profile & Content Optimization"],
];

const socials = [
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Dribbble", href: "#", Icon: FaDribbble },
  { label: "GitHub", href: "#", Icon: FaGithub },
];

const card =
  "rounded-3xl border border-border bg-[var(--surface)] transition-colors duration-300";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background px-4 pb-6 pt-16 text-foreground transition-colors duration-300 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-[1fr_1.55fr_88px] md:grid-rows-[auto_auto]">
          {/* Tagline */}
          <div className={`${card} flex flex-col p-8 md:row-span-2`}>
            <h3 className="font-display text-[34px] font-bold leading-[1.05] tracking-tight text-foreground">
              Every Moment That Matter
            </h3>

            <span className="mt-8 grid size-5 place-items-center rounded bg-[#e8582a]">
              <MapPin className="size-2.5 text-white" />
            </span>

            <p className="mt-4 max-w-60 text-[11px] leading-5 text-muted-foreground">
              Four founders, seven disciplines. Design, code, and AI for teams
              that need it shipped.
            </p>
          </div>

          {/* Services */}
          <div className={`${card} px-8 py-6`}>
            <h3 className="font-display text-[34px] font-bold tracking-tight text-foreground">
              Services
            </h3>

            <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {serviceColumns.map((col, i) => (
                <ul key={i} className="space-y-2">
                  {col.map((item) => (
                    <li key={item}>
                      <Link
                        href="/#services"
                        className="text-[10px] leading-4 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div
            className={`${card} flex items-center justify-center gap-3 rounded-full p-1 md:row-span-2 md:flex-col md:justify-start md:pt-5`}
          >
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-12 place-items-center rounded-full border border-border bg-[var(--surface-raised)] text-[var(--text-secondary)] transition-colors hover:border-[#e8582a]/60 hover:text-[#e8582a]"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>

          {/* Page links */}
          <nav
            className={`${card} flex items-center justify-center gap-8 px-8 py-8 sm:gap-12`}
            aria-label="Footer navigation"
          >
            {[
              ["About", "/about"],
              ["Work", "/work"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-[#e8582a]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact us */}
          <div
            className={`${card} flex flex-col gap-4 px-8 py-6 md:col-span-3 md:flex-row md:items-center md:gap-10`}
          >
            <h3 className="font-display text-[34px] font-bold tracking-tight text-foreground">
              Contact us
            </h3>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] text-muted-foreground md:ml-6">
              <a
                href="mailto:hello@quadra.studio"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-3" />
                hello@quadra.studio
              </a>

              <a
                href="tel:+13125550188"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-3" />
                +1 (312) 555-0188
              </a>

              <span>Remote-first · GMT+5 &amp; CST</span>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-1 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Quadnodes"
            width={1600}
            height={280}
            sizes="(min-width: 1100px) 1100px, 100vw"
            className="h-auto w-full max-w-[1400px] select-none"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-4 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Quadra Studio. All rights reserved.</p>
          <p>
            Graphic Design · UI/UX · Web · Apps · AI · WordPress · LinkedIn
          </p>
        </div>
      </div>
    </footer>
  );
}