import { LinkedInHero } from "@/components/services/linkedin/hero";
import { ThreeStandouts } from "@/components/services/linkedin/three-standouts";
import { BeforeAfter } from "@/components/services/linkedin/before-after";
import { BannerRhythm } from "@/components/services/linkedin/banner-gallery";
import { ContactSheet } from "@/components/services/linkedin/all-profiles";
import { Navbar } from "@/components/layout/navbar";

export default function LinkedInProfileOptimizationPage() {
  return (
    <main>
         <Navbar />
      <LinkedInHero />
      <ThreeStandouts />
      <BeforeAfter />
      <BannerRhythm />
      <ContactSheet />
    </main>
  );
}