"use client";

import { Reveal } from "@/components/ui/reveal";
import { team } from "@/data/team";

export function FounderStrip() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-xl border border-border p-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-sm">
              <h3 className="text-sm font-semibold">
                You work with the founders
              </h3>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Four specialists, no account managers in between. Whoever owns
                your discipline is on the call.
              </p>

              <a
                href="#team"
                className="mt-3 inline-block text-[10px] font-medium text-orange-500"
              >
                Meet the full team →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="flex min-w-40 items-center gap-3"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-orange-500/10 text-[9px] font-semibold text-orange-500">
                    {member.initials}
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold">
                      {member.name}
                    </p>

                    <p className="text-[8px] text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}