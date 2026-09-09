export type Faq = { q: string; a: string };

/**
 * Single source of truth for FAQs.
 * Feeds BOTH the visible accordion (page.tsx) and the FAQPage schema
 * (lib/schema.ts) — edit here only. Questions must match the visible
 * page word-for-word (Google checks parity).
 */
export const FAQS: Faq[] = [
  {
    q: "How much do curtains cost in Ghana?",
    a: "At Guru's Decor, ready-made curtain pairs start from GH₵250, and custom drapery typically runs GH₵250–GH₵300+ per pair depending on fabric and size. Send a photo of your windows on WhatsApp for a free same-day quote.",
  },
  {
    q: "Do you deliver and install outside Accra?",
    a: "Yes — Guru's Decor serves clients nationwide across Ghana. Based in Accra, we travel for homes, offices and restaurant projects across the country.",
  },
  {
    q: "How do I get a quote?",
    a: "WhatsApp photos of your windows to +233 54 143 1179. We advise on fabric and send your quote the same day — measurement is free and included before any fabric is cut.",
  },
  {
    q: "How long does installation take?",
    a: "Most Guru's Decor installations are completed in a single fitting visit after on-site measurement — supply, installation and styling are handled by our own team.",
  },
  {
    q: "Do you dress offices and restaurants?",
    a: "Yes. Guru's Decor handles bulk and contract dressing for offices, hotels and dining halls across Ghana — on schedule and on budget, from rods and tracks to full swag styling.",
  },
  {
    q: "What areas do you serve?",
    a: "Guru's Decor is based in Accra and serves the whole of Ghana — homes, offices and restaurants. Opening hours are Monday to Saturday, 8am–6pm.",
  },
];
