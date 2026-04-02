'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-linked blur — Template 2 pattern adapted
    const handleScroll = () => {
      if (!bgRef?.current) return;
      const scrollY = window.scrollY;
      const maxScroll = 900;
      const progress = Math.min(scrollY / maxScroll, 1);
      const blurVal = progress * 18;
      const brightnessVal = 1 - progress * 0.65;
      const scaleVal = 1 + progress * 0.06;
      bgRef.current.style.filter = `blur(${blurVal}px) brightness(${brightnessVal})`;
      bgRef.current.style.transform = `scale(${scaleVal})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden noise-overlay">
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 transition-none"
        style={{ willChange: 'filter, transform' }}>
        
        <AppImage
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop&crop=entropy&auto=format"
          alt="Luxury yacht sailing through crystal clear turquoise waters with dramatic coastal cliffs in the background"
          fill
          priority
          className="object-cover object-center" />
        
        {/* Gradient overlay — dark at bottom, transparent at top */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.55) 40%, rgba(15,23,42,0.15) 70%, transparent 100%)'
          }} />
        
        {/* Subtle horizon tilt vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 80% at 30% 60%, transparent 40%, rgba(15,23,42,0.3) 100%)'
          }} />
        
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur rounded-full px-4 py-1.5 mb-8 opacity-0"
            style={{ animation: 'fadeInSlide 0.8s ease-out 0.6s forwards' }}>
            
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/80">
              Mediterranean · Exclusive Routes · Since 2018
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-white mb-6 opacity-0"
            style={{ animation: 'slideInBlur 1.2s ease-out 0.3s forwards' }}>
            
            The Mediterranean
            <span
              className="italic font-light"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.92em' }}>
              
              only the locals
            </span>
            <br />truly experience.
          </h1>

          {/* Sub */}
          <p
            className="text-[1.15rem] text-white/75 leading-relaxed max-w-xl mb-10 opacity-0"
            style={{ animation: 'fadeInUp 0.9s ease-out 0.9s forwards' }}>
            
            Private yachts. Expert skippers. Hidden coves along secluded coastlines,
            pristine beaches, secret passages where ancient civilizations once sailed.
            Luxury is our standard.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 items-center opacity-0"
            style={{ animation: 'fadeInScale 0.8s ease-out 1.1s forwards' }}>
            
            <a
              href="#register"
              className="group inline-flex items-center gap-2.5 bg-emerald text-slate-deep font-bold text-[15px] uppercase tracking-wide px-8 py-4 rounded-full hover:bg-emerald-dark transition-all duration-200 shadow-emerald-glow cta-primary">
              
              Book Your Private Charter
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 border border-white/25 text-white/85 text-[14px] font-medium px-6 py-4 rounded-full hover:bg-white/10 hover:border-white/40 hover:text-emerald-light transition-all duration-200 backdrop-blur">
              
              <Icon name="PlayIcon" size={14} variant="solid" />
              Explore our journeys
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/12 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 1.5s forwards' }}>
            
            {[
            { val: '8', unit: 'years', label: 'of premium service' },
            { val: '12', unit: 'max', label: 'guests per yacht' },
            { val: '150+', unit: '', label: 'annual charters' },
            { val: '4.9', unit: '★', label: 'client satisfaction' }]?.
            map((s) =>
            <div key={s?.label}>
                <p className="text-white font-bold text-2xl leading-none">
                  {s?.val}
                  <span className="text-emerald ml-1 text-lg">{s?.unit}</span>
                </p>
                <p className="text-white/50 text-[12px] font-mono uppercase tracking-wider mt-1">
                  {s?.label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 opacity-0"
        style={{ animation: 'fadeInUp 0.6s ease-out 2s forwards' }}>
        
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-white/40 to-white/10" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 rotate-90 origin-center mt-2">
          Scroll
        </span>
      </div>
    </section>);

}