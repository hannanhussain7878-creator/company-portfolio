import type { Service } from "@/types/service";
import {
  PenToolIcon,
  LayoutDashboardIcon,
  CodeIcon,
  SmartphoneIcon,
  SparklesIcon,
  GlobeIcon,


} from 'lucide-react'
import { LuLinkedin } from "react-icons/lu";

export const services: Service[] = [
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    icon: LayoutDashboardIcon,
    tagline: 'Interfaces that convert',
    description:
      'UI/UX Design for web and mobile products — research-backed flows, design systems, and high-fidelity interfaces built to lift conversion, not just look good in a case study.',
    deliverables: ['Product & flow audits', 'Design systems in Figma', 'Prototypes ready for dev'],
    span: 'lg:col-span-4',
    featured: true,
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    icon: PenToolIcon,
    tagline: 'Identity with a spine',
    description:
      'Graphic Design and brand identity — logos, type systems, decks, and campaign assets that hold up across every surface you ship on.',
    deliverables: ['Logo & identity systems', 'Pitch decks', 'Social & ad creative'],
    span: 'lg:col-span-2',
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    icon: CodeIcon,
    tagline: 'Figma to production',
    description:
      'Web Development in React and TypeScript — fast, accessible, SEO-ready marketing sites and web apps, shipped in weeks instead of quarters.',
    deliverables: ['React / TypeScript builds', 'Headless CMS', 'Core Web Vitals tuning'],
    span: 'lg:col-span-2',
  },
  {
    slug: 'app-development',
    name: 'App Development',
    icon: SmartphoneIcon,
    tagline: 'iOS, Android, one codebase',
    description:
      'App Development for iOS and Android — cross-platform products with native-feeling motion, offline states, and release pipelines we hand over documented.',
    deliverables: ['React Native apps', 'Store submission', 'Analytics & crash reporting'],
    span: 'lg:col-span-2',
  },
  {
    slug: 'wordpress-development',
    name: 'WordPress Development',
    icon: GlobeIcon,
    tagline: 'Custom, not a template',
    description:
      'WordPress Development with custom themes and blocks — editorial control your marketing team can actually use, without a plugin graveyard slowing the site down.',
    deliverables: ['Custom themes & blocks', 'WooCommerce', 'Migrations & speed work'],
    span: 'lg:col-span-2',
  },
  {
    slug: 'ai-solutions',
    name: 'AI Solutions & Automation',
    icon: SparklesIcon,
    tagline: 'Automate the busywork',
    description:
      'AI Solutions & Automation — retrieval-backed assistants, internal copilots, and workflow automation wired into the tools your team already runs on. We scope for measurable hours saved, then build it.',
    deliverables: ['RAG assistants & chat', 'Workflow automation', 'Model evaluation & guardrails'],
    span: 'lg:col-span-4',
    featured: true,
  },
  {
    slug: 'linkedin-optimization',
    name: 'LinkedIn Profile & Content Optimization',
    icon: LuLinkedin,
    tagline: 'Founder-led demand',
    description:
      'LinkedIn Profile & Content Optimization — positioning, profile rewrites, and a content engine that turns founder posts into a repeatable inbound pipeline.',
    deliverables: ['Profile & positioning rewrite', 'Content calendars', 'Ghostwritten posts'],
    span: 'lg:col-span-2',
  },
]