import { DnaBackground } from "@/components/background/DnaBackground";
import {
  Hero,
  Tension,
  Secrets,
  SocialProof,
  Authority,
  Footer,
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
    </main>
  );
}
