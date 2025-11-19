import { Job } from "./types";

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Product Designer",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "We're looking for a Senior Product Designer to lead design initiatives across multiple client projects. You'll work closely with our development team and clients to create exceptional digital experiences.",
    responsibilities: [
      "Lead design projects from concept to implementation",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Collaborate with developers to ensure design quality",
      "Present design solutions to clients and stakeholders",
    ],
    requirements: [
      "5+ years of product design experience",
      "Strong portfolio demonstrating UX/UI expertise",
      "Proficiency in Figma, Sketch, or similar tools",
      "Experience with design systems and component libraries",
      "Excellent communication and presentation skills",
    ],
  },
  {
    id: "2",
    title: "Full-Stack Developer",
    location: "Remote",
    type: "Full-time",
    description: "Join our development team to build modern web applications using Next.js, TypeScript, and cutting-edge technologies. You'll work on diverse projects and have the opportunity to shape technical decisions.",
    responsibilities: [
      "Develop responsive web applications using Next.js and React",
      "Build and maintain RESTful APIs",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and technical planning",
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Strong proficiency in TypeScript, React, and Next.js",
      "Experience with Tailwind CSS or similar CSS frameworks",
      "Knowledge of database design and API development",
      "Familiarity with Git and modern development workflows",
    ],
  },
  {
    id: "3",
    title: "Brand Strategist",
    location: "Hybrid",
    type: "Full-time",
    description: "We're seeking a Brand Strategist to help our clients define and communicate their brand identity. You'll work on brand positioning, messaging, and visual identity projects.",
    responsibilities: [
      "Develop brand strategies and positioning frameworks",
      "Conduct market research and competitive analysis",
      "Create brand guidelines and style guides",
      "Collaborate with designers on visual identity development",
      "Present strategic recommendations to clients",
    ],
    requirements: [
      "4+ years of brand strategy or marketing experience",
      "Strong analytical and strategic thinking skills",
      "Excellent written and verbal communication",
      "Experience with brand workshops and client presentations",
      "Portfolio demonstrating successful brand projects",
    ],
  },
];

