"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof window !== "undefined" && localStorage.getItem("quadra-theme") === "light"
      ? "light"
      : "dark"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "light",
      theme === "light"
    );
  }, [theme]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("quadra-theme", next);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:pt-7">
      <div className="mx-auto flex py-1.5 w-full max-w-271 items-center justify-between rounded-full border border-black/5 bg-white pe-5 text-black shadow-sm sm:pe-8">
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
        />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[13px] font-normal text-[#171717] md:flex"
        >
          <Link href="/work" className="transition-opacity hover:opacity-50">
            Work
          </Link>
          <Link href="/about" className="transition-opacity hover:opacity-50">
            About
          </Link>
          <Link
            href="/contact"
            className="transition-opacity hover:opacity-50"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid size-7.75 place-items-center rounded-full border border-black/10 bg-white transition hover:bg-neutral-100"
          >
            {mounted && theme === "light" ? (
              <Moon className="size-3.5" />
            ) : (
              <Sun className="size-3.5" />
            )}
          </button>

          <Link
            href="/contact"
            className="inline-flex h-7.75 items-center justify-center rounded-full bg-[#f45125] px-4 text-[11px] font-medium text-white shadow-[0_5px_16px_rgba(244,81,37,0.28)] transition hover:bg-[#df421c] sm:px-5"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}