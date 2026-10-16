
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function WhoWeAre() {
  return (
    <section className="bg-background px-4 pb-5 text-foreground transition-colors duration-300 lg:px-8">
      <div className="mx-auto max-w-[1400px] rounded-3xl border border-border bg-[var(--surface)] px-5 py-16 transition-colors duration-300 sm:px-10 lg:py-20">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm text-[#ff5a1f]">Who We Are</p>

          <h2 className="font-display mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Epic Beginnings: Unveiling Our Essence, Crafting Futures with
            Excellence.
          </h2>
        </motion.div>

        {/* Image and description */}
        <div className="mx-auto mt-10 grid max-w-[1000px] items-center gap-8 md:grid-cols-2 md:gap-10 lg:mt-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-[var(--surface-raised)]"
          >
            <Image
              src="/images/who-we-are.png"
              alt="Our team working together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-xl font-medium leading-snug tracking-tight text-foreground sm:text-[22px]">
              Empowering Progress: Our Story, Your Journey, Shared Excellence.
            </h3>

            <p className="mt-7 max-w-md text-[13px] leading-6 text-muted-foreground">
              Embark on a journey through our narrative, where innovation
              meets purpose.
            </p>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames.
              Blandit et purus mollis convallis malesuada egestas risus quam
              enim. Semper lorem rhoncus et felis tristique tellus volutpat
              orci. Dui elementum a sed.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-medium text-foreground transition hover:border-[#ff5a1f]/50 hover:bg-muted"
            >
              Who We Are
              <ArrowRight className="size-3.5 text-[#ff5a1f] transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
