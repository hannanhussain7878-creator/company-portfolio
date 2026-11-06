
"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  Search,
  CarFront,
  Clock3,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const screens = [
  {
    title: "Booking Flow",
    subtitle: "Pickup → destination → fare",
    type: "booking",
  },
  {
    title: "Live Ride",
    subtitle: "Driver, ETA & trip details",
    type: "live",
  },
  {
    title: "Settings & Account",
    subtitle: "Profile, payments, safety",
    type: "account",
  },
] as const;

function PhoneMockup({
  type,
  large = false,
}: {
  type: "booking" | "live" | "account";
  large?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-[25px] border-[5px] border-[#242428] bg-[#101012] p-[4px] shadow-[0_18px_35px_rgba(0,0,0,0.22)] ${
        large ? "h-[300px] w-[150px] sm:h-[340px] sm:w-[170px]" : "h-[205px] w-[105px] sm:h-[220px] sm:w-[114px]"
      }`}
    >
      <div className="absolute left-1/2 top-[7px] z-20 h-[12px] w-[48px] -translate-x-1/2 rounded-full bg-black" />

      <div className="h-full overflow-hidden rounded-[18px] bg-[#f7f7f6] text-[#171719]">
        <div className="flex h-6 items-center justify-between px-2 pt-1 text-[6px] font-bold">
          <span>9:41</span>
          <span>● ◖ ▰</span>
        </div>

        <div className="px-2 pb-2">
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="grid size-5 place-items-center rounded-full bg-[#ff5a1f] text-[7px] font-bold text-black">
                S
              </div>
              <span className="text-[7px] font-bold">SMz4U</span>
            </div>
            <div className="grid size-5 place-items-center rounded-full bg-white">
              <MapPin size={9} className="text-[#ff5a1f]" />
            </div>
          </div>

          {type === "booking" && (
            <>
              <div className="mt-3 h-[55px] rounded-md bg-[#26262b] p-2">
                <div className="flex h-full items-center justify-center">
                  <Navigation size={19} className="text-[#ff5a1f]" />
                </div>
              </div>

              <div className="mt-2 rounded-md bg-white p-2 shadow-sm">
                <div className="flex items-center gap-1">
                  <MapPin size={8} className="text-[#ff5a1f]" />
                  <span className="text-[6px]">From</span>
                </div>
                <div className="my-1 border-t border-neutral-100" />
                <div className="flex items-center gap-1">
                  <MapPin size={8} className="text-[#ff5a1f]" />
                  <span className="text-[6px]">To</span>
                </div>
              </div>

              <div className="mt-2 rounded-md bg-white p-2 shadow-sm">
                <p className="text-[7px] font-bold">Choose your ride</p>
                <div className="mt-2 flex justify-between text-[6px]">
                  <span>Economy</span>
                  <span className="font-bold">PKR 350</span>
                </div>
              </div>
            </>
          )}

          {type === "live" && (
            <>
              <div className="mt-3 rounded-md bg-[#e9e9e7] p-2">
                <div className="flex h-[58px] items-center justify-center">
                  <Navigation size={20} className="text-[#ff5a1f]" />
                </div>
              </div>

              <div className="mt-2 rounded-md bg-white p-2 shadow-sm">
                <p className="text-[7px] font-bold">Driver is arriving</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="grid size-6 place-items-center rounded-full bg-[#ffefe8]">
                    <CarFront size={12} className="text-[#ff5a1f]" />
                  </div>
                  <div>
                    <p className="text-[6px] font-bold">Your driver</p>
                    <p className="text-[5px] text-neutral-400">4 min away</p>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-md bg-[#ff5a1f] py-2 text-center text-[6px] font-bold text-black">
                Track your ride
              </div>
            </>
          )}

          {type === "account" && (
            <>
              <div className="mt-3 rounded-md bg-white p-2 shadow-sm">
                <p className="text-[7px] font-bold">Ride offers</p>

                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="mt-2 rounded-md border border-neutral-100 p-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[6px] font-bold">Driver offer</span>
                      <Star size={8} className="text-[#ff5a1f]" />
                    </div>
                    <p className="mt-1 text-[6px]">PKR 2500</p>
                  </div>
                ))}
              </div>

              <div className="mt-2 rounded-md bg-[#ff5a1f] py-2 text-center text-[6px] font-bold text-black">
                Accept offer
              </div>
            </>
          )}

          <div className="mt-2 flex justify-around rounded-md bg-[#ff5a1f] py-2 text-black">
            <CarFront size={10} />
            <MapPin size={10} />
            <ShieldCheck size={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferPreview() {
  return (
    <div className="relative h-full min-h-[180px] overflow-hidden bg-[#171719] p-4 sm:p-6">
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(35deg, transparent 45%, rgba(255,255,255,0.15) 46%, transparent 48%), linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.12) 46%, transparent 48%)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[420px] space-y-3">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-white p-3 text-[#171719] shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-full bg-[#ff5a1f]/15 text-[9px] font-bold text-[#ff5a1f]">
                  H
                </div>
                <div>
                  <p className="text-[10px] font-bold">Hassan</p>
                  <p className="text-[7px] text-neutral-400">
                    <Star size={7} className="mr-0.5 inline text-[#ff5a1f]" />
                    4.6 (100) Rides
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#ff5a1f] px-2 py-1 text-[7px] font-bold text-black">
                SMz4U
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-[10px] font-bold">PKR 2500</p>
              <p className="text-[9px]">12 min</p>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-neutral-100 py-2 text-center text-[8px] font-semibold">
                Decline
              </div>
              <div className="rounded-lg bg-[#ff5a1f] py-2 text-center text-[8px] font-semibold text-black">
                Accept
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RideScreenShowcase() {
  return (
    <section
      id="screen-showcase"
      className="bg-background px-5 py-24 text-foreground transition-colors duration-300 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[920px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-10 max-w-[430px] sm:mb-12"
        >
          <p className="mb-4 text-[10px] font-medium tracking-[0.24em] text-[#ff5a1f]">
            05 — UI SHOWCASE
          </p>

          <h2 className="font-display text-[39px] font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl">
            Every screen,
            <br />
            considered.
          </h2>
        </motion.div>

        {/* Main featured screen */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[24px] bg-[#080809] px-5 pb-8 pt-8 text-white sm:px-8 sm:pt-9"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-100px] size-[420px] -translate-x-1/2 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(255,90,31,0.35), transparent 68%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <PhoneMockup type="account" large />

            <div className="mt-5 text-center">
              <h3 className="font-display text-[14px] font-semibold">
                Home · Live Offers
              </h3>
              <p className="mt-1 text-[10px] text-white/45">
                Map-first, offers surface in real time
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three screen cards */}
        <div className="mt-3 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {screens.map((screen, index) => (
            <motion.article
              key={screen.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[22px] border border-border bg-[var(--surface)] px-3 pb-5 pt-5 shadow-[0_12px_28px_rgba(0,0,0,0.07)] transition-transform duration-300 hover:-translate-y-1 sm:px-4 sm:pt-6"
            >
              <PhoneMockup type={screen.type} />

              <div className="mt-4 text-center">
                <h3 className="font-display text-[12px] font-semibold text-foreground">
                  {screen.title}
                </h3>
                <p className="mt-1 text-[9px] text-muted-foreground">
                  {screen.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Zoomed detail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-3 grid overflow-hidden rounded-[22px] border border-border bg-[var(--surface)] shadow-[0_14px_35px_rgba(0,0,0,0.08)] md:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-7 sm:p-8">
            <p className="text-[9px] font-medium tracking-[0.2em] text-[#ff5a1f]">
              ZOOMED DETAIL
            </p>

            <h3 className="font-display mt-5 text-[25px] font-bold leading-tight tracking-tight text-foreground sm:text-[29px]">
              Fare control,
              <br />
              up close.
            </h3>

            <p className="mt-3 max-w-[270px] text-[11px] leading-[1.8] text-muted-foreground">
              Riders nudge the fare in clear +5 / −5 steps and choose a
              payment method inline.
            </p>
          </div>

          <div className="min-h-[200px]">
            <OfferPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
