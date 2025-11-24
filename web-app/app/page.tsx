import { DnaBackground } from "@/components/background/DnaBackground";
import {
  Hero,
  Tension,
  Secrets,
  SocialProof,
  Authority,
  Footer,
  ExitIntentPopup,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen relative text-foreground selection:bg-opus-cyan/30 selection:text-opus-cyan">
      <DnaBackground />

      <Hero />
      <Tension />
      <Secrets />
      <SocialProof />
      <Authority />
      <Footer />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </main>
  );
}
