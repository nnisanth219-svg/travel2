'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Journey {
  id: string;
  name: string;
  subtitle: string;
  time: string;
  mood: string;
  image: string;
  imageAlt: string;
  duration: string;
  distance: string;
  difficulty: string;
  difficultyColor: string;
  highlights: string[];
  description: string;
  signature: string;
  tags: string[];
}

const journeys: Journey[] = [
{
  id: 'santorini',
  name: 'Santorini Sunset Cruise',
  subtitle: 'Golden hour · Caldera views from the sea',
  time: '17:00 departure',
  mood: 'Sunset · Amber glow',
  image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop&crop=entropy",
  imageAlt: 'Luxury yacht sailing past Santorini\'s white cliffs at sunset, caldera views with traditional villages perched above',
  duration: '4 hrs',
  distance: '15 nautical miles',
  difficulty: 'Relaxed',
  difficultyColor: '#10B981',
  highlights: ['Caldera sunset views', 'White wine tasting', 'Swim in hot springs'],
  description: 'The yacht glides through the caldera as the sun paints the cliffs gold. You\'ll anchor in hidden coves, swim in volcanic hot springs, and watch the famous Santorini sunset from the perfect vantage point.',
  signature: 'Exclusive caldera sunset with wine tasting',
  tags: ['Sunset', 'Romance', 'Wine', 'Swimming']
},
{
  id: 'mykonos',
  name: 'Mykonos Beach Hopping',
  subtitle: 'Hidden coves · Private beach access',
  time: '10:00 departure',
  mood: 'Midday · Azure waters',
  image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop&crop=entropy",
  imageAlt: 'Crystal clear turquoise waters at a secluded Mykonos beach, luxury yacht anchored offshore, white sand',
  duration: '6 hrs',
  distance: '20 nautical miles',
  difficulty: 'Moderate',
  difficultyColor: '#F59E0B',
  highlights: ['5 secluded beaches', 'Beach club access', 'Gourmet lunch onboard'],
  description: 'Discover Mykonos\' most beautiful hidden beaches, accessible only by sea. Each stop offers something unique - from party atmospheres to tranquil coves. Your crew prepares fresh Mediterranean lunch onboard.',
  signature: 'Access to 5 exclusive beaches in one day',
  tags: ['Beaches', 'Day Trip', 'Social', 'Dining']
},
{
  id: 'crete',
  name: 'Crete Coastal Explorer',
  subtitle: 'Ancient shores · Minoan waters',
  time: '08:00 departure',
  mood: 'Morning · Crystal clear',
  image: "/images/crete-coastal.png",
  imageAlt: 'Dramatic Cretan coastline with ancient ruins visible from the sea, emerald waters washing against rocky shores',
  duration: '8 hrs',
  distance: '35 nautical miles',
  difficulty: 'Adventure',
  difficultyColor: '#EF4444',
  highlights: ['Ancient harbor visits', 'Sea cave exploration', 'Traditional Cretan lunch'],
  description: 'Follow the same routes as ancient Minoan traders. Explore archaeological sites from the water, discover sea caves used by pirates, and experience authentic Cretan hospitality in a remote fishing village.',
  signature: 'Journey through 3,000 years of maritime history',
  tags: ['History', 'Adventure', 'Culture', 'Full Day']
}
];

export default function GallerySection() {
  const [openId, setOpenId] = useState<string | null>(null);
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

  const toggleCard = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section id="gallery" className="py-20 bg-neutral" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-deep mb-6 animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Exclusive Mediterranean
            <span className="text-emerald"> Journeys</span>
          </h2>
          <p
            className="text-slate text-lg max-w-xl mx-auto leading-relaxed animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Click any journey to discover the route, highlights, and experience level
            that best matches your Mediterranean adventure.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {journeys.map((journey, idx) =>
          <div
            key={journey.id}
            className="animate-on-scroll opacity-100"
            style={{
              animation: `fadeSlideIn 0.9s ease-out ${0.1 + idx * 0.1}s both`,
              animationPlayState: 'paused'
            }}>
            
              {/* Card */}
              <div
              className={`rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
              openId === journey.id ?
              'border-emerald/60 shadow-lg' :
              'border-neutral-dark hover:border-slate/30'} bg-white`
              }>
              
                {/* Image */}
                <div
                className="relative h-56 overflow-hidden"
                onClick={() => toggleCard(journey.id)}>
                
                  <AppImage
                  src={journey.image}
                  alt={journey.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 via-transparent to-transparent" />

                  {/* Mood badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/85">
                      {journey.mood}
                    </span>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <Icon
                    name={openId === journey.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                    size={14}
                    variant="outline"
                    className="text-white" />
                  
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-lg leading-tight tracking-tight">
                      {journey.name}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {journey.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {journey.tags.slice(0, 3).map((tag) =>
                  <span key={tag} className="px-2 py-1 rounded-full text-xs font-medium border border-neutral-dark text-slate">
                        {tag}
                      </span>
                  )}
                  </div>
                </div>

                {/* Expandable detail panel */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  openId === journey.id ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-4 pb-5 border-t border-neutral-dark pt-4">
                    {/* Route specs */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                    { label: 'Duration', val: journey.duration, icon: 'ClockIcon' as const },
                    { label: 'Distance', val: journey.distance, icon: 'MapIcon' as const },
                    { label: 'Difficulty', val: journey.difficulty, icon: 'BoltIcon' as const }].
                    map((spec) =>
                    <div key={spec.label} className="bg-neutral rounded-xl p-3 text-center">
                          <Icon name={spec.icon} size={14} variant="outline" className="text-emerald mx-auto mb-1" />
                          <p className="text-slate-deep font-bold text-[12px] leading-tight">{spec.val}</p>
                          <p className="text-slate text-[10px] font-mono uppercase tracking-wider mt-0.5">{spec.label}</p>
                        </div>
                    )}
                    </div>

                    {/* Description */}
                    <p className="text-slate text-sm leading-relaxed mb-3">
                      {journey.description}
                    </p>

                    {/* Signature experience */}
                    <div className="bg-emerald-pale rounded-lg p-3 mb-3">
                      <p className="text-emerald-dark font-semibold text-xs font-mono uppercase tracking-wider mb-1">
                        Signature Experience
                      </p>
                      <p className="text-slate-deep text-sm font-medium">
                        {journey.signature}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1">
                      <p className="text-slate font-semibold text-xs uppercase tracking-wider">
                        Highlights
                      </p>
                      {journey.highlights.map((highlight) =>
                        <div key={highlight} className="flex items-center gap-2">
                          <Icon name="CheckIcon" size={12} variant="solid" className="text-emerald" />
                          <span className="text-slate text-sm">{highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
