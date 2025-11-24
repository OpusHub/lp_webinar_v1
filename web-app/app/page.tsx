import { DnaBackground } from "@/components/background/DnaBackground";
import {
  Hero,
  Tension,
  TargetAudience,
  LearningModules,
  SocialProof,
  Authority,
  EventDetails,
  Guarantees,
  Urgency,
  Footer,
  ExitIntentPopup,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen relative text-foreground selection:bg-opus-cyan/30 selection:text-opus-cyan">
      <DnaBackground />

      <Hero />
      <Tension />
      <TargetAudience />
      <LearningModules />
      <SocialProof />
      <Authority />
      <EventDetails />
      <Guarantees />
      <Urgency />
      <Footer />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </main>
  );
}
