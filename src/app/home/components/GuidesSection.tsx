'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ target, suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          let current = 0;
          const increment = target / steps;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(parseFloat(current.toFixed(decimals)));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const captains = [
{
  id: 'elena',
  name: 'Elena Vassilis',
  title: 'Master Captain',
  bio: '15 years navigating Mediterranean waters. Born in Santorini, Elena knows every hidden cove from Corfu to Crete.',
  specialties: ['Santorini caldera', 'Greek islands', 'Traditional routes'],
  image: "/images/elena-captain.png",
  imageAlt: 'Female captain with warm smile, Mediterranean sea in background',
  stats: { years: 15, routes: 47, guests: 2800 }
},
{
  id: 'marco',
  name: 'Marco Bellini',
  title: 'Senior Captain',
  bio: 'Former luxury hotel manager turned yacht captain. Marco combines 5-star service with expert navigation of the Amalfi Coast.',
  specialties: ['Amalfi Coast', 'Luxury service', 'Wine & dining'],
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  imageAlt: 'Male Italian captain with sophisticated demeanor, luxury yacht background',
  stats: { years: 12, routes: 38, guests: 1900 }
},
{
  id: 'sophie',
  name: 'Sophie Laurent',
  title: 'Adventure Captain',
  bio: 'Marine biologist and certified diver. Sophie leads our eco-tours and knows the best spots for wildlife encounters.',
  specialties: ['Marine wildlife', 'Eco-tours', 'Diving locations'],
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  imageAlt: 'Female captain with adventurous spirit, underwater photography equipment',
  stats: { years: 8, routes: 29, guests: 1200 }
},
{
  id: 'nikos',
  name: 'Nikos Papadopoulos',
  title: 'Local Expert Captain',
  bio: 'Third-generation Greek fisherman turned luxury yacht captain. Nikos shares authentic Mediterranean culture and hidden gems.',
  specialties: ['Local culture', 'Hidden beaches', 'Traditional fishing'],
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  imageAlt: 'Greek captain with authentic charm, traditional fishing boat in background',
  stats: { years: 20, routes: 62, guests: 3400 }
}
];

export default function GuidesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="captains" className="py-20 bg-slate-deep text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Expert Mediterranean
            <span className="text-emerald"> Captains</span>
          </h2>
          <p
            className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Our captains combine decades of Mediterranean expertise with luxury service,
            ensuring your journey is both safe and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {captains.map((captain, idx) =>
          <div
            key={captain.id}
            className="animate-on-scroll opacity-100"
            style={{
              animation: `fadeSlideIn 0.9s ease-out ${0.1 + idx * 0.1}s both`,
              animationPlayState: 'paused'
            }}>
            
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <AppImage
                    src={captain.image}
                    alt={captain.imageAlt}
                    fill
                    className="object-cover rounded-full" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald rounded-full flex items-center justify-center">
                    <Icon name="CheckIcon" size={14} variant="solid" className="text-slate-deep" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center mb-1">{captain.name}</h3>
                <p className="text-emerald text-sm font-medium text-center mb-3">{captain.title}</p>
                <p className="text-white/70 text-sm leading-relaxed text-center mb-4">
                  {captain.bio}
                </p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {captain.specialties.map((specialty) =>
                    <span key={specialty} className="px-2 py-1 bg-emerald/20 text-emerald text-xs rounded-full">
                      {specialty}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-emerald font-bold text-lg">
                      <AnimatedCounter target={captain.stats.years} />
                    </p>
                    <p className="text-white/50 text-xs">Years</p>
                  </div>
                  <div>
                    <p className="text-emerald font-bold text-lg">
                      <AnimatedCounter target={captain.stats.routes} />
                    </p>
                    <p className="text-white/50 text-xs">Routes</p>
                  </div>
                  <div>
                    <p className="text-emerald font-bold text-lg">
                      <AnimatedCounter target={captain.stats.guests} suffix="+" />
                    </p>
                    <p className="text-white/50 text-xs">Guests</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="text-center animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both', animationPlayState: 'paused' }}>
          
          <a
            href="#register"
            className="inline-flex items-center gap-3 bg-emerald text-slate-deep font-bold text-[16px] uppercase tracking-wide px-10 py-5 rounded-full hover:bg-emerald-dark transition-all duration-200 shadow-emerald-glow">
            
            Meet Your Captain
            <Icon name="ArrowRightIcon" size={18} variant="outline" />
          </a>
          <p className="text-white/60 text-sm mt-3 font-mono">
            All captains certified · Multilingual · Expert local knowledge
          </p>
        </div>
      </div>
    </section>
  );
}
