export interface Offering {
  id: string;
  title: string;
  summary: string;
  cta: string;
}

export const offerings: Offering[] = [
  {
    id: "offering-1",
    title: "Website Development",
    summary:
      "Conversion-focused websites using modern technologies like Next.js, React and WordPress. Every site is responsive, fast, and built to support your growth.",
    cta: "Learn about web development",
  },
  {
    id: "offering-2",
    title: "SEO Services",
    summary:
      "On-page, technical and local SEO so your website shows up on Google when your ideal customers are searching.",
    cta: "Explore SEO services",
  },
  {
    id: "offering-3",
    title: "Maintenance & Support",
    summary:
      "Ongoing updates, backups, fixes and performance checks so your website never feels stuck or outdated.",
    cta: "View maintenance plans",
  },
];

