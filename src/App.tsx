import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolutionsStrip } from './components/SolutionsStrip';
import { EquipmentsSection } from './components/EquipmentsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { TechSupportSection } from './components/TechSupportSection';
import { AboutSection } from './components/AboutSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white selection:bg-[#FF6B00] selection:text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <SolutionsStrip />
        <EquipmentsSection />
        <SolutionsSection />
        <TechSupportSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
