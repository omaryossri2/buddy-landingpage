import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ManifestoStrip } from '@/components/ManifestoStrip';
import { Features } from '@/components/Features';
import { AIMoments } from '@/components/AIMoments';
import { HowItWorks } from '@/components/HowItWorks';
import { FoundersNote } from '@/components/FoundersNote';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { L } from '@/lib/tokens';

export default function Page() {
  return (
    <div style={{ background: L.bg, color: L.ink, minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <ManifestoStrip />
      <Features />
      <AIMoments />
      <HowItWorks />
      <FoundersNote />
      <FinalCTA />
      <Footer />
    </div>
  );
}
