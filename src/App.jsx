import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { SecurityNotice } from './components/SecurityNotice/SecurityNotice';
import { CTA } from './components/CTA/CTA';
import { MarketData } from './components/MarketData/MarketData';
import { Features } from './components/Features/Features';
import { Weighing } from './components/Weighing/Weighing';
import { Differentials } from './components/Differentials/Differentials';
import { Testimonials } from './components/Testimonials/Testimonials';
import { FooterCTA } from './components/FooterCTA/FooterCTA';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d96b27] selection:text-white font-['Poppins']">
      <Header />
      <Hero />
      <SecurityNotice />
      <CTA />
      <MarketData />
      <Features />
      <Weighing />
      <Differentials />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default App;
