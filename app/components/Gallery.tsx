"use client";

import { useEffect, useRef, useState } from "react";

type Cat = "curtains" | "blinds" | "videos";
type Item = {
  src: string;
  title: string;
  sub: string;
  cat: Cat;
  cls?: string;
  video?: boolean;
  poster?: string;
  captions?: string;
};

export const PHOTOS: Item[] = [
  { src: "/photos/pink-living.jpg", title: "The Pink Lounge", sub: "Layered drapes & valance — residential", cat: "curtains", cls: "tall" },
  { src: "/photos/blue-satin.jpg", title: "Blue Satin Duo", sub: "Tieback styling — residential", cat: "curtains", cls: "tall" },
  { src: "/photos/chandelier-hall.jpg", title: "The Chandelier Hall", sub: "Sheers under camel drapes — showpiece", cat: "curtains", cls: "wide" },
  { src: "/photos/gray-bedroom.jpg", title: "Grey Retreat", sub: "Blackout drapes & sheer — bedroom", cat: "curtains", cls: "tall" },
  { src: "/photos/peach-restaurant.jpg", title: "Peach Dining Hall", sub: "Full hall dressing — restaurant", cat: "curtains", cls: "wide" },
  { src: "/photos/gray-drapes.jpg", title: "Grey & Sheer", sub: "Double-layer drape — residential", cat: "curtains", cls: "tall" },
  { src: "/photos/restaurant-swag.jpg", title: "Swagged Bay", sub: "Swag valance — restaurant", cat: "curtains", cls: "wide" },
  { src: "/photos/beige-rod.jpg", title: "Beige Classic", sub: "Rod set & sheers — residential", cat: "curtains" },
  { src: "/photos/sheer-valance.jpg", title: "Sheer Romance", sub: "Valance & sheer — residential", cat: "curtains", cls: "tall" },
  { src: "/photos/wood-blinds.jpg", title: "Walnut Woods", sub: "Timber venetians — residential", cat: "blinds", cls: "tall" },
  { src: "/photos/stripe-blinds.jpg", title: "Monochrome Stripe", sub: "Zebra blinds — office", cat: "blinds", cls: "tall" },
  { src: "/photos/rainbow-blinds.jpg", title: "The Rainbow Kitchen", sub: "Colour-run slats — kitchen", cat: "blinds" },
  { src: "/photos/office-blinds.jpg", title: "The Study", sub: "Faux-wood blinds — office", cat: "blinds", cls: "tall" },
  { src: "/photos/roller-blind.jpg", title: "Taupe Roller", sub: "Roller blind — residential", cat: "blinds", cls: "tall" },
  { src: "/photos/media/video-blue-duo-cap.mp4", poster: "/photos/media/poster-blue-duo.jpg", title: "Blue Satin Duo — The Film", sub: "Motion walkthrough — residential", cat: "videos", cls: "tall", video: true, captions: "/photos/media/cap.vtt" },
  { src: "/photos/media/video-teal-tieback-cap.mp4", poster: "/photos/media/poster-teal-tieback.jpg", title: "Teal Tiebacks in Motion", sub: "Sheer + drape layers — residential", cat: "videos", cls: "tall", video: true, captions: "/photos/media/cap.vtt" },
];

const FILTERS: Array<{ id: "all" | Cat; label: string }> = [
  { id: "all", label: "All Work" },
  { id: "curtains", label: "Curtains" },
  { id: "blinds", label: "Blinds" },
  { id: "videos", label: "In Motion" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const startedRef = useRef(false);
  const ioRef = useRef<IntersectionObserver | null>(null);

  const observeAll = () => {
    startedRef.current = true;
    ioRef.current?.disconnect();
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rise:not(.in)").forEach((el) => io.observe(el));
    ioRef.current = io;
  };

  useEffect(() => {
    const seen = sessionStorage.getItem("gd-intro");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced || document.querySelector(".intro") === null) {
      observeAll();
    } else {
      window.addEventListener("gd:intro-done", observeAll, { once: true });
      const safety = setTimeout(observeAll, 5000);
      return () => {
        window.removeEventListener("gd:intro-done", observeAll);
        clearTimeout(safety);
      };
    }
  }, []);

  useEffect(() => {
    if (startedRef.current) observeAll();
    return () => ioRef.current?.disconnect();
  }, [filter]);

  const items = filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  return (
    <section id="gallery">
      <div className="wrap">
        <div className="sec-head rise">
          <div className="eyebrow">Our Work</div>
          <h2 className="display">Rooms we&rsquo;ve dressed.</h2>
        </div>
        <div className="chips rise" role="tablist" aria-label="Filter gallery">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "chip active" : "chip"}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="masonry">
          {items.map((p, i) => (
            <figure
              key={p.src}
              className={`shot ${p.cls ?? ""} rise`}
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              {p.video ? (
                <video
                  src={p.src}
                  poster={p.poster}
                  controls
                  playsInline
                  preload="none"
                  aria-label={`${p.title} — ${p.sub}`}
                >
                  <track kind="captions" label="No dialogue" src={p.captions} default />
                </video>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <picture>
                  <source srcSet={p.src.replace(".jpg", ".webp")} type="image/webp" />
                  <img src={p.src} alt={`${p.title} — ${p.sub}`} loading="lazy" />
                </picture>
              )}
              <figcaption>
                <b>{p.title}</b>
                <span>{p.sub}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
