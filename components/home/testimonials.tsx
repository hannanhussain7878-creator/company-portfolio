"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Tab = "individuals" | "businesses";

const testimonials: Record<Tab, { quote: string; name: string }[]> = {
  individuals: [
    {
      quote:
        "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
      name: "Sara T",
    },
    {
      quote:
        "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
      name: "John D",
    },
    {
      quote:
        "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
      name: "Emily G",
    },
  ],
  businesses: [
    {
      quote:
        "Moving our onboarding flow to a single studio cut our handoff time in half. Design and engineering finally speak the same language.",
      name: "Daniel R",
    },
    {
      quote:
        "From the first Figma file to a production release in weeks. The team shipped fast, measured results and handed everything over cleanly.",
      name: "Priya K",
    },
    {
      quote:
        "The AI assistant they built now handles most of our support volume. It paid for itself within a quarter.",
      name: "Marcus L",
    },
    
  ],
};

export function Testimonials() {
  const [tab, setTab] = useState<Tab>("individuals");
  const [active, setActive] = useState(1);

  const items = testimonials[tab];
  const count = items.length;
  const prev = (active - 1 + count) % count;
  const next = (active + 1) % count;

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + count) % count);

  const switchTab = (t: Tab) => {
    setTab(t);
    setActive(1);
  };

  const visible = [
    { i: prev, side: true },
    { i: active, side: false },
    { i: next, side: true },
  ];

  return (
    <section className="px-5 py-1 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-350">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-sm text-[#ff4d00]">Client Words</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Outcomes, <span className="text-neutral-500">in their words</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[11px] leading-4 text-neutral-400">
            Discover how our clients have transformed their products with
            innovative digital solutions and a team that ships. See why they
            trust us for a secure and prosperous journey.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center ">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/2 p-1.5">
            {(
              [
                ["individuals", "For Individuals"],
                ["businesses", "For Businesses"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => switchTab(key)}
                className={`rounded-full px-4 py-2 text-[11px] font-medium transition ${
                  tab === key
                    ? "bg-[#ff4d00] text-white"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#0b0b0d] text-[#ff4d00] transition hover:border-[#ff4d00]/50 md:-left-2"
          >
            <ArrowLeft className="size-3.5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#0b0b0d] text-[#ff4d00] transition hover:border-[#ff4d00]/50 md:-right-2"
          >
            <ArrowRight className="size-3.5" />
          </button>

          <div className="mx-auto grid max-w-310 gap-0 rounded-2xl bg-[#0d0d10] py-10 md:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map(({ i, side }, pos) => {
                const item = items[i];
                return (
                  <motion.figure
                    key={`${tab}-${i}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: side ? 0.3 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`flex flex-col items-center px-8 text-center ${
                      side ? "hidden md:flex" : "flex"
                    }`}
                    style={{ order: pos }}
                  >
                    <div className="flex w-full items-center gap-4">
                      <span className="h-px flex-1 bg-white/10" />
                      <Quote className="size-9 rotate-180 fill-[#c93a0a] text-[#c93a0a]" />
                      <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <blockquote className="mt-8 min-h-[120px] text-[12px] leading-[1.6] text-white">
                      {item.quote}
                    </blockquote>

                    <figcaption className="mt-8 text-[11px] font-semibold text-[#ff4d00]">
                      {item.name}
                    </figcaption>
                  </motion.figure>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}