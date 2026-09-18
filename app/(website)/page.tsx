import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { Hero } from "@/components/home/hero";
import { LogoStrip } from "@/components/home/logo-strip";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { FeaturedWork } from "@/components/home/featured-work";
import { FounderStrip } from "@/components/home/founder-strip";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCTA } from "@/components/home/home-cta";

import { SmoothScroll } from "@/components/ui/smooth-scroll";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />

      <Navbar />

      <main>
        <Hero />

        <LogoStrip />

        <Services />

        <Process />

        <FeaturedWork />

        <FounderStrip />

        <Testimonials />

        <HomeCTA />
      </main>

      <Footer />
    </>
  );
}