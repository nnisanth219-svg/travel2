'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Journeys', href: '#gallery' },
    { label: 'Captains', href: '#guides' },
    { label: 'Chronicles', href: '#testimonials' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-deep/95 backdrop-blur-xl border-b border-white/8 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <AppLogo
              text="AQUA"
              iconName="AnchorIcon"
              size={32}
              className="text-white"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-[13px] font-medium uppercase tracking-widest text-white/70 hover:text-emerald-light transition-colors duration-200"
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#register"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald text-slate-deep text-[13px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-emerald-dark transition-all duration-200 shadow-emerald-glow cta-primary"
            >
              Book Your Voyage
              <Icon name="ChevronRightIcon" size={14} variant="outline" />
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur text-white hover:bg-white/15 transition-colors"
              aria-label="Open menu"
            >
              <Icon name="Bars3Icon" size={20} variant="outline" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-slate-deep/98 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-6 pb-10">
          <div className="flex justify-between items-center mb-12">
            <AppLogo text="AQUA" iconName="AnchorIcon" size={32} className="text-white" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg bg-white/10 border border-white/10 text-white"
              aria-label="Close menu"
            >
              <Icon name="XMarkIcon" size={20} variant="outline" />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-semibold text-white/85 hover:text-emerald-light transition-colors tracking-tight"
              >
                {link?.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <a
              href="#register"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-emerald text-slate-deep text-base font-bold uppercase tracking-wider px-6 py-4 rounded-full hover:bg-emerald-dark transition-colors w-full"
            >
              Book Your Voyage
              <Icon name="ChevronRightIcon" size={16} variant="outline" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}