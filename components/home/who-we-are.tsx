"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function WhoWeAre() {
  return (
    <section className="px-4 pb-5 lg:px-8">
      <div className="mx-auto max-w-350 rounded-3xl bg-[#0c0c0e] px-5 py-16 sm:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm text-[#ff5a1f]">Who We Are</p>
          <h2 className="font-display mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Epic Beginnings: Unveiling Our Essence, Crafting Futures with
            Excellence.
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-250 items-center gap-8 md:grid-cols-2 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src="/images/who-we-are.png"
              alt="Our team working together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-light leading-snug text-white sm:text-[22px]">
              Empowering Progress: Our Story, Your Journey, Shared Excellence.
            </h3>

            <p className="mt-7 max-w-70 text-[13px] leading-5 text-neutral-300">
              Embark on a journey through our narrative, where innovation meets
              purpose.
            </p>

            <p className="mt-4 max-w-70 text-[13px] leading-5 text-neutral-300">
              Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames.
              Blandit et purus mollis convallis malesuada egestas risus quam
              enim. Semper lorem rhoncus et felis tristique tellus volutpat
              orci. Dui elementum a sed.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-xs text-white transition hover:bg-white/10"
            >
              Who We Are
              <ArrowRight className="size-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}