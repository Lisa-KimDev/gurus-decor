import Intro from "./components/Intro";
import Gallery from "./components/Gallery";

const WA = "233541431179";
const waLink = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://www.gurusdecorgh.com/#org",
                name: "Guru's Decor",
                description:
                  "Family-run window-fashion studio supplying and installing curtains, blinds, rods and tracks across Ghana since 2016.",
                url: "https://www.gurusdecorgh.com/",
                telephone: "+233541431179",
                foundingDate: "2016",
                priceRange: "GH₵250 - GH₵300+",
                image: "https://www.gurusdecorgh.com/photos/blue-satin.jpg",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Accra",
                  addressCountry: "GH",
                },
                areaServed: { "@type": "Country", name: "Ghana" },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                knowsAbout: ["Curtains", "Blinds", "Window blinds", "Drapery", "Interior design", "Window treatment"],
              },
              {
                "@type": "WebSite",
                "@id": "https://www.gurusdecorgh.com/#site",
                url: "https://www.gurusdecorgh.com/",
                name: "Guru's Decor",
                publisher: { "@id": "https://www.gurusdecorgh.com/#org" },
              },
              {
                "@type": "WebPage",
                "@id": "https://www.gurusdecorgh.com/#webpage",
                url: "https://www.gurusdecorgh.com/",
                name: "Curtains, Blinds & Window Fashion in Ghana | Guru's Decor Accra",
                isPartOf: { "@id": "https://www.gurusdecorgh.com/#site" },
                about: { "@id": "https://www.gurusdecorgh.com/#org" },
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.gurusdecorgh.com/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How much do curtains cost in Ghana?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "At Guru's Decor, ready-made curtain pairs start from GH₵250, and custom drapery typically runs GH₵250–GH₵300+ per pair depending on fabric and size. Send a photo of your windows on WhatsApp for a free same-day quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you deliver and install outside Accra?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes — Guru's Decor serves clients nationwide across Ghana. Based in Accra, we travel for homes, offices and restaurant projects across the country.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I get a quote?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "WhatsApp photos of your windows to +233 54 143 1179. We advise on fabric and send your quote the same day — measurement is free and included before any fabric is cut.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does installation take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most Guru's Decor installations are completed in a single fitting visit after on-site measurement — supply, installation and styling are handled by our own team.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you dress offices and restaurants?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Guru's Decor handles bulk and contract dressing for offices, hotels and dining halls across Ghana — on schedule and on budget, from rods and tracks to full swag styling.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What areas do you serve?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Guru's Decor is based in Accra and serves the whole of Ghana — homes, offices and restaurants. Opening hours are Monday to Saturday, 8am–6pm.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <nav>
        <div className="logo">
          Guru&rsquo;s <em>Decor</em>
        </div>
        <div className="links">
          <a href="#gallery" className="hide-m">Gallery</a>
          <a href="#services" className="hide-m">Services</a>
          <a href="#pricing" className="hide-m">Pricing</a>
          <a href="#contact" className="btn gold" style={{ padding: "10px 20px" }}>
            WhatsApp Us
          </a>
        </div>
      </nav>

      <header className="hero">
        <div>
          <div className="eyebrow rise">Window fashion · Est. 2016 · Ghana</div>
          <h1 className="display rise" style={{ transitionDelay: "80ms" }}>
            Windows that<br />wear <em>couture.</em>
          </h1>
          <p className="lede rise" style={{ transitionDelay: "160ms" }}>
            Guru&rsquo;s Decor supplies and installs curtains, blinds, rods and
            tracks for homes, offices and restaurants across Ghana — from
            ready-made pairs to full custom dressing of every window you own.
          </p>
          <div className="rise" style={{ display: "flex", gap: 14, flexWrap: "wrap" }} >
            <a className="btn gold" href={waLink("Hello Guru's Decor! I'd like a quote for my windows.")}>
              Get a Free Quote
            </a>
            <a className="btn ghost" href="#gallery">See Our Work</a>
          </div>
        </div>
        <div className="hero-art rise" style={{ transitionDelay: "240ms" }}>
          <div className="frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <picture>
              <source
                type="image/webp"
                srcSet="/photos/blue-satin-480.webp 480w, /photos/blue-satin-800.webp 800w, /photos/blue-satin-1200.webp 1200w"
                sizes="(max-width: 720px) 88vw, 40vw"
              />
              <img
                src="/photos/blue-satin.jpg"
                alt="Blue satin curtains with tiebacks installed by Guru's Decor"
                width={720}
                height={742}
                fetchPriority="high"
              />
            </picture>
          </div>
          <div className="badge">
            <b>GH₵250+</b>
            <span>ready-made pairs</span>
          </div>
        </div>
      </header>

      <Gallery />

      <section id="services" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <div className="sec-head rise">
            <div className="eyebrow">What We Do</div>
            <h2 className="display">Everything your windows need.</h2>
            <p>One call covers supply and installation — materials, labour and styling included.</p>
          </div>
          <div className="svc-grid">
            {[
              ["Supply & Install", "Curtains, blinds and accessories — sourced, delivered and fitted by our own team."],
              ["Custom Drapery", "Made-to-measure curtains and sheers in satin, blackout, terylene and sheer fabrics."],
              ["Rod & Track Systems", "Decorative gold rods, curves and ceiling tracks — installed and dressed."],
              ["Valances & Swags", "Swag and valance styling that turns a plain window into a feature."],
              ["Office & Restaurant", "Bulk dressing for offices, hotels and dining halls — on schedule, on budget."],
              ["Free Measurement", "We measure, advise and quote at no cost — WhatsApp us your window photos."],
            ].map(([t, d], i) => (
              <div key={t} className="svc rise" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <div className="n">No. {i + 1}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="wrap">
          <div className="price-band rise">
            <div className="eyebrow">Straightforward Pricing</div>
            <h2>Ready-made pairs from GH₵250.</h2>
            <p>
              Custom drapery typically runs GH₵250–GH₵300+ per pair depending
              on fabric and size. Send us your window photos on WhatsApp and
              we&rsquo;ll quote the same day — measurement included.
            </p>
            <div className="price-pair">
              <div className="big">
                GH₵250<small>from, per pair</small>
              </div>
              <a className="btn ghost" href={waLink("Hi Guru's Decor! Roughly what would curtains for my window cost?")}>
                Ask for Today&rsquo;s Price
              </a>
            </div>
            <p style={{ fontSize: "0.78rem", opacity: 0.55, marginTop: 18 }}>
              Prices are indicative; final quote depends on fabric, size and fitting.
            </p>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="sec-head rise">
            <div className="eyebrow">How It Works</div>
            <h2 className="display">From photo to fitted.</h2>
          </div>
          <div className="steps">
            {[
              ["WhatsApp Us", "Send photos of your windows and your style ideas."],
              ["Free Quote", "We advise fabric and quote — usually same day."],
              ["We Measure", "Our team measures on-site before any fabric is cut."],
              ["We Fit & Dress", "Supply, installation and tieback styling — done in one visit."],
            ].map(([t, d]) => (
              <div key={t} className="step rise">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap about">
          <div className="imgbox rise">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <picture>
              <source
                type="image/webp"
                srcSet="/photos/restaurant-swag-480.webp 480w, /photos/restaurant-swag-800.webp 800w, /photos/restaurant-swag-1200.webp 1200w"
                sizes="(max-width: 720px) 90vw, 40vw"
              />
              <img
                src="/photos/restaurant-swag.jpg"
                alt="Restaurant hall dressed by Guru's Decor"
                loading="lazy"
                width={576}
                height={440}
              />
            </picture>
          </div>
          <div>
            <div className="eyebrow rise">The Studio</div>
            <h2 className="display rise">A family trade, a decade deep.</h2>
            <p className="rise">
              Guru&rsquo;s Decor has been supplying and fitting window fashion
              across Ghana since 2016. We&rsquo;re a small, hands-on team —
              the people who quote you are the people who fit your curtains.
            </p>
            <p className="rise">
              Homes, offices, restaurants: if it has a window, we&rsquo;ve
              dressed one like it. Nine years of rooms, one standard.
            </p>
            <div className="rise" style={{ display: "flex", gap: 34, marginTop: 26, flexWrap: "wrap" }}>
              {[["9+", "years trading"], ["1.9K", "followers"], ["271", "projects posted"]].map(([n, l]) => (
                <div key={l}>
                  <div className="display" style={{ fontSize: "2.2rem", color: "var(--gold)" }}>{n}</div>
                  <div style={{ fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-soft)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <div className="sec-head rise">
            <div className="eyebrow">Good to Know</div>
            <h2 className="display">Questions, answered.</h2>
          </div>
          <div className="faq-list rise">
            {[
              ["How much do curtains cost in Ghana?",
               "Ready-made curtain pairs start from GH₵250, and custom drapery typically runs GH₵250–GH₵300+ per pair depending on fabric and size. Send a photo of your windows on WhatsApp for a free same-day quote."],
              ["Do you deliver and install outside Accra?",
               "Yes — we serve clients nationwide across Ghana. Based in Accra, we travel for homes, offices and restaurant projects across the country."],
              ["How do I get a quote?",
               "WhatsApp photos of your windows to +233 54 143 1179. We advise on fabric and send your quote the same day — measurement is free and included before any fabric is cut."],
              ["How long does installation take?",
               "Most installations are completed in a single fitting visit after on-site measurement — supply, installation and styling are handled by our own team."],
              ["Do you dress offices and restaurants?",
               "Yes. We handle bulk and contract dressing for offices, hotels and dining halls across Ghana — on schedule and on budget, from rods and tracks to full swag styling."],
              ["What areas do you serve?",
               "We're based in Accra and serve the whole of Ghana. Opening hours are Monday to Saturday, 8am–6pm."],
            ].map(([q, a]) => (
              <details key={q} className="faq-item">
                <summary>
                  {q}
                  <span aria-hidden>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap cta-grid">
          <div>
            <div className="eyebrow rise">Get Started</div>
            <h2 className="display rise">Send one photo.<br />We&rsquo;ll do the rest.</h2>
            <p className="lede rise">
              WhatsApp is fastest — send photos of your windows, tell us the
              room, and we&rsquo;ll take it from there. Calling works too.
            </p>
            <div className="rise" style={{ display: "flex", gap: 14, marginTop: 26, flexWrap: "wrap" }}>
              <a className="btn gold" href={waLink("Hello Guru's Decor! I saw your website and I'd like a quote.")}>
                Chat on WhatsApp
              </a>
              <a className="btn ghost" href="tel:+233541431179">Call +233 54 143 1179</a>
            </div>
          </div>
          <div className="contact-card rise">
            <h3>Studio Details</h3>
            <div className="row"><div className="ic">💬</div><a href={waLink("Hello Guru's Decor!")}>WhatsApp — fastest reply</a></div>
            <div className="row"><div className="ic">📞</div><a href="tel:+233541431179">+233 54 143 1179</a></div>
            <div className="row"><div className="ic">📍</div><span>Ghana — nationwide service</span></div>
            <div className="row"><div className="ic">🕐</div><span>Mon–Sat, 8am–6pm</span></div>
            <div className="row"><div className="ic">📘</div><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            <div className="flogo">Guru&rsquo;s <em>Decor</em></div>
            <div style={{ fontSize: "0.8rem", marginTop: 4 }}>Supply &amp; installation of window fashion — Ghana</div>
          </div>
          <div style={{ fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Guru&rsquo;s Decor · Built with care
          </div>
        </div>
      </footer>

      {/* floating WhatsApp */}
      <a
        className="wa-fab"
        href={waLink("Hello Guru's Decor! I saw your website and I'd like a quote.")}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="wa-ring" aria-hidden />
        <span className="wa-ring d2" aria-hidden />
        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden>
          <path fill="currentColor" d="M16 3a13 13 0 0 0-11 19.9L3 29l6.3-1.9A13 13 0 1 0 16 3Zm0 2a11 11 0 1 1-5.6 20.5l-.4-.2-3.7 1.1 1.1-3.6-.2-.4A11 11 0 0 1 16 5Zm-4.5 5.8c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.1.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-.9c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.1Z"/>
        </svg>
        <span className="wa-tip">Chat with us</span>
      </a>
    </main>
  );
}
