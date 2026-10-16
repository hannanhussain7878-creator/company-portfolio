"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Service = {
  title: string;
  description: string;
  cards: { label: string; image: string }[];
};

const services: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "We craft intuitive and engaging user experiences. From wireframes to high-fidelity prototypes, we focus on user-centered design that drives conversion and satisfaction.",
    cards: [
      { label: "User Research", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop" },
      { label: "Wireframing", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop" },
      { label: "Prototyping", image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800&auto=format&fit=crop" },
      { label: "Usability Testing", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    title: "Graphic Design",
    description:
      "Visual storytelling that elevates your brand. We create compelling graphics, branding materials, and marketing assets that leave a lasting impression.",
    cards: [
      { label: "Brand Identity", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop" },
      { label: "Marketing Collateral", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" },
      { label: "Social Media Graphics", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
      { label: "Illustration", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend. Cursus erat mattis fames et mollis risus at.",
    cards: [
      { label: "Artificial Intelligence", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" },
      { label: "Front-End Development", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop" },
      { label: "Dedicated Developer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
      { label: "Mobile App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications built for performance. We handle everything from concept to App Store deployment.",
    cards: [
      { label: "iOS Development", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop" },
      { label: "Android Development", image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop" },
      { label: "Cross-Platform", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop" },
      { label: "API Integration", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins tailored to your business needs. We build fast, secure, and easy-to-manage websites.",
    cards: [
      { label: "Custom Themes", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop" },
      { label: "Plugin Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
      { label: "E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" },
      { label: "Performance Tuning", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    title: "AI Solutions & Automation",
    description:
      "Leverage the power of AI to streamline operations. We build custom chatbots, automate workflows, and integrate intelligent systems.",
    cards: [
      { label: "Chatbots", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop" },
      { label: "Workflow Automation", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop" },
      { label: "Data Analysis", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { label: "Machine Learning", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    title: "LinkedIn Profile & Content Optimization",
    description:
      "Position yourself as an industry leader. We optimize your profile and create engaging content to grow your professional network.",
    cards: [
      { label: "Profile Optimization", image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=800&auto=format&fit=crop" },
      { label: "Content Strategy", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
      { label: "Lead Generation", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" },
      { label: "Network Growth", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(2);

  return (
    <section className="px-5 py-2 lg:px-8 lg:py-5">
      <div className="mx-auto relative overflow-hidden max-w-350 rounded-3xl bg-[#0c0c0e] px-5 py-16 sm:px-10 lg:py-20">
        {/* Orange glow, bottom right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 z-10 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,77,0,0.22) 0%, rgba(255,77,0,0.08) 40%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-300">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <p className="text-xs text-[#ff5a1f]">Our Services</p>
            <h2 className="font-display mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Your Aspiration, Our Expertise: Tailored Services for Unmatched
              Excellence.
            </h2>
          </motion.div>

          <ul className="mt-12">
            {services.map((service, i) => {
              const isOpen = open === i;
              const number = String(i + 1).padStart(2, "0");

              return (
                <li
                  key={service.title}
                  className="border-b border-white/10 first:border-t-0 last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center gap-6 py-5 text-left"
                  >
                    <span className="w-10 shrink-0 font-display text-xl text-white">
                      {number}
                    </span>
                    <span className="flex-1 font-display text-xl font-medium uppercase tracking-wide text-white">
                      {service.title}
                    </span>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/30 text-white transition group-hover:border-white/60 group-hover:bg-white/10">
                      {isOpen ? (
                        <ArrowUpRight className="size-3.5" />
                      ) : (
                        <ArrowRight className="size-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6">
                          <p className="border-l border-white/25 pl-2 text-[10px] leading-4 text-neutral-400">
                            {service.description}
                          </p>

                          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {service.cards.map((card) => (
                              <div
                                key={card.label}
                                className="relative aspect-[4/3] overflow-hidden rounded-[3px]"
                              >
                                <Image
                                  src={card.image}
                                  alt={card.label}
                                  fill
                                  className="object-cover"
                                  unoptimized // Added to ensure external Unsplash URLs load without next.config.js changes
                                />
                                <div className="absolute inset-0 bg-black/55" />
                                <span className="absolute inset-0 grid place-items-center px-6 text-center text-[11px] leading-4 text-white">
                                  {card.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}