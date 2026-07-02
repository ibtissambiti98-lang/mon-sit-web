import { ArrowDown, Sparkles } from 'lucide-react';
import { stats } from './data';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand-50 pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        {/* Eyebrow */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-sand-300 bg-sand-100/60 px-4 py-2 text-sm font-medium text-ink-600">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          Web Developer &middot; Morocco
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up font-display text-5xl font-semibold leading-[1.08] tracking-tight text-ink-900 text-balance sm:text-6xl lg:text-7xl">
          I build websites that <span className="text-terracotta-500 italic">grow</span> local businesses.
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance sm:text-xl">
          Your customers are searching online. I help Moroccan businesses — from riads to restaurants to
          artisans — establish a professional, fast, and beautiful presence on the web.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-semibold text-sand-50 transition-all duration-300 hover:bg-terracotta-600"
          >
            Start your project
            <Sparkles size={18} className="transition-transform duration-300 group-hover:rotate-12" />
          </button>
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink-200 px-7 py-3.5 text-base font-semibold text-ink-800 transition-all duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-sand-50"
          >
            View my work
          </button>
        </div>

        {/* Stats — minimalist divider row */}
        <div className="animate-fade-up mt-16 flex flex-wrap items-center justify-center divide-x divide-sand-300 border-y border-sand-200">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6 sm:px-10">
              <div className="font-display text-3xl font-bold text-ink-900">{s.value}</div>
              <div className="mt-1 text-sm text-ink-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative mt-16 flex justify-center">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-ink-400 transition-colors hover:text-ink-700"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
