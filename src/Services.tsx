import {
  Globe,
  ShoppingCart,
  Smartphone,
  Palette,
  Settings,
  Rocket,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { services } from './data';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  Smartphone,
  Palette,
  Settings,
  Rocket,
};

export function Services() {
  return (
    <section id="services" className="relative bg-ink-900 py-24 lg:py-32">
      {/* Decorative */}
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-terracotta-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-terracotta-400">
            My Services
          </span>
          <h2 className="font-display text-4xl font-semibold leading-tight text-sand-50 text-balance lg:text-5xl">
            Everything your business needs to succeed online
          </h2>
          <p className="mt-5 text-lg text-ink-300 text-balance">
            From a first website to a full online store — I offer end-to-end web services tailored for the
            Moroccan market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <div
                key={service.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 p-7 transition-all duration-400 hover:border-terracotta-500/50 hover:bg-ink-700"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {/* Hover glow */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-terracotta-500/0 blur-2xl transition-all duration-500 group-hover:bg-terracotta-500/20" />

                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-sand-50 shadow-warm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-3 font-display text-xl font-semibold text-sand-50">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-ink-300">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ink-200">
                        <Check size={15} className="flex-shrink-0 text-teal-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <p className="mb-5 text-ink-300">
            Not sure what you need? Let us figure it out together — no obligation.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-7 py-3.5 text-base font-semibold text-sand-50 shadow-warm transition-all duration-300 hover:bg-terracotta-600 hover:shadow-deep"
          >
            Book a free consultation
          </button>
        </div>
      </div>
    </section>
  );
}
