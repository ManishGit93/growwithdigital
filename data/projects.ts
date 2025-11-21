import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "local-coaching-institute-website",
    title: "Local Coaching Institute Website",
    summary: "Clean info website with enquiry form for a local coaching centre.",
    description:
      "A simple, fast website that clearly explains courses, timings and location — with a prominent enquiry form that connects directly to WhatsApp and email.",
    services: ["Website Development", "Local SEO", "Lead Forms"],
    coverImage:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&h=800&fit=crop",
    year: "2024",
    role: "Design & Development",
    caseStudySections: [
      {
        title: "The Result",
        content:
          "More walk-in and WhatsApp enquiries from parents searching for coaching options in their area.",
      },
    ],
  },
  {
    id: "2",
    slug: "restaurant-and-cafe-landing-page",
    title: "Restaurant & Café Landing Page",
    summary: "Mobile-first menu and booking page with Google Maps integration.",
    description:
      "A focused landing page that showcases the menu, ambience and reviews, with clear CTAs for table bookings and directions.",
    services: ["Landing Page", "Local SEO", "Maps Integration"],
    coverImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
    year: "2024",
    role: "Design & Development",
    caseStudySections: [
      {
        title: "The Result",
        content:
          "More table bookings and Google Maps visits from people searching nearby.",
      },
    ],
  },
  {
    id: "3",
    slug: "freelance-consultant-portfolio",
    title: "Freelance Consultant Portfolio",
    summary: "Personal brand-focused site for a solo consultant.",
    description:
      "A clean, position-focused website that explains services, showcases testimonials, and guides visitors to book a consultation call.",
    services: ["Website Development", "Personal Branding", "Content Structure"],
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop",
    year: "2024",
    role: "Design & Development",
    caseStudySections: [
      {
        title: "The Result",
        content:
          "Clear positioning and higher quality leads from clients who understand the consultant’s value before the first call.",
      },
    ],
  },
];

