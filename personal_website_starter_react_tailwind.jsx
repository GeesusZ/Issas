import { useState } from "react";

// Issa's Entertainment — Party Rentals (San Antonio)
// ✔️ Compact, lively, and easy to use
// ✔️ Works as a single-file React page (great for Cloudflare Pages)
// ✔️ Swap images/text below; wire the form to your email/API when ready

// =============================
// Configurable content
// =============================
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Rentals", href: "#rentals" },
  { label: "Packages", href: "#packages" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const RENTALS = [
  {
    title: "Mechanical Bull",
    desc: "Premium, safe, and thrilling — perfect centerpiece for any party.",
    img: "https://images.unsplash.com/photo-1579572331679-c0d62a2f6e9f?q=80&w=1600&auto=format&fit=crop",
    bullets: ["Attendant included", "Variable speed modes", "Safety inflatable base"],
  },
  {
    title: "360 Photo Booth",
    desc: "Wow guests with slow‑mo, boomerangs, and instant shares.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
    bullets: ["Custom overlays", "Instant QR/Airdrop/Email", "LED platform"],
  },
  {
    title: "Stand‑Alone Photo Booth",
    desc: "Self‑serve fun with pro lighting and crisp prints or digital.",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1600&auto=format&fit=crop",
    bullets: ["Unlimited sessions", "Props available", "Prints or digital"],
  },
  {
    title: "Chairs & Tables",
    desc: "Clean, sturdy, and matched to your headcount and layout.",
    img: "https://images.unsplash.com/photo-1538688423619-6f0a6f8f3a36?q=80&w=1600&auto=format&fit=crop",
    bullets: ["Delivery & pickup", "Flexible quantities", "Linen options"],
  },
];

const PACKAGES = [
  {
    name: "Essentials",
    tag: "Budget‑friendly",
    features: [
      "Stand‑Alone Photo Booth",
      "Chairs & Tables bundle",
      "Delivery + setup",
    ],
    cta: "Get quote",
  },
  {
    name: "Party Plus",
    tag: "Most Popular",
    features: [
      "360 Photo Booth",
      "Chairs & Tables bundle",
      "Props + custom overlay",
    ],
    highlight: true,
    cta: "Get quote",
  },
  {
    name: "Ultimate Fiesta",
    tag: "All‑out fun",
    features: [
      "Mechanical Bull + 360 Booth",
      "Full seating package",
      "Attendant(s) included",
    ],
    cta: "Get quote",
  },
];

const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We’re based in San Antonio and serve surrounding areas like Alamo Heights, Helotes, Leon Valley, Converse, Schertz, Cibolo, Boerne, New Braunfels, and more.",
  },
  {
    q: "Are you insured and is the equipment safe?",
    a: "Yes. Our gear is high‑quality, sanitized, inspected, and set up by trained staff. Mechanical bull rentals include an inflatable base, soft head, and controlled speeds.",
  },
  {
    q: "Do you offer packages for different budgets?",
    a: "Absolutely. From small backyard birthdays to large corporate events, we tailor packages to fit your budget and guest count.",
  },
  {
    q: "What events do you cover?",
    a: "Birthdays, weddings, quinceañeras, Sweet 16s, school and church events, company parties, and any private or public event.",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-pink-600 to-amber-500" />
      <span className="font-semibold tracking-tight">Issa's Entertainment</span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Logo />
        <nav className="hidden gap-6 text-sm md:flex">
          {NAV.map((item) => (
            <a key={item.href} className="text-gray-700 transition hover:text-gray-900" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-xl bg-gradient-to-r from-pink-600 to-amber-500 px-4 py-2 text-sm text-white md:block">
          Book now
        </a>
        <button
          aria-label="Toggle menu"
          className="rounded-xl border px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2 px-4 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                className="rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-gradient-to-r from-pink-600 to-amber-500 px-3 py-2 text-white"
            >
              Book now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden>
        <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-200 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-700">
            San Antonio • Best prices • High‑quality gear
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Issa's Entertainment — Party Rentals
          </h1>
          <p className="mt-4 max-w-prose text-gray-700">
            Mechanical bulls, 360 and stand‑alone photo booths, chairs, and tables.
            Lively, affordable, and reliable rentals for any event — birthdays, weddings,
            quinceañeras, Sweet 16s, company parties, and more.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-gradient-to-r from-pink-600 to-amber-500 px-4 py-2 text-white">
              Get an instant quote
            </a>
            <a href="#packages" className="rounded-xl border border-gray-300 px-4 py-2 text-gray-900">
              View packages
            </a>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            <li>• Best prices & friendly service</li>
            <li>• Insured, sanitized, and safe</li>
            <li>• On‑time delivery & setup</li>
            <li>• Packages for all budgets</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop"
              alt="Guests having fun at an event with photo booth and party lights"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Rentals() {
  return (
    <section id="rentals" className="bg-amber-50/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-semibold">Popular Rentals</h2>
        <p className="mt-2 max-w-prose text-gray-700">High‑quality equipment, great prices, and easy booking.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RENTALS.map((r) => (
            <div key={r.title} className="group overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={r.img} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{r.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{r.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {r.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-4 inline-block rounded-xl bg-gray-900 px-3 py-2 text-sm text-white">Check availability</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Packages for Every Budget</h2>
          <p className="mt-2 max-w-prose text-gray-700">Customize any package to fit your guest count, venue, and vibe.</p>
        </div>
        <a href="#contact" className="hidden rounded-xl border px-3 py-2 text-sm md:block">Build my package</a>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {PACKAGES.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border bg-white p-6 shadow-sm ${p.highlight ? "ring-2 ring-pink-500" : ""}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <span className="text-xs uppercase tracking-wide text-pink-600">{p.tag}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-pink-600 to-amber-500 px-4 py-2 text-white">
              {p.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-600">Serving San Antonio & surrounding areas. Events: birthdays, weddings, quinceañeras, Sweet 16s, corporate, school & church events, and more.</p>
    </section>
  );
}

function FAQs() {
  return (
    <section id="faqs" className="bg-amber-50/40">
      <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="overflow-hidden rounded-xl border bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [state, setState] = useState({ services: new Set() });
  const toggleService = (name) => {
    const next = new Set(state.services);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    setState({ ...state, services: next });
  };

  const SERVICES = [
    "Mechanical Bull",
    "360 Photo Booth",
    "Stand‑Alone Photo Booth",
    "Chairs & Tables",
  ];

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h2 className="text-2xl font-semibold">Get a Fast Quote</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Tell us a bit about your event. We reply quickly with availability and pricing.
      </p>
      <form
        className="mt-8 grid gap-4 rounded-2xl border bg-white p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            "Thanks! This demo form doesn’t send yet. Add your email/phone in the code and connect to your preferred form service (e.g., Formspree, Getform, or a simple API)."
          );
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" required className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-600" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" required className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-600" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="phone">
              Phone (optional)
            </label>
            <input id="phone" name="phone" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-600" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="date">
              Event date
            </label>
            <input id="date" name="date" type="date" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-600" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="city">
              Event city
            </label>
            <input id="city" name="city" placeholder="San Antonio" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-600" />
          </div>
        </div>
        <fieldset>
          <legend className="mb-2 text-sm font-medium">Services interested in</legend>
          <div className="flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <label key={s} className={`cursor-pointer rounded-xl border px-3 py-2 text-sm ${state.services.has(s) ? "bg-gray-900 text-white" : ""}`}>
                <input
                  type="checkbox"
                  className="peer sr-only"
                  onChange={() => toggleService(s)}
                  checked={state.services.has(s)}
                />
                {s}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="message">
            Event details
          </label>
          <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-600" placeholder="Venue type, guest count, start time, special requests" />
        </div>
        <button className="rounded-xl bg-gradient-to-r from-pink-600 to-amber-500 px-4 py-2 text-white" type="submit">
          Request quote
        </button>
        <p className="text-xs text-gray-500">Add your phone/email links in the header/footer for call/text booking.</p>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row md:px-6">
        <Logo />
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Issa's Entertainment • San Antonio, TX</p>
        <div className="flex gap-4 text-sm">
          {/* Replace with your real links */}
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">TikTok</a>
        </div>
      </div>
    </footer>
  );
}

export default function IssasEntertainmentSite() {
  return (
    <div className="font-[ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial] text-gray-900">
      <Header />
      <main>
        <Hero />
        <Rentals />
        <Packages />
        <FAQs />
        <Contact />
      </main>
      <a
        href="#contact"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-gradient-to-r from-pink-600 to-amber-500 px-5 py-3 text-white shadow-lg md:hidden"
      >
        Book now
      </a>
      <Footer />
    </div>
  );
}
