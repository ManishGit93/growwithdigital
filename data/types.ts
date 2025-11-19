export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  services: string[];
  coverImage: string;
  year: string;
  role?: string;
  caseStudySections: CaseStudySection[];
}

export interface CaseStudySection {
  title: string;
  content: string;
  images?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Contract";
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FeedPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

