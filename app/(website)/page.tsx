import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { Hero } from "@/components/home/hero";

import { Services } from "@/components/home/services";

import { FeaturedWork } from "@/components/home/featured-work";

import { Testimonials } from "@/components/home/testimonials";
import { HomeCTA } from "@/components/home/home-cta";

import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { WhoWeAre } from "@/components/home/who-we-are";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />

      <Navbar />

      <main>
        <Hero />

        <WhoWeAre />

        <Services />

        <FeaturedWork />

        <Testimonials />

        <HomeCTA />
      </main>

      <Footer />
    </>
  );
}
