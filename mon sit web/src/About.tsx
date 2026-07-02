import { Check, Code2, Heart, Languages, MapPin } from 'lucide-react';

const highlights = [
  { icon: MapPin, text: 'Local — I understand the Moroccan market and its customers' },
  { icon: Languages, text: 'Bilingual — Arabic, French, and English content support' },
  { icon: Code2, text: 'Modern tech — Fast, reliable, and built to last' },
  { icon: Heart, text: 'Personal — You work directly with me, not an agency' },
];

const skills = [
  'React & Next.js',
  'Tailwind CSS',
  'Supabase & PostgreSQL',
  'SEO Optimization',
  'Google Business Profile',
  'E-Commerce (COD)',
  'Web Performance',
  'UI/UX Design',
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-deep">
              <img
                src="https://images.pexels.com/photos/3785067/pexels-photo-3785067.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&dpr=2"
                alt="Ibtissam working at her desk"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl border border-sand-200 bg-sand-50 p-5 shadow-warm sm:-right-8">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta-500 text-sand-50">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-ink-900">5+ years</div>
                  <div className="text-xs text-ink-500">Building websites</div>
                </div>
              </div>
              <p className="text-sm text-ink-600">
                From small shops to growing brands — I have helped over 40 businesses go online.
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-terracotta-500">
              About Me
            </span>
            <h2 className="font-display text-4xl font-semibold leading-tight text-ink-900 text-balance lg:text-5xl">
              I am basma web pro, and I help Moroccan businesses thrive online.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-600">
              <p>
                I am a web developer based in Morocco with a simple mission: to help local businesses in
                Morocco compete in the digital world. For over five years, I have been building websites that
                are not just beautiful — they are practical, fast, and designed to bring in real customers.
              </p>
              <p>
                Too many great Moroccan businesses — bakeries, riads, artisans, clinics — are invisible online.
                I change that. Whether you need a simple landing page or a full online store, I handle
                everything from design to launch, and I stick around to help you grow.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <h.icon size={16} />
                  </div>
                  <p className="text-sm font-medium text-ink-700">{h.text}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8">
              <div className="mb-3 text-sm font-semibold text-ink-500">Technologies I work with:</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-sand-300 bg-sand-50 px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-terracotta-300 hover:bg-terracotta-50"
                  >
                    <Check size={14} className="text-teal-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
