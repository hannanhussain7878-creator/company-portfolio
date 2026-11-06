
"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  Clock3,
  ShieldCheck,
  Phone,
  Star,
  CarFront,
  Search,
} from "lucide-react";

function PhoneScreen({
  type,
  className = "",
}: {
  type: "tracking" | "fare" | "safety";
  className?: string;
}) {
  return (
    <div
      className={`relative w-[142px] overflow-hidden rounded-[27px] border-[5px] border-[#242428] bg-[#101012] p-[4px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:w-[155px] ${className}`}
    >
      <div className="relative h-[255px] overflow-hidden rounded-[19px] bg-[#f5f5f4] text-[#171719] sm:h-[280px]">
        {/* Status bar */}
        <div className="flex h-7 items-center justify-between px-3 pt-1 text-[7px] font-bold">
          <span>9:41</span>
          <span>● ◖ ▰</span>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-3 py-1">
          <div className="flex items-center gap-1.5">
            <span className="grid size-5 place-items-center rounded-full bg-[#ff5a1f] text-[8px] font-bold text-black">
              S
            </span>
            <span className="text-[8px] font-bold">SMz4U</span>
          </div>

          <span className="grid size-5 place-items-center rounded-full bg-white">
            <MapPin size={10} className="text-[#ff5a1f]" />
          </span>
        </div>

        {type === "tracking" && (
          <div className="px-2.5 pt-2">
            <div className="relative h-[92px] overflow-hidden rounded-lg bg-[#24252a]">
              {/* Map-like background */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, transparent 45%, #777 46%, transparent 48%), linear-gradient(120deg, transparent 45%, #777 46%, transparent 48%)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute left-[28%] top-[30%] grid size-7 place-items-center rounded-full bg-[#ff5a1f] text-black">
                <CarFront size={13} />
              </div>
              <div className="absolute bottom-2 right-3 rounded-full bg-white px-2 py-1 text-[6px] font-bold">
                Driver nearby
              </div>
            </div>

            <div className="mt-2 rounded-lg bg-white p-2 shadow-sm">
              <p className="text-[8px] font-bold">Your destination is</p>
              <p className="text-[8px] font-bold">arriving in 25 min</p>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[7px] text-neutral-500">Driver</span>
                <span className="text-[7px] font-semibold">Hassan</span>
                <Star size={9} className="text-[#ff5a1f]" />
              </div>
            </div>

            <div className="mt-2 rounded-lg border border-[#ff5a1f]/40 bg-white p-2">
              <div className="flex items-center gap-1.5">
                <MapPin size={9} className="text-[#ff5a1f]" />
                <span className="text-[7px]">Silicon Global Tech</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <Navigation size={9} className="text-[#ff5a1f]" />
                <span className="text-[7px]">Sankot Gilgit</span>
              </div>
            </div>

            <div className="mt-2 rounded-md bg-[#ff5a1f] py-2 text-center text-[7px] font-bold text-black">
              End Ride
            </div>
          </div>
        )}

        {type === "fare" && (
          <div className="px-2.5 pt-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <p className="text-[8px] font-bold">Waiting for offers</p>
              <p className="text-[7px] text-neutral-400">from drivers</p>

              <div className="mt-2 flex justify-between gap-2">
                <button className="flex-1 rounded-md bg-[#ff5a1f] py-1.5 text-[8px] font-bold text-black">
                  −5
                </button>
                <button className="flex-1 rounded-md bg-[#ff5a1f] py-1.5 text-[8px] font-bold text-black">
                  +5
                </button>
              </div>

              <div className="mt-2 rounded-md border border-neutral-200 p-2">
                <p className="text-[7px]">Automatically accept the</p>
                <p className="text-[7px]">nearest offer</p>
              </div>

              <div className="mt-2 flex items-center justify-between rounded-md border border-neutral-200 p-2">
                <span className="text-[7px] font-bold">PKR 2500</span>
                <span className="text-[6px] text-neutral-400">Cash</span>
              </div>
            </div>

            <div className="mt-2 rounded-lg border border-[#ff5a1f]/40 bg-white p-2">
              <p className="text-[7px] font-semibold">Pickup location</p>
              <p className="mt-1 text-[7px] text-neutral-500">Sankot Gilgit</p>
            </div>

            <div className="mt-2 rounded-md bg-[#ff5a1f] py-2 text-center text-[7px] font-bold text-black">
              Cancel Request
            </div>
          </div>
        )}

        {type === "safety" && (
          <div className="px-2.5 pt-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[8px] font-bold">Notifications</p>
                <ShieldCheck size={12} className="text-[#ff5a1f]" />
              </div>

              <div className="mt-3 rounded-md bg-red-500 py-2 text-center text-[7px] font-bold text-white">
                SOS Emergency
              </div>

              {[
                "Share my trip",
                "Trusted Contacts",
                "Report a safety issue",
                "Safety Guidelines",
                "Call Emergency Services",
              ].map((item, index) => (
                <div
                  key={item}
                  className="mt-2 flex items-center justify-between rounded-md bg-[#f3f3f3] p-2"
                >
                  <span className="flex items-center gap-1.5 text-[7px]">
                    {index === 0 ? (
                      <Navigation size={9} />
                    ) : index === 1 ? (
                      <ShieldCheck size={9} />
                    ) : (
                      <Phone size={9} />
                    )}
                    {item}
                  </span>
                  <span className="text-[8px]">›</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom navigation */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-around bg-[#ff5a1f] py-2 text-black">
          <CarFront size={11} />
          <Navigation size={11} />
          <ShieldCheck size={11} />
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    number: "01",
    label: "LIVE TRACKING",
    title: "Watch your ride approach in real time.",
    description:
      "A living map shows your driver, ETA, and route the moment a ride is confirmed.",
    type: "tracking" as const,
    dark: false,
    phones: 2,
  },
  {
    number: "02",
    label: "FARE CONTROL",
    title: "Name your price, not the other way around.",
    description:
      "Riders propose a fare and let nearby drivers respond. Transparent by design.",
    type: "fare" as const,
    dark: true,
    phones: 1,
  },
  {
    number: "03",
    label: "SAFETY FIRST",
    title: "Emergency tools, one tap away.",
    description:
      "SOS, trusted contacts, and trip sharing built into the experience.",
    type: "safety" as const,
    dark: false,
    phones: 1,
  },
];

export function RideFeatureHighlights() {
  return (
    <section
      id="feature-highlights"
      className="bg-background px-5 py-24 text-foreground transition-colors duration-300 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[920px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <p className="mb-4 text-[10px] font-medium tracking-[0.24em] text-[#ff5a1f]">
            06 — FEATURE HIGHLIGHTS
          </p>

          <h2 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl">
            Built around trust.
          </h2>
        </motion.div>

        {/* Feature panels */}
        <div className="space-y-3 sm:space-y-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className={`relative grid min-h-[280px] overflow-hidden rounded-[22px] ${
                feature.dark
                  ? "bg-[#080809] text-white"
                  : "border border-border bg-[var(--surface)] text-foreground"
              } md:grid-cols-2`}
            >
              {/* Text */}
              <div
                className={`relative z-10 flex flex-col justify-center px-7 py-10 sm:px-9 sm:py-12 ${
                  feature.dark ? "md:order-2" : ""
                }`}
              >
                <p className="mb-4 text-[9px] font-medium tracking-[0.2em] text-[#ff5a1f]">
                  {feature.label}
                </p>

                <h3
                  className={`font-display max-w-[330px] text-[25px] font-bold leading-[1.15] tracking-tight sm:text-[29px] ${
                    feature.dark ? "text-white" : "text-foreground"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-4 max-w-[300px] text-[11px] leading-[1.8] sm:text-xs ${
                    feature.dark
                      ? "text-white/45"
                      : "text-muted-foreground"
                  }`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Phone showcase */}
              <div
                className={`relative flex min-h-[270px] items-center justify-center gap-3 overflow-hidden px-5 py-8 ${
                  feature.dark ? "md:order-1" : ""
                }`}
              >
                {feature.dark && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 55%, rgba(255,90,31,0.19), transparent 65%)",
                    }}
                  />
                )}

                {feature.type === "tracking" ? (
                  <>
                    <PhoneScreen
                      type="tracking"
                      className="relative z-10 -mr-4 scale-[0.88] sm:scale-95"
                    />
                    <PhoneScreen
                      type="tracking"
                      className="relative z-20 mt-5"
                    />
                  </>
                ) : (
                  <PhoneScreen
                    type={feature.type}
                    className="relative z-10"
                  />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
