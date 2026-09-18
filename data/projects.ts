import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ledgerline",
    title: "Ledgerline",
    client: "Ledgerline · B2B Fintech",
    category: "Web Development",
    description:
      "A focused financial dashboard designed around clarity, speed, and decision making.",
    image: "/images/projects/ledgerline.webp",
    tags: ["UI/UX Design", "Web Development"],
  },
  {
    id: "kite-health",
    title: "Kite Health",
    client: "Kite Health · Healthtech",
    category: "App Development",
    description:
      "A mobile-first health experience designed to make complex information easier to understand.",
    image: "/images/projects/kite-health.webp",
    tags: ["App Development", "UI/UX Design"],
  },
  {
    id: "orbit",
    title: "Orbit Ops Copilot",
    client: "Orbit Logistics · Logistics",
    category: "AI Solutions",
    description:
      "An AI-assisted operations interface connecting workflows, information, and decisions.",
    image: "/images/projects/orbit.webp",
    tags: ["AI Solutions"],
  },
];