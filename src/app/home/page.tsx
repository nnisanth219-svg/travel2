import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import AudienceSection from './components/AudienceSection';
import GuidesSection from './components/GuidesSection';
import TestimonialsSection from './components/TestimonialsSection';
import RegisterSection from './components/RegisterSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral">
      <Header />
      <HeroSection />
      <GallerySection />
      <AudienceSection />
      <GuidesSection />
      <TestimonialsSection />
      <RegisterSection />
      <Footer />
    </main>
  );
}