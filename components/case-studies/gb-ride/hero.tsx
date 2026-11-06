
"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  CarFront,
  Check,
  Clock3,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";

function RidePhone({
  variant,
  className = "",
}: {
  variant: "dashboard" | "login" | "booking";
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[28px] border-[4px] border-[#29292d] bg-[#111114] p-[5px] shadow-[0_25px_65px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Dynamic island */}
      <div className="absolute left-1/2 top-[9px] z-20 h-[13px] w-[62px] -translate-x-1/2 rounded-full bg-black" />

      <div className="relative h-full min-h-0 overflow-hidden rounded-[21px] bg-[#f6f6f5] text-[#171719]">
        {/* Status bar */}
        <div className="flex h-7 items-center justify-between px-3 pt-1 text-[7px] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span>●</span>
            <span>◖</span>
            <span>▰</span>
          </span>
        </div>

        {variant === "dashboard" && (
          <div className="px-2.5 pb-3">
            <div className="mt-1 flex items-center justify-between">
              <div>
                <p className="text-[7px] text-neutral-400">Good morning,</p>
                <p className="text-[11px] font-bold">Find your ride</p>
              </div>
              <div className="grid size-6 place-items-center rounded-full bg-[#ff5a1f]/10 text-[#ff5a1f]">
                <MapPin size={12} />
              </div>
            </div>

            <div className="mt-3 rounded-lg bg-white p-2 shadow-sm">
              <p className="text-[6px] text-neutral-400">PICK-UP LOCATION</p>
              <div className="mt-1 flex items-center gap-1.5">
                <MapPin size={9} className="text-[#ff5a1f]" />
                <span className="text-[8px] font-semibold">Your current location</span>
              </div>
              <div className="my-2 border-t border-dashed border-neutral-200" />
              <p className="text-[6px] text-neutral-400">DROP-OFF LOCATION</p>
              <div className="mt-1 flex items-center gap-1.5">
                <MapPin size={9} className="text-[#ff5a1f]" />
                <span className="text-[8px] font-semibold">Where to?</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-[8px] font-bold">Available rides</p>
              <span className="text-[6px] text-[#ff5a1f]">See all</span>
            </div>

            {[
              ["Economy", "4 min away", "Rs. 350"],
              ["Comfort", "6 min away", "Rs. 500"],
              ["Premium", "8 min away", "Rs. 750"],
            ].map(([name, time, price], i) => (
              <div
                key={name}
                className="mt-1.5 flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm"
              >
                <div className="grid size-7 place-items-center rounded-md bg-[#fff0e9] text-[#ff5a1f]">
                  <CarFront size={14} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[7px] font-bold">{name}</p>
                  <p className="text-[6px] text-neutral-400">{time}</p>
                </div>
                <p className="text-[7px] font-bold">{price}</p>
              </div>
            ))}

            <div className="mt-3 rounded-lg bg-[#ff5a1f] py-2 text-center text-[8px] font-bold text-white">
              Find a ride
            </div>
          </div>
        )}

        {variant === "login" && (
          <div className="flex h-[calc(100%-28px)] flex-col items-center justify-center bg-[#ff5a1f] px-3 pb-4 text-white">
            <div className="mb-3 grid size-8 place-items-center rounded-xl bg-white/15">
              <CarFront size={19} />
            </div>

            <h3 className="text-[19px] font-bold tracking-tight">GB RIDE</h3>
            <p className="mt-1 text-[6px] text-white/75">
              YOUR CITY. YOUR RIDE.
            </p>

            <div className="mt-8 w-full space-y-2">
              <div className="flex h-8 items-center gap-2 rounded-md bg-white px-2 text-[#292929]">
                <Phone size={10} />
                <span className="text-[7px] text-neutral-500">
                  +92 3XX XXXXXXX
                </span>
              </div>

              <div className="flex h-8 items-center justify-center rounded-md bg-white text-[7px] font-bold text-[#222]">
                Sign in or sign up
              </div>

              <div className="flex items-center gap-2 py-2">
                <span className="h-px flex-1 bg-white/40" />
                <span className="text-[6px] text-white/80">OR CONTINUE WITH</span>
                <span className="h-px flex-1 bg-white/40" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {["G", "●", "f"].map((item, i) => (
                  <div
                    key={i}
                    className="grid h-8 place-items-center rounded-md bg-white text-[11px] font-bold text-[#222]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-auto text-center text-[5px] leading-3 text-white/70">
              By continuing, you agree to our
              <br />
              Terms of Service and Privacy Policy.
            </p>
          </div>
        )}

        {variant === "booking" && (
          <div className="px-2.5 pb-3">
            <div className="mt-1 flex items-center justify-between">
              <div>
                <p className="text-[7px] text-neutral-400">Welcome back</p>
                <p className="text-[10px] font-bold">Your next trip</p>
              </div>
              <div className="grid size-6 place-items-center rounded-full bg-white">
                <Menu size={12} />
              </div>
            </div>

            <div className="mt-3 h-[75px] rounded-lg bg-[#e7e7e5] p-2">
              <div className="flex h-full items-center justify-center rounded-md border border-dashed border-neutral-400">
                <MapPin size={18} className="text-[#ff5a1f]" />
              </div>
            </div>

            <div className="mt-3 rounded-lg bg-white p-2 shadow-sm">
              <p className="text-[7px] font-bold">Ride details</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="grid size-6 place-items-center rounded-full bg-[#fff0e9] text-[#ff5a1f]">
                  <CarFront size={12} />
                </div>
                <div className="flex-1">
                  <p className="text-[7px] font-semibold">Your driver</p>
                  <p className="text-[6px] text-neutral-400">Arriving shortly</p>
                </div>
                <Star size={10} className="fill-[#ff5a1f] text-[#ff5a1f]" />
              </div>
            </div>

            <div className="mt-2 rounded-lg bg-white p-2 shadow-sm">
              <div className="flex items-center gap-1">
                <ShieldCheck size={10} className="text-[#ff5a1f]" />
                <span className="text-[7px] font-bold">Safe journey</span>
              </div>
              <p className="mt-1 text-[6px] text-neutral-400">
                Your ride is protected.
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-lg bg-[#ff5a1f] px-2 py-2 text-white">
              <span className="text-[7px] font-semibold">Track your ride</span>
              <ArrowUpRight size={11} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function GBRideHero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#080809] px-5 pb-20 pt-28 text-white sm:min-h-[780px] sm:px-8 lg:flex lg:min-h-[850px] lg:items-center lg:pb-24 lg:pt-28">
      {/* Warm Quadra orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 size-[650px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,31,0.32), rgba(255,90,31,0.10) 42%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 -z-10 size-[420px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,31,0.10), transparent 70%)",
        }}
      />

      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* Project information */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[490px]"
        >
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-[#ff5a1f] text-black">
              <CarFront size={16} strokeWidth={2.5} />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-white/80">
              SMz4U
            </span>
          </div>

          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#ff875b]">
            Mobile app experience
          </p>

          <h1 className="font-display max-w-[520px] text-[48px] font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[68px]">
            Ride,
            <br />
            reimagined<span className="text-[#ff5a1f]">.</span>
          </h1>

          <p className="mt-6 max-w-[360px] text-[13px] leading-6 text-white/55 sm:text-sm">
            A map-first ride-hailing experience where riders set the fare and
            trust comes standard.
          </p>

          {/* Project details */}
          <div className="mt-9 grid max-w-[390px] grid-cols-4 gap-4 border-t border-white/10 pt-5">
            {[
              ["Year", "2026"],
              ["Role", "Product & UI/UX"],
              ["Platform", "iOS · Android"],
              ["Duration", "12 Weeks"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[8px] text-white/35">{label}</p>
                <p className="mt-1.5 text-[10px] font-semibold leading-4 text-white/90">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Smartphone showcase */}
        <div className="relative mx-auto flex h-[390px] w-full max-w-[550px] items-center justify-center sm:h-[490px] lg:h-[530px]">
          {/* Ambient phone glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            style={{
              background: "rgba(255,90,31,0.16)",
            }}
          />

          {/* Left dashboard phone */}
          <motion.div
            initial={{ opacity: 0, y: 35, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-[2%] top-[13%] z-10 h-[245px] w-[112px] sm:left-[5%] sm:top-[12%] sm:h-[315px] sm:w-[145px]"
          >
            <RidePhone
              variant="dashboard"
              className="h-full w-full"
            />
          </motion.div>

          {/* Center orange login phone */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="absolute left-1/2 top-[18%] z-20 h-[275px] w-[125px] -translate-x-1/2 sm:top-[15%] sm:h-[360px] sm:w-[165px]"
          >
            <RidePhone
              variant="login"
              className="h-full w-full border-[#38302a] shadow-[0_25px_90px_rgba(255,90,31,0.18)]"
            />
          </motion.div>

          {/* Right booking phone */}
          <motion.div
            initial={{ opacity: 0, y: 35, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-[1%] top-[39%] z-10 h-[220px] w-[102px] sm:right-[3%] sm:top-[37%] sm:h-[285px] sm:w-[130px]"
          >
            <RidePhone
              variant="booking"
              className="h-full w-full border-[#29292d]"
            />
          </motion.div>

          {/* Floating feature label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-[2%] left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#151515]/80 px-4 py-2 backdrop-blur-md sm:flex"
          >
            <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
            <span className="text-[9px] text-white/65">
              Designed for the journey
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/35 lg:flex">
        <span className="text-[8px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={13} />
      </div>
    </section>
  );
}
