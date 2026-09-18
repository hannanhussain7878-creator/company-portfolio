import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "uiux",
    title: "UI/UX Design",
    eyebrow: "Interfaces that convert",
    description:
      "UX/UI systems built around real user needs, from discovery and wireframes to polished interfaces that feel clear, fast, and intentional.",
    icon: "✣",
    tags: ["Product UX", "Design systems", "Prototypes"],
    featured: true,
  },
  {
    id: "graphic",
    title: "Graphic Design",
    eyebrow: "Identity with a point",
    description:
      "Graphic systems that create recognition across campaigns, social, presentations, packaging, and digital experiences.",
    icon: "✦",
    tags: ["Brand identity", "Campaigns"],
  },
  {
    id: "web",
    title: "Web Development",
    eyebrow: "From pixels to production",
    description:
      "Modern websites and web platforms engineered for performance, accessibility, scalability, and long-term maintainability.",
    icon: "</>",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    id: "app",
    title: "App Development",
    eyebrow: "Web, native, and connected",
    description:
      "Mobile and web applications designed around real workflows and developed with production-ready architecture.",
    icon: "▯",
    tags: ["Mobile", "Web apps"],
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    eyebrow: "Custom, not template",
    description:
      "Flexible WordPress experiences built around your content, brand, and business requirements rather than generic themes.",
    icon: "◉",
    tags: ["Custom themes", "CMS"],
  },
  {
    id: "ai",
    title: "AI Solutions & Automation",
    eyebrow: "Automation that works",
    description:
      "AI-powered workflows, intelligent assistants, integrations, and automation that remove repetitive work from your business.",
    icon: "⌁",
    tags: ["AI agents", "Automation", "Integrations"],
    featured: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile & Content Optimization",
    eyebrow: "Founders who get noticed",
    description:
      "Positioning and content systems designed to communicate expertise clearly and consistently across LinkedIn.",
    icon: "in",
    tags: ["Positioning", "Content"],
  },
];