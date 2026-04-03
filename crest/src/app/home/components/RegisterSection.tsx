'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type ExperienceLevel = 'first-timer' | 'confident-swimmer' | 'seasoned-open-water';
type TabMode = 'reserve' | 'gift';

interface CalendarDay {
  day: number | null;
  status: 'available' | 'limited' | 'unavailable' | 'empty';
}

function buildCalendar(): CalendarDay[] {
  // March 2026 — 31 days, starts Sunday
  const days: CalendarDay[] = [];
  const offset = 0; // March 1 2026 = Sunday
  for (let i = 0; i < offset; i++) days.push({ day: null, status: 'empty' });
  const availability: Record<number, CalendarDay['status']> = {
    1: 'unavailable', 2: 'unavailable', 3: 'unavailable',
    4: 'unavailable', 5: 'unavailable', 6: 'unavailable', 7: 'unavailable',
    8: 'available', 9: 'available', 10: 'unavailable',
    11: 'unavailable', 12: 'unavailable', 13: 'available', 14: 'available',
    15: 'available', 16: 'limited', 17: 'unavailable', 18: 'unavailable',
    19: 'unavailable', 20: 'available', 21: 'available', 22: 'available',
    23: 'available', 24: 'unavailable', 25: 'unavailable', 26: 'unavailable',
    27: 'available', 28: 'limited', 29: 'available', 30: 'available',
    31: 'available',
  };
  for (let d = 1; d <= 31; d++) {
    days.push({ day: d, status: availability[d] || 'unavailable' });
  }
  return days;
}

const calendarDays = buildCalendar();

const expeditionOptions = [
  'Scilly Isles Crossing',
  'Lundy Island Passage',
  'Channel Islands Sprint',
  'Coastal Scotland Circuit',
  'Isle of Man Descent',
  'Private Custom Charter',
];

export default function RegisterSection() {
  const [tab, setTab] = useState<TabMode>('reserve');
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [groupSize, setGroupSize] = useState(2);
  const [experience, setExperience] = useState<ExperienceLevel>('first-timer');
  const [selectedExpedition, setSelectedExpedition] = useState('');
  const [notes, setNotes] = useState('');
  const [giftName, setGiftName] = useState('');
  const [giftEmail, setGiftEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — backend integration point
    // TODO: Connect to booking API endpoint
    setSubmitted(true);
  };

  const experienceLevels: { id: ExperienceLevel; label: string; desc: string }[] = [
    { id: 'first-timer', label: 'First-timer', desc: 'Never been on an open-water RIB' },
    { id: 'confident-swimmer', label: 'Confident swimmer', desc: 'Comfortable in cold open water' },
    { id: 'seasoned-open-water', label: 'Seasoned open-water', desc: 'Surf, diving, or offshore experience' },
  ];

  return (
    <section id="register" className="py-24 bg-[#1B2A4A] relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 wave-float"
          style={{ background: 'radial-gradient(circle, rgba(232,182,48,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, rgba(234,242,240,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/60 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#E8B630] animate-pulse" />
            Departures available from March 2026
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-bold text-white tracking-tight leading-tight mb-4">
            Reserve Your Seat<br />
            <span className="italic font-light text-white/65" style={{ fontFamily: 'Crimson Text, serif' }}>
              on the Boat.
            </span>
          </h2>
          <p className="text-white/65 text-lg max-w-lg mx-auto leading-relaxed">
            By the time you&apos;ve reached this form, you&apos;re already cold, wet, and grinning.
            Let&apos;s make it official.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-white/8 border border-white/12 rounded-2xl p-1.5 mb-10 max-w-sm mx-auto" suppressHydrationWarning>
          {(['reserve', 'gift'] as TabMode[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${
                tab === t
                  ? 'bg-[#E8B630] text-[#0F1C2E]'
                  : 'text-white/60 hover:text-white/85'
              }`}
              suppressHydrationWarning
            >
              {t === 'reserve' ? 'Reserve a seat' : 'Gift this trip'}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="bg-white/8 border border-[#E8B630]/30 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8B630]/20 flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={32} variant="solid" className="text-[#E8B630]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">You&apos;re on the list.</h3>
            <p className="text-white/65 leading-relaxed max-w-md mx-auto">
              Callum will be in touch within 24 hours to confirm your departure and discuss kit.
              Check your inbox — and pack waterproofs.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/6 border border-white/12 rounded-3xl p-8 lg:p-10 backdrop-blur" suppressHydrationWarning>
            {tab === 'reserve' ? (
              <div className="space-y-8">
                {/* Expedition selector */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-3">
                    Which expedition?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {expeditionOptions.map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setSelectedExpedition(exp)}
                        className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                          selectedExpedition === exp
                            ? 'border-[#E8B630] bg-[#E8B630]/12 text-white'
                            : 'border-white/12 bg-white/5 text-white/65 hover:border-white/25 hover:text-white/85'
                        }`}
                        suppressHydrationWarning
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calendar */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-3">
                    Preferred date · March 2026
                  </label>
                  {/* Legend */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {[
                      { color: 'bg-[#E8B630]/15 border-[#E8B630]/30', label: 'Available' },
                      { color: 'bg-[#E8B630]/6 border-[#E8B630]/15', label: 'Limited (1–2 seats)' },
                      { color: 'bg-white/5 border-white/8', label: 'Fully booked' },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border ${l.color}`} />
                        <span className="text-[11px] font-mono text-white/50">{l.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                      <div key={d} className="text-center text-[10px] font-mono text-white/35 py-1">
                        {d}
                      </div>
                    ))}
                  </div>
                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((cell, i) => (
                      <button
                        key={i}
                        type="button"
                        disabled={cell.status === 'unavailable' || cell.status === 'empty'}
                        onClick={() => cell.day && cell.status !== 'unavailable' && setSelectedDay(cell.day)}
                        className={`cal-day aspect-square flex items-center justify-center rounded-lg text-[13px] font-medium
                          ${cell.status === 'empty' ? 'cal-empty' : ''}
                          ${cell.status === 'available' ? 'cal-available' : ''}
                          ${cell.status === 'limited' ? 'cal-limited' : ''}
                          ${cell.status === 'unavailable' ? 'cal-unavailable bg-white/4 text-white/20 rounded-lg' : ''}
                          ${selectedDay === cell.day ? 'cal-selected' : ''}
                        `}
                        suppressHydrationWarning
                      >
                        {cell.day}
                      </button>
                    ))}
                  </div>
                  {selectedDay && (
                    <p className="text-[#E8B630] text-[12px] font-mono mt-2">
                      Selected: {selectedDay} March 2026
                    </p>
                  )}
                </div>

                {/* Group size */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-3">
                    Group size (1–6)
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                      className="w-10 h-10 rounded-full border border-white/15 bg-white/8 text-white hover:bg-white/15 transition-colors flex items-center justify-center"
                      suppressHydrationWarning
                    >
                      <Icon name="MinusIcon" size={16} variant="outline" />
                    </button>
                    <span className="text-3xl font-bold text-white w-8 text-center">{groupSize}</span>
                    <button
                      type="button"
                      onClick={() => setGroupSize(Math.min(6, groupSize + 1))}
                      className="w-10 h-10 rounded-full border border-white/15 bg-white/8 text-white hover:bg-white/15 transition-colors flex items-center justify-center"
                      suppressHydrationWarning
                    >
                      <Icon name="PlusIcon" size={16} variant="outline" />
                    </button>
                    <span className="text-white/45 text-sm ml-2">
                      {groupSize === 6 ? 'Full boat — private charter' : `${6 - groupSize} seat${6 - groupSize !== 1 ? 's' : ''} remaining`}
                    </span>
                  </div>
                </div>

                {/* Experience level */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-3">
                    Your experience level
                  </label>
                  <div className="flex flex-col gap-2">
                    {experienceLevels.map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setExperience(lvl.id)}
                        className={`flex items-center justify-between px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                          experience === lvl.id
                            ? 'border-[#E8B630] bg-[#E8B630]/10'
                            : 'border-white/12 bg-white/5 hover:border-white/22'
                        }`}
                        suppressHydrationWarning
                      >
                        <div>
                          <p className={`font-medium text-sm ${experience === lvl.id ? 'text-white' : 'text-white/75'}`}>
                            {lvl.label}
                          </p>
                          <p className="text-white/45 text-[12px] mt-0.5">{lvl.desc}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 ${
                          experience === lvl.id ? 'border-[#E8B630] bg-[#E8B630]' : 'border-white/20'
                        }`}>
                          {experience === lvl.id && (
                            <Icon name="CheckIcon" size={10} variant="outline" className="text-[#0F1C2E]" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional notes */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-3">
                    Anything we should know?
                    <span className="normal-case text-white/35 ml-2">(optional)</span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Medical conditions, mobility, celebrating something, travelling solo from somewhere interesting…"
                    rows={3}
                    className="form-input w-full px-5 py-4 rounded-xl text-sm resize-none"
                    suppressHydrationWarning
                  />
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="form-input px-5 py-4 rounded-xl text-sm"
                    suppressHydrationWarning
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    className="form-input px-5 py-4 rounded-xl text-sm"
                    suppressHydrationWarning
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#E8B630] text-[#0F1C2E] font-bold text-[15px] uppercase tracking-wide px-8 py-5 rounded-full hover:bg-[#D4A420] transition-all duration-200 cta-primary shadow-yellow-glow"
                  suppressHydrationWarning
                >
                  Reserve Your Seat on the Boat
                  <Icon name="ArrowRightIcon" size={18} variant="outline" />
                </button>

                <p className="text-center text-white/40 text-[12px] font-mono">
                  No payment now · Callum confirms within 24 hrs · Free cancellation 14 days prior
                </p>
              </div>
            ) : (
              /* Gift flow */
              <div className="space-y-8">
                <div className="bg-[#E8B630]/10 border border-[#E8B630]/20 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="GiftIcon" size={20} variant="outline" className="text-[#E8B630] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-bold mb-1">Gift an expedition</p>
                      <p className="text-white/65 text-sm leading-relaxed">
                        We&apos;ll send a beautifully designed digital gift certificate with your
                        chosen expedition, valid for 18 months. The recipient picks their own date.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2">
                      Your name
                    </label>
                    <input type="text" required placeholder="From" className="form-input w-full px-5 py-4 rounded-xl text-sm" suppressHydrationWarning />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2">
                      Your email
                    </label>
                    <input type="email" required placeholder="your@email.com" className="form-input w-full px-5 py-4 rounded-xl text-sm" suppressHydrationWarning />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2">
                    Recipient&apos;s name
                  </label>
                  <input
                    type="text"
                    value={giftName}
                    onChange={(e) => setGiftName(e.target.value)}
                    placeholder="Who is this for?"
                    className="form-input w-full px-5 py-4 rounded-xl text-sm"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2">
                    Recipient&apos;s email
                  </label>
                  <input
                    type="email"
                    value={giftEmail}
                    onChange={(e) => setGiftEmail(e.target.value)}
                    placeholder="Their email for the certificate"
                    className="form-input w-full px-5 py-4 rounded-xl text-sm"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-3">
                    Which expedition to gift?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {expeditionOptions.map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setSelectedExpedition(exp)}
                        className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                          selectedExpedition === exp
                            ? 'border-[#E8B630] bg-[#E8B630]/12 text-white'
                            : 'border-white/12 bg-white/5 text-white/65 hover:border-white/25'
                        }`}
                        suppressHydrationWarning
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2">
                    Personal message (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="A note to include on the certificate…"
                    className="form-input w-full px-5 py-4 rounded-xl text-sm resize-none"
                    suppressHydrationWarning
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#E8B630] text-[#0F1C2E] font-bold text-[15px] uppercase tracking-wide px-8 py-5 rounded-full hover:bg-[#D4A420] transition-all duration-200 cta-primary shadow-yellow-glow"
                  suppressHydrationWarning
                >
                  Gift This Trip
                  <Icon name="GiftIcon" size={18} variant="outline" />
                </button>

                <p className="text-center text-white/40 text-[12px] font-mono">
                  Certificate delivered by email within 2 hours · Valid 18 months · Full refund if unused
                </p>
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}