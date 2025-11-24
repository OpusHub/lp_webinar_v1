import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

// Lazy load heavy components
const DnaBackground = dynamic(() => import("@/components/background/DnaBackground").then(mod => mod.DnaBackground));

// Lazy load below-fold sections to improve initial bundle size and TBT
const Tension = dynamic(() => import("@/components/sections/Tension").then(mod => mod.Tension));
const TargetAudience = dynamic(() => import("@/components/sections/TargetAudience").then(mod => mod.TargetAudience));
const LearningModules = dynamic(() => import("@/components/sections/LearningModules").then(mod => mod.LearningModules));
const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then(mod => mod.SocialProof));
const Authority = dynamic(() => import("@/components/sections/Authority").then(mod => mod.Authority));
const EventDetails = dynamic(() => import("@/components/sections/EventDetails").then(mod => mod.EventDetails));
const Guarantees = dynamic(() => import("@/components/sections/Guarantees").then(mod => mod.Guarantees));
const Urgency = dynamic(() => import("@/components/sections/Urgency").then(mod => mod.Urgency));
const Footer = dynamic(() => import("@/components/sections/Footer").then(mod => mod.Footer));
const ExitIntentPopup = dynamic(() => import("@/components/sections/ExitIntentPopup").then(mod => mod.ExitIntentPopup));

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
