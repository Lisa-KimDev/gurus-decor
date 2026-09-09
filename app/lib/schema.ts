import { FAQS } from "../data/faqs";

export const SITE_URL = "https://www.gurusdecorgh.com";

export function buildSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#org`,
        name: "Guru's Decor",
        description:
          "Family-run window-fashion studio supplying and installing curtains, blinds, rods and tracks across Ghana since 2016.",
        url: `${SITE_URL}/`,
        telephone: "+233541431179",
        foundingDate: "2016",
        priceRange: "GH₵250 - GH₵300+",
        image: `${SITE_URL}/photos/blue-satin.jpg`,
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
        knowsAbout: [
          "Curtains",
          "Blinds",
          "Window blinds",
          "Drapery",
          "Interior design",
          "Window treatment",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: `${SITE_URL}/`,
        name: "Guru's Decor",
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Curtains, Blinds & Window Fashion in Ghana | Guru's Decor Accra",
        isPartOf: { "@id": `${SITE_URL}/#site` },
        about: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
