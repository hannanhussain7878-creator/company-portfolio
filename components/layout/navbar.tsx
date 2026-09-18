"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";

    const stored = localStorage.getItem("quadra-theme") as
      | "dark"
      | "light"
      | null;
    return stored ?? "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => {
      const next = current === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("light", next === "light");
      localStorage.setItem("quadra-theme", next);
      return next;
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-300 items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2  font-display">
          <span className=" grid size-8 place-items-center rounded-[10px] bg-[#ff4b00] text-[14px] font-bold text-black">
            Q
          </span>

          <span className="text-[17px] font-bold  tracking-tight">Quadra</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-light text-muted-foreground md:flex">
          <Link
            href="/work"
            className="transition-colors hover:text-foreground"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full border border-border bg-background/70 backdrop-blur transition hover:bg-muted"
          >
            {theme === "light" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </button>

          <Link
            href="/contact"
            className="rounded-full bg-orange-500 px-4.5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
