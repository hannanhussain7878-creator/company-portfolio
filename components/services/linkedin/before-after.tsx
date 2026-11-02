"use client";

import { ArrowRight, BadgeCheck, MessageSquare, Users } from "lucide-react";
import { motion } from "motion/react";

type BannerColor = "orange" | "green" | "blue" | "pink" | "purple";

type Profile = {
  number: string;
  name: string;
  role: string;
  category: string;
  initials: string;
  avatarColor: string;
  beforeHeadline: string;
  beforeRole: string;
  afterHeadline: string;
  bannerColor: BannerColor;
};

const profiles: Profile[] = [
  {
    number: "01",
    name: "Alex Chen",
    role: "Founder & CEO",
    category: "SaaS",
    initials: "AC",
    avatarColor: "bg-[#92715f]",
    beforeHeadline: "CEO at a company",
    beforeRole: "Founder & CEO",
    afterHeadline: "Building the future of work · SaaS · AI",
    bannerColor: "orange",
  },
  {
    number: "02",
    name: "Maria Santos",
    role: "Marketing Director",
    category: "E-commerce",
    initials: "MS",
    avatarColor: "bg-[#9c7055]",
    beforeHeadline: "Marketing professional",
    beforeRole: "Marketing Director",
    afterHeadline: "Scaling DTC brands from 0 to 8 figures",
    bannerColor: "orange",
  },
  {
    number: "03",
    name: "James Okafor",
    role: "Software Developer",
    category: "Tech",
    initials: "JO",
    avatarColor: "bg-[#76543e]",
    beforeHeadline: "Full-stack Developer",
    beforeRole: "Software Developer",
    afterHeadline: "Shipping resilient backends · Fintech · Go",
    bannerColor: "green",
  },
  {
    number: "04",
    name: "Sofia Rizvi",
    role: "Product Manager",
    category: "Product",
    initials: "SR",
    avatarColor: "bg-[#a77c64]",
    beforeHeadline: "Product Analyst",
    beforeRole: "Associate PM",
    afterHeadline: "Driving product growth with data",
    bannerColor: "purple",
  },
  {
    number: "05",
    name: "David Kim",
    role: "AI Engineer",
    category: "AI",
    initials: "DK",
    avatarColor: "bg-[#6d594b]",
    beforeHeadline: "Looking for opportunities",
    beforeRole: "AI Enthusiast",
    afterHeadline: "AI for real-world impact · Research · Products",
    bannerColor: "blue",
  },
  {
    number: "06",
    name: "Priya Nair",
    role: "Data Scientist",
    category: "AI",
    initials: "PN",
    avatarColor: "bg-[#956b52]",
    beforeHeadline: "Freelancer",
    beforeRole: "Data Analyst",
    afterHeadline: "Turning messy data into decisions",
    bannerColor: "pink",
  },
];

const bannerStyles: Record<BannerColor, string> = {
  orange: "from-[#ffb28e] via-[#ffddc9] to-[#fff0e6]",
  green: "from-[#b7e6d4] via-[#d8f2e8] to-[#effaf5]",
  blue: "from-[#b7d1ff] via-[#dce8ff] to-[#eef3ff]",
  pink: "from-[#f7bdd5] via-[#ffe0ec] to-[#fff0f5]",
  purple: "from-[#d4bcf7] via-[#e8dcfb] to-[#f5effe]",
};

function StatusLabel({ after }: { after: boolean }) {
  return (
    <span
      className={`inline-flex h-[22px] w-fit items-center rounded-full px-3 text-[10px] font-medium ${
        after
          ? "bg-[#ff5a1f]/10 text-[#ff5a1f]"
          : "bg-[var(--surface-raised)] text-muted-foreground"
      }`}
    >
      {after ? "After" : "Before"}
    </span>
  );
}

function ProfileBanner({
  profile,
  after,
}: {
  profile: Profile;
  after: boolean;
}) {
  return (
    <div
      className={`relative h-[84px] shrink-0 overflow-hidden sm:h-[96px] ${
        after
          ? `bg-gradient-to-br ${bannerStyles[profile.bannerColor]}`
          : "bg-gradient-to-br from-[#e8e9eb] via-[#f2f2f3] to-[#dedfe2]"
      }`}
    >
      {after && (
        <>
          <svg
            viewBox="0 0 400 110"
            preserveAspectRatio="none"
            className="absolute inset-0 size-full opacity-60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M-20 75 L70 30 L150 70 L250 15 L330 65 L420 20"
              stroke="#ffffff"
              strokeWidth="1.4"
            />
            <path
              d="M-20 100 L90 58 L180 94 L290 48 L420 88"
              stroke="#ffffff"
              strokeWidth="1"
            />
            <path
              d="M50 15 L130 55 L220 25 L330 72"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            <circle cx="150" cy="70" r="2.5" fill="#ffffff" />
            <circle cx="250" cy="15" r="2.5" fill="#ffffff" />
            <circle cx="330" cy="65" r="2.5" fill="#ffffff" />
          </svg>

          <div className="absolute left-4 top-3.5 z-10">
            <p className="text-[11px] font-bold leading-tight text-[#452517]">
              {profile.name}
            </p>
            <p className="mt-0.5 text-[9px] leading-tight text-[#79513d]">
              {profile.role}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function ProfileAvatar({ profile }: { profile: Profile }) {
  return (
    <div
      className={`grid size-12 shrink-0 place-items-center rounded-full border-[3px] border-[var(--surface)] text-[11px] font-bold text-white ${profile.avatarColor}`}
    >
      {profile.initials}
    </div>
  );
}

function ProfilePreview({
  profile,
  after,
}: {
  profile: Profile;
  after: boolean;
}) {
  return (
    <div
      className={`flex w-full min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-[var(--surface)] shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-300 ${
        after ? "hover:-translate-y-1 hover:shadow-xl" : ""
      }`}
    >
      <ProfileBanner profile={profile} after={after} />

      <div className="flex flex-1 flex-col px-4 pb-4">
        <div className="-mt-6">
          <ProfileAvatar profile={profile} />
        </div>

        <div className="mt-2">
          <p
            className={`flex items-center gap-1.5 text-[13px] font-bold leading-tight ${
              after ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {profile.name}
            {after && (
              <BadgeCheck className="size-3.5 shrink-0 text-[#ff5a1f]" />
            )}
          </p>

          <p
            className={`mt-1 text-[11px] leading-4 ${
              after ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {after ? profile.afterHeadline : profile.beforeHeadline}
          </p>

          <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground">
            {after ? profile.role : profile.beforeRole}
          </p>
        </div>

        {/* mt-auto pins buttons to the bottom so both cards line up */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-medium text-white ${
              after ? "bg-[#ff5a1f]" : "bg-[#858b94]"
            }`}
          >
            <Users className="size-3" />
            Connect
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[10px] text-muted-foreground">
            <MessageSquare className="size-3" />
            Message
          </span>
        </div>
      </div>
    </div>
  );
}

function ComparisonRow({
  profile,
  reverse,
  index,
}: {
  profile: Profile;
  reverse: boolean;
  index: number;
}) {
  /*
   * Every grid item gets an EXPLICIT row + column at each breakpoint.
   * Without explicit rows, items placed at a column behind the auto-placement
   * cursor (e.g. identity in column 5) wrap onto a new row — that was the
   * cause of the misaligned 02 / 04 / 06 rows.
   *
   *  mobile : 1 column  → identity, before, arrow, after (DOM order)
   *  md     : 3 columns → identity on top, cards + arrow below
   *  lg     : 5 columns → identity | card | arrow | card | identity
   */
  const beforePos = reverse
    ? "md:col-[3] md:row-start-2 lg:col-[4] lg:row-start-1"
    : "md:col-[1] md:row-start-2 lg:col-[2] lg:row-start-1";

  const afterPos = reverse
    ? "md:col-[1] md:row-start-2 lg:col-[2] lg:row-start-1"
    : "md:col-[3] md:row-start-2 lg:col-[4] lg:row-start-1";

  const identityPos = reverse ? "lg:col-[5]" : "lg:col-[1]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.08 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] md:items-center md:gap-x-4 md:gap-y-6 lg:grid-cols-[160px_minmax(0,1fr)_44px_minmax(0,1fr)_160px] lg:gap-x-5 lg:gap-y-0"
    >
      {/* Identity */}
      <div
        className={`min-w-0 md:col-[1/-1] md:row-start-1 lg:row-start-1 lg:pt-[30px] ${identityPos}`}
      >
        <p className="mb-1.5 text-[11px] font-semibold text-[#ff5a1f]">
          {profile.number}
        </p>

        <h3 className="text-xl font-bold leading-tight text-foreground lg:text-[22px]">
          {profile.name}
        </h3>

        <p className="mt-1.5 text-[11px] leading-4 text-muted-foreground">
          {profile.category} · Profile redesign
        </p>
      </div>

      {/* Before card */}
      <div
        className={`flex min-w-0 flex-col gap-2 md:self-stretch ${beforePos}`}
      >
        <StatusLabel after={false} />
        <ProfilePreview profile={profile} after={false} />
      </div>

      {/* Arrow — points down on mobile, right on md+ */}
      <div
        className={`flex justify-center md:col-[2] md:row-start-2 md:pt-[30px] lg:col-[3] lg:row-start-1`}
      >
        <div className="grid size-9 rotate-90 place-items-center rounded-full border border-border bg-[var(--surface)] text-[#ff5a1f] shadow-[0_5px_18px_rgba(0,0,0,0.07)] md:rotate-0">
          <ArrowRight className="size-4" />
        </div>
      </div>

      {/* After card */}
      <div
        className={`flex min-w-0 flex-col gap-2 md:self-stretch ${afterPos}`}
      >
        <StatusLabel after />
        <ProfilePreview profile={profile} after />
      </div>
    </motion.div>
  );
}

export function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="relative isolate overflow-hidden bg-background px-5 py-20 text-foreground transition-colors duration-300 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Subtle brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 35% 30% at 0% 10%, rgba(255,90,31,0.055), transparent 75%),
            radial-gradient(ellipse 35% 35% at 100% 90%, rgba(255,90,31,0.06), transparent 75%)
          `,
        }}
      />

      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4 sm:mb-20"
        >
          <div>
            <p className="mb-3 text-[10px] font-medium tracking-wide text-[#ff5a1f]">
              PROFILE TRANSFORMATIONS
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              Before. After.
            </h2>
          </div>

          <p className="pb-1 text-[11px] text-muted-foreground">
            Six close-ups
          </p>
        </motion.div>

        {/* Six profile comparisons */}
        <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
          {profiles.map((profile, index) => (
            <ComparisonRow
              key={profile.number}
              profile={profile}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}