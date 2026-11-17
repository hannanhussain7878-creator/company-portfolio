
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ThankYou() {
  return (
    <section
      id="thank-you"
      className="relative isolate flex min-h-[620px] items-center justify-center overflow-hidden bg-background px-5 py-24 text-foreground transition-colors duration-300 sm:min-h-[700px] lg:min-h-[780px]"
    >
      {/* Spotlight background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-30%] h-[550px] w-[650px] -translate-x-1/2 rounded-full bg-foreground/[0.08] blur-[110px]" />

        <div className="absolute bottom-[-30%] left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#ff5a1f]/[0.07] blur-[120px]" />

        {/* Subtle spotlight beam */}
        <div
          className="absolute left-1/2 top-0 h-[75%] w-[55%] -translate-x-1/2 opacity-[0.045]"
          style={{
            background:
              "linear-gradient(180deg, var(--foreground), transparent)",
            clipPath: "polygon(38% 0, 62% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Grain-like grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(var(--foreground) 0.7px, transparent 0.7px)",
            backgroundSize: "5px 5px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1150px] text-center">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#ff5a1f]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Quadra Studio · Creative Portfolio
          </span>

          <span className="h-px w-8 bg-[#ff5a1f]" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display text-[clamp(3.2rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-foreground"
        >
          Thanks
          <br />
          You For
          <br />
          <span className="relative inline-block">
            Watching
            <span className="absolute -bottom-2 left-0 h-[5px] w-full origin-left scale-x-0 rounded-full bg-[#ff5a1f] transition-transform duration-700 group-hover:scale-x-100" />
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-9 max-w-md text-sm leading-7 text-muted-foreground sm:text-base"
        >
          Every great idea starts with a conversation.
          Thank you for exploring our creative work.
        </motion.p>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#ff5a1f] px-6 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e94c1b] hover:shadow-[0_10px_35px_rgba(255,90,31,0.25)]"
          >
            Let&apos;s Work Together
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Footer detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-3"
        >
          <span className="size-1.5 rounded-full bg-[#ff5a1f]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            End of Presentation · Start of Something New
          </span>
        </motion.div>
      </div>
    </section>
  );
}
