import { BliskoShowcase } from "@/components/services/graphic-design/blisko-showcase";
import { ChimeCampaignShowcase } from "@/components/services/graphic-design/chime-campaign-showcase";
import { GraphicDesignGallery } from "@/components/services/graphic-design/graphic-design-gallery";
import { GraphicDesignHero } from "@/components/services/graphic-design/graphic-design-hero";
import { InteriorDesignShowcase } from "@/components/services/graphic-design/interior-design-showcase";
import { LuxoraShowcase } from "@/components/services/graphic-design/luxora-showcase";
import { PickleballShowcase } from "@/components/services/graphic-design/pickleball-showcase";


export default function GraphicDesignPage() {
  return (
    <main>
      <GraphicDesignHero />
       <GraphicDesignGallery />
     <ChimeCampaignShowcase />
     <InteriorDesignShowcase />
     <LuxoraShowcase/>
     <BliskoShowcase/>
     <PickleballShowcase/>
      {/* Add the remaining portfolio sections here */}
    </main>
  );
}