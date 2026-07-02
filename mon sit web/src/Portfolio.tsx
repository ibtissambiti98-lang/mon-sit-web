import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from './data';

const categories = ['All', 'E-Commerce', 'Hospitality', 'Restaurant', 'Marketplace', 'Tourism', 'Health'];

export function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-terracotta-500">
              Portfolio
            </span>
            <h2 className="font-display text-4xl font-semibold leading-tight text-ink-900 text-balance lg:text-5xl">
              Recent work from across Morocco
            </h2>
            <p className="mt-5 text-lg text-ink-600 text-balance">
              A selection of websites I have built for local businesses across Morocco.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="reveal mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-ink-900 text-sand-50 shadow-warm'
                  : 'border border-sand-300 bg-sand-50 text-ink-600 hover:border-ink-300 hover:text-ink-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 shadow-warm transition-all duration-500 hover:shadow-deep"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-sand-50/90 px-3 py-1 text-xs font-semibold text-ink-800 backdrop-blur">
                  {project.category}
                </span>
                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-terracotta-500 text-sand-50 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-semibold text-ink-900 transition-colors group-hover:text-terracotta-600">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-ink-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-sand-100 px-2.5 py-1 text-xs font-medium text-ink-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <p className="text-ink-500">
            Want to see more?{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-semibold text-terracotta-500 underline-offset-4 hover:underline"
            >
              Reach out
            </button>{' '}
            and I will share my full case studies.
          </p>
        </div>
      </div>
    </section>
  );
}
