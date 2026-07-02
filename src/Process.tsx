import { process, testimonials } from './data';
import { Quote, Star } from 'lucide-react';

export function Process() {
  return (
    <section id="process" className="relative bg-sand-100 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-terracotta-500">
            How It Works
          </span>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink-900 text-balance lg:text-5xl">
            A simple, transparent process — from idea to launch
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <div
              key={p.step}
              className="reveal relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-sand-300 lg:block" />
              )}

              <div className="relative">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-terracotta-300 bg-sand-50 font-display text-2xl font-bold text-terracotta-500 shadow-warm">
                  {p.step}
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-ink-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-terracotta-500">
            Testimonials
          </span>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink-900 text-balance lg:text-5xl">
            What local business owners say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="reveal flex flex-col rounded-2xl border border-sand-200 bg-sand-50 p-7 shadow-warm"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote size={32} className="mb-4 text-terracotta-300" />
              <p className="mb-6 flex-1 text-base leading-relaxed text-ink-700">"{t.quote}"</p>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-terracotta-400 text-terracotta-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-sand-200 pt-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-ink-900">{t.author}</div>
                  <div className="text-sm text-ink-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
