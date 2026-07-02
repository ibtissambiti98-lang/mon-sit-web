import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulated send — in production this would POST to an edge function
    setTimeout(() => setStatus('sent'), 1200);
  };

  const reset = () => {
    setStatus('idle');
    setForm({ name: '', email: '', business: '', message: '' });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-terracotta-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: info */}
          <div className="reveal">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-terracotta-400">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl font-semibold leading-tight text-sand-50 text-balance lg:text-5xl">
              Let us get your business online
            </h2>
            <p className="mt-5 text-lg text-ink-300 text-balance">
              Tell me about your business and what you need. I will get back to you within 24 hours with a plan
              and a quote — no pressure, no jargon.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:ibtissam98@gmail.com"
                className="group flex items-center gap-4 transition-colors hover:text-terracotta-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 bg-ink-800 transition-colors group-hover:border-terracotta-500/50">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-ink-400">Email</div>
                  <div className="font-semibold text-sand-50">ibtissam98@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/21271879930"
                className="group flex items-center gap-4 transition-colors hover:text-terracotta-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 bg-ink-800 transition-colors group-hover:border-terracotta-500/50">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-ink-400">Phone / WhatsApp</div>
                  <div className="font-semibold text-sand-50">+212 718 799 30</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 bg-ink-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-ink-400">Location</div>
                  <div className="font-semibold text-sand-50">Morocco</div>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-300">
              <span className="flex h-2.5 w-2.5">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              </span>
              Usually replies within 24 hours
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            {status === 'sent' ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl border border-ink-700 bg-ink-800 p-10 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="mb-3 font-display text-2xl font-semibold text-sand-50">Message sent!</h3>
                <p className="mb-6 max-w-sm text-ink-300">
                  Thank you, {form.name || 'friend'}. I have received your message and will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={reset}
                  className="rounded-full border border-ink-600 px-6 py-2.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-ink-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-ink-700 bg-ink-800 p-8 shadow-deep"
              >
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-300">Your name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sand-50 placeholder-ink-500 transition-colors focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
                      placeholder="e.g. Fatima Zahra"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-300">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sand-50 placeholder-ink-500 transition-colors focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-300">Business name</label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sand-50 placeholder-ink-500 transition-colors focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
                      placeholder="e.g. Boulangerie Nour"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-300">Tell me about your project *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sand-50 placeholder-ink-500 transition-colors focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
                      placeholder="I need a website for my restaurant in Casablanca..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta-500 px-6 py-3.5 text-base font-semibold text-sand-50 shadow-warm transition-all duration-300 hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-terracotta-500 font-display text-base font-bold text-sand-50">
              Y
            </span>
            <span className="font-display text-base font-semibold text-sand-50">
              Ibtissam
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="transition-colors hover:text-sand-50">About</button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="transition-colors hover:text-sand-50">Services</button>
            <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="transition-colors hover:text-sand-50">Portfolio</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="transition-colors hover:text-sand-50">Contact</button>
          </nav>

          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} Ibtissam. Built in Morocco.
          </p>
        </div>
      </div>
    </footer>
  );
}
