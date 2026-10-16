"use client";

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("quadra-theme");
    const initial = saved === "light" ? "light" : "dark";

    setTheme(initial);
    document.documentElement.classList.toggle(
      "light",
      initial === "light"
    );
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle(
      "light",
      next === "light"
    );

    localStorage.setItem("quadra-theme", next);
    setTheme(next);
  }

  const isLight = mounted && theme === "light";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:pt-7">
      <div
        className={`mx-auto flex w-full max-w-[1084px] items-center justify-between rounded-full border py-1.5 pe-5 shadow-sm transition-colors duration-300 sm:pe-8 ${
          isLight
            ? "border-white/10 bg-black text-white"
            : "border-black/5 bg-white text-black"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Quadra home"
          className="flex shrink-0 items-center gap-0.5"
        >
          <Image
            src="/logo.svg"
            alt="Quadra"
            width={180}
            height={100}
            priority
            className="h-auto w-[180px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[13px] font-normal transition-colors duration-300 md:flex ${
            isLight ? "text-white" : "text-[#171717]"
          }`}
        >
          <Link href="/work" className="transition-opacity hover:opacity-60">
            Work
          </Link>

          <Link href="/about" className="transition-opacity hover:opacity-60">
            About
          </Link>

          <Link
            href="/contact"
            className="transition-opacity hover:opacity-60"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            onClick={toggleTheme}
            className={`grid size-[31px] place-items-center rounded-full border transition-colors duration-300 ${
              isLight
                ? "border-white/20 bg-neutral-900 text-white hover:bg-neutral-800"
                : "border-black/10 bg-white text-black hover:bg-neutral-100"
            }`}
          >
            {mounted && theme === "light" ? (
              <Moon className="size-3.5" />
            ) : (
              <Sun className="size-3.5" />
            )}
          </button>

          <Link
            href="/contact"
            className="inline-flex h-[31px] items-center justify-center rounded-full bg-[#f45125] px-4 text-[11px] font-medium text-white shadow-[0_5px_16px_rgba(244,81,37,0.28)] transition hover:bg-[#df421c] sm:px-5"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}