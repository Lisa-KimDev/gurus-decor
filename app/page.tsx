"use client";
import { useEffect, useRef } from "react";

const WA = "233541431179";
const waLink = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const PHOTOS: { src: string; title: string; sub: string; cls?: string }[] = [
  { src: "/photos/pink-living.jpg", title: "The Pink Lounge", sub: "Layered drapes & valance — residential", cls: "tall" },
  { src: "/photos/blue-satin.jpg", title: "Blue Satin Duo", sub: "Tieback styling — residential", cls: "tall" },
  { src: "/photos/peach-restaurant.jpg", title: "Peach Dining Hall", sub: "Full hall dressing — restaurant", cls: "wide" },
  { src: "/photos/gray-drapes.jpg", title: "Grey & Sheer", sub: "Double-layer drape — residential", cls: "wide" },
  { src: "/photos/restaurant-swag.jpg", title: "Swagged Bay", sub: "Swag valance — restaurant", cls: "wide" },
  { src: "/photos/beige-rod.jpg", title: "Beige Classic", sub: "Rod set & sheers — residential", cls: "tall" },
  { src: "/photos/sheer-valance.jpg", title: "Sheer Romance", sub: "Valance & sheer — residential", cls: "tall" },
];

export default function Home() {
  const ioRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rise").forEach((el) => io.observe(el));
    ioRef.current = io;
    return () => io.disconnect();
  }, []);

  return (
    <main>
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
            <a className="btn ghost" href="#gallery">View Our Work</a>
          </div>
        </div>
        <div className="hero-art rise" style={{ transitionDelay: "240ms" }}>
          <div className="frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/blue-satin.jpg" alt="Blue satin curtains with tiebacks installed by Guru's Decor" />
          </div>
 <div className="badge">
            <b>GH₵250+</b>
            ready-made pairs, supplied &amp; installed
          </div>
        </div>
      </header>

      <div className="strip" aria-hidden>
        <div className="track">
          {[...Array(2)].map((_, k) => (
            <span key={k} style={{ display: "inline-flex", gap: 56 }}>
              <span>Curtains <i>✦</i></span><span>Blinds <i>✦</i></span><span>Rods &amp; Tracks <i>✦</i></span>
              <span>Office &amp; Restaurant Dressing <i>✦</i></span><span>Free Measurement <i>✦</i></span>
              <span>Home Delivery <i>✦</i></span>
            </span>
          ))}
        </div>
      </div>

      <section id="gallery">
        <div className="wrap">
          <div className="sec-head rise">
            <div className="eyebrow">The Portfolio</div>
            <h2 className="display">A decade at the window.</h2>
            <p>
              Real installations from the Guru&rsquo;s Decor book — living
              rooms, bedrooms and dining halls we&rsquo;ve dressed since 2016.
              Every photo, our own work.
            </p>
          </div>
          <div className="gallery">
            {PHOTOS.map((p, i) => (
              <figure key={p.src} className={`gcard rise ${p.cls || ""}`} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={`${p.title} — ${p.sub}`} loading="lazy" />
                <figcaption className="cap">
                  <b>{p.title}</b>
                  {p.sub}
                </figcaption>
                </figure>
            ))}
          </div>
        </div>
      </section>

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
            <img src="/photos/restaurant-swag.jpg" alt="Restaurant hall dressed by Guru's Decor" loading="lazy" />
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
    </main>
  );
}
