export interface Capability {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    id: "capability-1",
    title: "Brand Communications",
    badge: "Narratives",
    description:
      "We craft bold positioning, tone of voice, and campaigns that keep your brand consistent across every touchpoint.",
  },
  {
    id: "capability-2",
    title: "Performance Marketing",
    badge: "Acquisition",
    description:
      "Multi-channel paid media, CRO, and experimentation frameworks that turn awareness into predictable revenue.",
  },
  {
    id: "capability-3",
    title: "Social & Influence",
    badge: "Community",
    description:
      "Content systems, influencer partnerships, and editorial storytelling that build belief and loyalty at scale.",
  },
  {
    id: "capability-4",
    title: "Product & Web",
    badge: "Experience",
    description:
      "High-performing websites and digital products with obsessive attention to speed, accessibility, and craft.",
  },
  {
    id: "capability-5",
    title: "CXO Branding",
    badge: "Leadership",
    description:
      "Executive visibility programs that position founders and teams as the face of the category.",
  },
  {
    id: "capability-6",
    title: "SEO & Content",
    badge: "Visibility",
    description:
      "Audience research, editorial roadmaps, and technical SEO that deliver compounding organic traffic.",
  },
];

