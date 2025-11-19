export interface Offering {
  id: string;
  title: string;
  summary: string;
  cta: string;
}

export const offerings: Offering[] = [
  {
    id: "offering-1",
    title: "Brand Strategy & Identity",
    summary:
      "Research-backed positioning, naming, messaging, and visual systems that set the tone for your next chapter.",
    cta: "Explore brand work",
  },
  {
    id: "offering-2",
    title: "Campaigns & Content",
    summary:
      "Always-on content engines, hero launches, and editorial operations that keep audiences inspired every week.",
    cta: "See how we launch",
  },
  {
    id: "offering-3",
    title: "Digital Experiences",
    summary:
      "Websites, landing pages, and product surfaces engineered for conversion, credibility, and effortless UX.",
    cta: "View experiences",
  },
  {
    id: "offering-4",
    title: "Growth Partnerships",
    summary:
      "Fractional growth teams embedded with you to own paid media, lifecycle, analytics, and revenue experiments.",
    cta: "Scale with us",
  },
];

