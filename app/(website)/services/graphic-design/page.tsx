import { BeautyCampaign } from "@/components/services/graphic-design/beauty-campaign";
import { BliskoShowcase } from "@/components/services/graphic-design/blisko-showcase";
import { ChimeCampaignShowcase } from "@/components/services/graphic-design/chime-campaign-showcase";
import { GraphicDesignGallery } from "@/components/services/graphic-design/graphic-design-gallery";
import { GraphicDesignHero } from "@/components/services/graphic-design/graphic-design-hero";
import { InteriorDesignShowcase } from "@/components/services/graphic-design/interior-design-showcase";
import { LoofahCampaign } from "@/components/services/graphic-design/loofah-campaign";
import { LuxoraShowcase } from "@/components/services/graphic-design/luxora-showcase";
import { NesofyCampaign} from "@/components/services/graphic-design/nesofy-campaign";
import { PencilSharpenerCampaign } from "@/components/services/graphic-design/pencil-sharpener-campaign";
import { PickleballShowcase } from "@/components/services/graphic-design/pickleball-showcase";
import { WipeoutXCampaign } from "@/components/services/graphic-design/ProductShowcase";
import { SevanosCampaign } from "@/components/services/graphic-design/sev anos-campaign";
import { ShowerSteamerCampaign } from "@/components/services/graphic-design/shower-steamer-campaign";
import { SnuffleMatCampaign } from "@/components/services/graphic-design/snuffle-mat-campaign";
import { ThankYou } from "@/components/services/graphic-design/thank-you";



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
     <WipeoutXCampaign/>
     <BeautyCampaign/>
     <NesofyCampaign/>
     <PencilSharpenerCampaign/>
     <SevanosCampaign/>
     <SnuffleMatCampaign/>
     <ShowerSteamerCampaign/>
     <LoofahCampaign />
     <ThankYou />
      {/* Add the remaining portfolio sections here */}
    </main>
  );
}