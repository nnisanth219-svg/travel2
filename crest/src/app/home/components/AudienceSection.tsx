'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const audiences = [
{
  id: 'couples',
  title: 'A 25th anniversary in the Mediterranean.',
  subtitle: 'Couples & celebrations',
  description:
  'You\'ve done the fancy restaurant. You\'ve done the luxury resort. This is the celebration you\'ll still be talking about in 2045. Twelve guests, a luxury yacht, and a coastline that doesn\'t care about your schedule.',
  detail: 'Champagne at sunset in a hidden cove. Private crew. Customized itinerary.',
  image: "https://images.unsplash.com/photo-1520187357144-1d60d57b2e1a?w=800&h=600&fit=crop&crop=entropy",
  imageAlt: 'Couple celebrating with champagne on luxury yacht deck, Mediterranean sunset, crystal clear waters',
  tag: 'Private charters available',
  tagIcon: 'HeartIcon' as const,
  size: 'large',
  rotate: '-rotate-1',
  bg: 'bg-slate-deep',
  textColor: 'text-white',
  accentColor: '#10B981'
},
{
  id: 'corporate',
  title: '12 executives. No emails. One perfect sunset.',
  subtitle: 'Executive teams',
  description:
  'Real connections happen when the phones are off and the caldera views are breathtaking. No PowerPoint, no facilitator, no trust exercises. Just the Mediterranean and conversations that matter.',
  detail: 'Groups 8–16. Onboard dining. Team building through shared experience.',
  image: "/images/crete-coastal.png",
  imageAlt: 'Business executives networking on luxury yacht deck, Mediterranean coastline, professional yet relaxed atmosphere',
  tag: 'Half + full day formats',
  tagIcon: 'UserGroupIcon' as const,
  size: 'small',
  rotate: 'rotate-1',
  bg: 'bg-slate',
  textColor: 'text-white',
  accentColor: '#10B981'
},
{
  id: 'solo',
  title: 'You\'ve done the Maldives. Try the Greek islands.',
  subtitle: 'Solo experience-collectors',
  description:
  'You collect experiences that are difficult to capture on Instagram and impossible to explain at dinner parties. This is exactly that. Small group. Authentic. The kind of luxury that feels earned.',
  detail: 'Join an intimate group. Meet fellow travelers worth knowing.',
  image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop&crop=entropy",
  imageAlt: 'Solo traveler enjoying moment of peace on luxury yacht, Greek islands in background, contemplative luxury travel',
  tag: 'Small group adventures',
  tagIcon: 'SparklesIcon' as const,
  size: 'small',
  rotate: '-rotate-1',
  bg: 'bg-slate',
  textColor: 'text-white',
  accentColor: '#10B981'
},
{
  id: 'family',
  title: 'Three generations. One yacht. Zero arguments.',
  subtitle: 'Multi-generational families',
  description:
  'Grandparents want culture. Parents want relaxation. Kids want adventure. Our private charters deliver all three without compromising. Everyone gets their perfect Mediterranean moment.',
  detail: 'All ages welcome. Custom activities. Family-friendly crew.',
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=entropy",
  imageAlt: 'Multi-generational family enjoying yacht experience, grandparents and grandchildren together, Mediterranean sea',
  tag: 'Custom family itineraries',
  tagIcon: 'HomeIcon' as const,
  size: 'large',
  rotate: 'rotate-1',
  bg: 'bg-slate-deep',
  textColor: 'text-white',
  accentColor: '#10B981'
}
];

export default function AudienceSection() {
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
    <section id="guides" className="py-20 bg-neutral" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-deep mb-6 animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Journeys For Every
            <span className="text-emerald"> Traveler</span>
          </h2>
          <p
            className="text-slate text-lg max-w-xl mx-auto leading-relaxed animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Whether you're celebrating love, building teams, or seeking solitude,
            our Mediterranean journeys create memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[250px]">
          {audiences.map((audience, idx) =>
          <div
            key={audience.id}
            className={`animate-on-scroll opacity-100 ${
              audience.size === 'large' ? 'md:col-span-2' : ''
            }`}
            style={{
              animation: `fadeSlideIn 0.9s ease-out ${0.1 + idx * 0.1}s both`,
              animationPlayState: 'paused'
            }}>
            
              <div
              className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer group hover:scale-105 ${audience.rotate} ${
                audience.size === 'large' ?
                'border-emerald/30 shadow-slate' :
                'border-neutral-dark/50'
              } ${audience.bg}`}
              style={{ boxShadow: audience.size === 'large' ? '0 20px 60px -15px rgba(15,23,42,0.3)' : 'none' }}
              >
                <AppImage
                  src={audience.image}
                  alt={audience.imageAlt}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon
                        name={audience.tagIcon}
                        size={16}
                        variant="solid"
                        className="text-emerald"
                      />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald">
                        {audience.tag}
                      </span>
                    </div>
                    
                    <h3 className={`font-bold text-xl leading-tight mb-2 ${audience.textColor}`}>
                      {audience.title}
                    </h3>
                    <p className={`text-sm font-medium ${audience.textColor}/80 mb-3`}>
                      {audience.subtitle}
                    </p>
                  </div>

                  <div>
                    <p className={`text-sm leading-relaxed ${audience.textColor}/90 mb-4`}>
                      {audience.description}
                    </p>
                    
                    <div className={`border-t ${audience.textColor}/20 pt-3`}>
                      <p className={`text-xs font-medium ${audience.textColor}/70`}>
                        {audience.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="mt-16 text-center animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both', animationPlayState: 'paused' }}>
          
          <a
            href="#register"
            className="inline-flex items-center gap-3 bg-emerald text-slate-deep font-bold text-[16px] uppercase tracking-wide px-10 py-5 rounded-full hover:bg-emerald-dark transition-all duration-200 shadow-emerald-glow">
            
            Find Your Perfect Journey
            <Icon name="ArrowRightIcon" size={18} variant="outline" />
          </a>
          <p className="text-slate text-sm mt-3 font-mono">
            Private charters · Custom itineraries · All experience levels
          </p>
        </div>
      </div>
    </section>
  );
}