import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from './hooks';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(['about', 'services', 'portfolio', 'process', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-sand-50/90 backdrop-blur-lg shadow-[0_2px_20px_-8px_rgba(31,30,24,0.15)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta-500 text-sand-50 font-display text-lg font-bold shadow-warm transition-transform duration-300 group-hover:scale-105">
            Y
          </span>
          <span className="font-display text-lg font-semibold text-ink-900">
            Ibtissam<span className="text-terracotta-500">.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === link.id ? 'text-terracotta-600' : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-terracotta-500 transition-all duration-300 ${
                  active === link.id ? 'w-6' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => handleClick('contact')}
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-sand-50 transition-all duration-300 hover:bg-terracotta-600 hover:shadow-warm"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-sand-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-sand-50/95 backdrop-blur-lg transition-all duration-400 md:hidden ${
          open ? 'max-h-96 border-t border-sand-200' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                active === link.id ? 'bg-terracotta-50 text-terracotta-600' : 'text-ink-700 hover:bg-sand-100'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('contact')}
            className="mt-2 rounded-full bg-ink-900 px-5 py-3 text-center text-sm font-semibold text-sand-50"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
