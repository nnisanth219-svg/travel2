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
          const duration = 2200;
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

const testimonials = [
{
  id: 'isabella',
  name: 'Isabella Romano',
  location: 'Milan, Italy',
  title: '25th Anniversary Celebration',
  image: "/images/elena-captain.png",
  imageAlt: 'Elegant Italian woman with warm smile',
  rating: 5,
  text: 'The sunset cruise around Santorini was absolutely magical. Elena, our captain, knew the perfect spots for photos and even arranged a surprise champagne toast. This was the highlight of our 25th anniversary celebration.',
  journey: 'Santorini Sunset Cruise',
  date: 'September 2023'
},
{
  id: 'james',
  name: 'James Mitchell',
  location: 'London, UK',
  title: 'Corporate Team Building',
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  imageAlt: 'Professional British businessman',
  rating: 5,
  text: 'We booked a private charter for our executive team. The combination of luxury service and authentic Greek hospitality was exceptional. Marco created the perfect atmosphere for meaningful conversations away from the office.',
  journey: 'Private Mykonos Experience',
  date: 'October 2023'
},
{
  id: 'sophie',
  name: 'Sophie Laurent',
  location: 'Paris, France',
  title: 'Solo Adventure',
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  imageAlt: 'French woman with adventurous spirit',
  rating: 5,
  text: 'As a solo traveler, I felt completely safe and welcomed. The small group size allowed me to connect with fellow travelers while still having my own moments of peace. Crete\'s hidden beaches were breathtaking.',
  journey: 'Crete Coastal Explorer',
  date: 'August 2023'
},
{
  id: 'family',
  name: 'The Chen Family',
  location: 'Singapore',
  title: 'Multi-Generational Trip',
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  imageAlt: 'Asian family group portrait',
  rating: 5,
  text: 'Three generations traveling together can be challenging, but Captain Nikos made everyone happy. Grandparents loved the cultural sites, kids enjoyed swimming, and parents relaxed. Perfect Mediterranean family experience.',
  journey: 'Custom Family Charter',
  date: 'July 2023'
},
{
  id: 'maria',
  name: 'Maria Garcia',
  location: 'Barcelona, Spain',
  title: 'Honeymoon',
  image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
  imageAlt: 'Spanish woman on honeymoon',
  rating: 5,
  text: 'Our honeymoon couldn\'t have been more perfect. The private cove lunch, swimming in crystal clear waters, and watching the sunset from the yacht created memories we\'ll cherish forever. Worth every euro!',
  journey: 'Amalfi Coast Romance',
  date: 'June 2023'
},
{
  id: 'david',
  name: 'David Chen',
  location: 'New York, USA',
  title: 'Photography Expedition',
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  imageAlt: 'American photographer',
  rating: 5,
  text: 'As a landscape photographer, I was blown away by the access to hidden locations. Captain Sophie\'s knowledge of the best lighting conditions and secret spots made this trip invaluable for my portfolio.',
  journey: 'Greek Islands Photography Tour',
  date: 'May 2023'
}
];

export default function TestimonialsSection() {
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
    <section id="testimonials" className="py-20 bg-neutral" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-deep mb-6 animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Mediterranean
            <span className="text-emerald"> Chronicles</span>
          </h2>
          <p
            className="text-slate text-lg max-w-xl mx-auto leading-relaxed animate-on-scroll opacity-100"
            style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both', animationPlayState: 'paused' }}>
            
            Real stories from travelers who discovered the magic of the Mediterranean
            through our exclusive yacht experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Happy Guests', value: 2800, suffix: '+' },
            { label: '5-Star Reviews', value: 4.9, suffix: '/5', decimals: 1 },
            { label: 'Years Experience', value: 8 },
            { label: 'Unique Routes', value: 47 }
          ].map((stat, idx) =>
          <div
            key={stat.label}
            className="text-center animate-on-scroll opacity-100"
            style={{ animation: `fadeSlideIn 0.9s ease-out ${0.1 + idx * 0.1}s both`, animationPlayState: 'paused' }}>
            
            <p className="text-3xl lg:text-4xl font-bold text-emerald mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            </p>
            <p className="text-slate text-sm font-medium uppercase tracking-wider">{stat.label}</p>
          </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, idx) =>
          <div
            key={testimonial.id}
            className="animate-on-scroll opacity-100"
            style={{
              animation: `fadeSlideIn 0.9s ease-out ${0.1 + idx * 0.1}s both`,
              animationPlayState: 'paused'
            }}>
            
              <div className="bg-white rounded-2xl border border-neutral-dark p-6 hover:border-emerald/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <AppImage
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      fill
                      className="object-cover rounded-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-deep mb-1">{testimonial.name}</h3>
                    <p className="text-slate text-sm mb-1">{testimonial.location}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) =>
                        <Icon key={i} name="StarIcon" size={14} variant="solid" className="text-amber" />
                      )}
                    </div>
                  </div>
                </div>

                <blockquote className="text-slate leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-emerald">{testimonial.journey}</p>
                    <p className="text-slate text-xs">{testimonial.date}</p>
                  </div>
                  <Icon name="QuoteIcon" size={16} variant="outline" className="text-neutral-dark" />
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
            
            Create Your Own Story
            <Icon name="ArrowRightIcon" size={18} variant="outline" />
          </a>
          <p className="text-slate text-sm mt-3 font-mono">
            Join 2,800+ happy guests · 4.9/5 star rating · Unforgettable memories
          </p>
        </div>
      </div>
    </section>
  );
}
