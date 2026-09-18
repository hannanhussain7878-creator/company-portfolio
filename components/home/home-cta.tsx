import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden border-b border-border py-28 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,75,20,.18),transparent_45%)]" />

      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
          Next step
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
          Have a project in mind?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
          Tell us what you&apos;re building. You get a written scope with phases,
          dates, price, and a clear next step.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-xs font-semibold text-white transition hover:bg-orange-600"
          >
            Start a Project
            <ArrowUpRight className="size-3.5" />
          </Link>

          <span className="text-[10px] text-muted-foreground">
            or email hello@quadra.studio
          </span>
        </div>
      </div>
    </section>
  );
}