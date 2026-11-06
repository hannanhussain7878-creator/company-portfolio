import { GBRideHero } from "@/components/case-studies/gb-ride/hero";
import { RideOverview } from "@/components/case-studies/gb-ride/overview";
import { RideBrandIdentity } from "@/components/case-studies/gb-ride/brand-identity";
import { RideDesignProcess } from "@/components/case-studies/gb-ride/design-process";
import { RideDesignSystem } from "@/components/case-studies/gb-ride/design-system";
import { RideScreenShowcase } from "@/components/case-studies/gb-ride/screen-showcase";
import { RideFeatureHighlights } from "@/components/case-studies/gb-ride/feature-highlights";
import { RideInteractionDesign } from "@/components/case-studies/gb-ride/interaction-design";

export default function GBRidePage() {
  return (
    <main>
      <GBRideHero />
      <RideOverview />
      <RideBrandIdentity />
      <RideDesignProcess />
      <RideDesignSystem />
      <RideScreenShowcase />
      <RideFeatureHighlights />
      <RideInteractionDesign />
    </main>
  );
}
