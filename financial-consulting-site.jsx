import React, { useState } from "react";

export default function FinancialConsultingSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  const services = [
    {
      name: "Wealth Advisory",
      desc: "Multi-generational planning, portfolio strategy, and tax-aware investing for founders and family offices.",
    },
    {
      name: "M&A Advisory",
      desc: "Sell-side and buy-side guidance from valuation through close, for companies navigating a defining transaction.",
    },
    {
      name: "Corporate Finance",
      desc: "Capital structure, fundraising strategy, and treasury management for businesses scaling past their first plan.",
    },
    {
      name: "Risk & Tax Planning",
      desc: "Cross-border tax structuring and risk mitigation built around how your business actually operates.",
    },
  ];

  const approach = [
    { n: "01", title: "Discovery", desc: "We study your financials, goals, and constraints before proposing anything." },
    { n: "02", title: "Strategy", desc: "A written plan with explicit trade-offs, not a slide deck of options." },
    { n: "03", title: "Execution", desc: "We sit inside the transaction or process until it's done, not advise from the sidelines." },
    { n: "04", title: "Review", desc: "Quarterly reporting against the plan, revised as circumstances change." },
  ];

  const track = [
    { value: "$2.4B", label: "Capital advised on" },
    { value: "140+", label: "Transactions closed" },
    { value: "22", label: "Industries served" },
    { value: "0", label: "Conflicts of interest" },
  ];

  return (
    <div className="ak-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .ak-root {
          --ink: #142139;
          --ink-2: #1b2c4a;
          --paper: #f1ecde;
          --paper-2: #e7dfc7;
          --brass: #a9812e;
          --brass-dark: #8a6a25;
          --ink-text: #1c2434;
          --paper-text: #f1ecde;
          --line: #c9c0a2;
          --line-on-ink: rgba(241,236,222,0.16);
          background: var(--paper);
          color: var(--ink-text);
          font-family: 'IBM Plex Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .ak-serif { font-family: 'Fraunces', serif; }
        .ak-mono { font-family: 'IBM Plex Mono', monospace; font-variant-numeric: tabular-nums; }
        .ak-bg-ink { background: var(--ink); color: var(--paper-text); }
        .ak-bg-paper2 { background: var(--paper-2); }
        .ak-line { border-color: var(--line); }
        .ak-line-ink { border-color: var(--line-on-ink); }
        .ak-brass { color: var(--brass); }
        .ak-btn-brass {
          background: var(--brass);
          color: #14213d;
          transition: background 160ms ease;
        }
        .ak-btn-brass:hover { background: var(--brass-dark); }
        .ak-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .ak-link-arrow svg { transition: transform 160ms ease; }
        .ak-link-arrow:hover svg { transform: translateX(4px); }
        .ak-row-hover {
          transition: background 160ms ease, padding-left 160ms ease;
        }
        .ak-row-hover:hover {
          background: rgba(169,129,46,0.07);
          padding-left: 0.75rem;
        }
        .ak-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--line);
          font-family: 'IBM Plex Sans', sans-serif;
          padding: 0.6rem 0.1rem;
          width: 100%;
          color: var(--ink-text);
          outline: none;
          transition: border-color 160ms ease;
        }
        .ak-input::placeholder { color: #8a8368; }
        .ak-input:focus { border-color: var(--brass); }
        .ak-fade-in {
          animation: akFadeIn 700ms ease both;
        }
        @keyframes akFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ak-fade-in, .ak-row-hover, .ak-link-arrow svg, .ak-btn-brass { animation: none; transition: none; }
        }
        a, button { font-family: inherit; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-40 ak-bg-ink border-b" style={{ borderColor: "rgba(241,236,222,0.16)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="ak-serif text-lg tracking-tight">Ashwell &amp; Kerr</span>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:ak-brass opacity-90 hover:opacity-100">Services</a>
            <a href="#approach" className="opacity-90 hover:opacity-100">Approach</a>
            <a href="#track-record" className="opacity-90 hover:opacity-100">Track record</a>
            <a href="#contact" className="opacity-90 hover:opacity-100">Contact</a>
            <a
              href="#contact"
              className="ak-btn-brass px-4 py-2 text-sm font-medium"
            >
              Book a consultation
            </a>
          </nav>
          <button
            className="md:hidden text-sm border px-3 py-1.5 ak-line-ink"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
            <a href="#track-record" onClick={() => setMenuOpen(false)}>Track record</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="ak-bg-ink">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-5 gap-12 items-end">
          <div className="md:col-span-3 ak-fade-in">
            <p className="text-sm ak-brass mb-4">Independent financial consulting</p>
            <h1 className="ak-serif text-4xl md:text-6xl leading-[1.08] mb-6">
              Clarity, before capital moves.
            </h1>
            <p className="text-base md:text-lg max-w-md opacity-85 leading-relaxed mb-8">
              We advise founders, boards, and family offices on the financial
              decisions that compound — capital structure, M&amp;A, and
              long-term wealth planning.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#contact" className="ak-btn-brass px-6 py-3 text-sm font-medium">
                Book a consultation
              </a>
              <a href="#approach" className="ak-link-arrow text-sm opacity-90 hover:opacity-100">
                Our approach
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path d="M1 5H15M15 5L10.5 1M15 5L10.5 9" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 border ak-line-ink p-6 ak-fade-in" style={{ background: "rgba(241,236,222,0.04)" }}>
            <p className="text-xs opacity-60 mb-4">As of Q3 2026</p>
            <dl className="space-y-4">
              {[
                ["Assets advised", "$2.4B"],
                ["Years in practice", "18"],
                ["Active mandates", "46"],
                ["Client retention", "94%"],
              ].map(([label, value], i) => (
                <div key={i} className="flex items-baseline justify-between border-t pt-3 ak-line-ink" style={{ borderTopWidth: i === 0 ? 0 : 1 }}>
                  <dt className="text-sm opacity-75">{label}</dt>
                  <dd className="ak-mono text-lg">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h2 className="ak-serif text-2xl mb-3">What we do</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Four practice areas, one advisory relationship. We take on a
              limited number of mandates so every client works directly with
              a partner.
            </p>
          </div>
          <div className="md:col-span-3 border-t ak-line">
            {services.map((s, i) => (
              <div key={i} className="ak-row-hover border-b ak-line py-6 grid sm:grid-cols-4 gap-2 sm:gap-6">
                <h3 className="ak-serif text-xl sm:col-span-1">{s.name}</h3>
                <p className="text-sm opacity-80 leading-relaxed sm:col-span-3">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="ak-bg-paper2 border-y ak-line">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="ak-serif text-2xl mb-12 max-w-sm">
            A process built for how transactions actually unfold.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {approach.map((step, i) => (
              <div key={i}>
                <p className="ak-mono ak-brass text-sm mb-3">{step.n}</p>
                <h3 className="ak-serif text-lg mb-2">{step.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="track-record" className="ak-bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm ak-brass mb-10">Track record</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {track.map((t, i) => (
              <div key={i} className="border-t pt-4" style={{ borderColor: "rgba(241,236,222,0.16)" }}>
                <p className="ak-serif text-3xl md:text-4xl mb-1">{t.value}</p>
                <p className="text-sm opacity-70">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <blockquote className="ak-serif text-2xl md:text-3xl leading-snug text-center">
          "They told us not to sell — and showed the numbers for why. That's
          the kind of advice you can't buy from a bank."
        </blockquote>
        <p className="text-center text-sm opacity-60 mt-6">
          Chief Executive, mid-market manufacturing client
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="ak-bg-paper2 border-t ak-line">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="ak-serif text-3xl mb-6 max-w-sm">
              Every engagement starts with a conversation, not a proposal
              template.
            </h2>
            <div className="space-y-3 text-sm opacity-80">
              <p>New York &middot; London</p>
              <p>advisory@ashwellkerr.com</p>
              <p>+1 (212) 555-0148</p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border ak-line p-6">
                <p className="ak-serif text-xl mb-2">Request received.</p>
                <p className="text-sm opacity-75">
                  We'll respond within one business day to arrange a time to
                  talk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  className="ak-input"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="ak-input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="ak-input"
                  name="company"
                  placeholder="Company"
                  value={form.company}
                  onChange={handleChange}
                />
                <textarea
                  className="ak-input"
                  name="message"
                  placeholder="What are you looking for help with?"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                />
                <button type="submit" className="ak-btn-brass px-6 py-3 text-sm font-medium">
                  Request a consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ak-bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm opacity-70">
          <span className="ak-serif text-base opacity-100">Ashwell &amp; Kerr</span>
          <p>Independent financial consulting practice. Not a registered broker-dealer.</p>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
