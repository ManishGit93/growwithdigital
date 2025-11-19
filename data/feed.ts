import { FeedPost } from "./types";

export const feedPosts: FeedPost[] = [
  {
    id: "1",
    slug: "designing-for-accessibility",
    title: "Designing for Accessibility: Beyond Compliance",
    date: "2024-03-15",
    excerpt: "Accessibility isn't just about meeting standards—it's about creating experiences that work for everyone. Here's how we approach inclusive design.",
    content: `Accessibility in digital design has often been treated as a checkbox item, something to address at the end of a project to meet compliance requirements. But true accessibility is about creating experiences that are genuinely usable by everyone, regardless of their abilities or circumstances.

When we start a new project, accessibility considerations are built into our process from day one. This means thinking about keyboard navigation, screen reader compatibility, color contrast, and text alternatives from the initial wireframes—not as an afterthought.

One of the most important lessons we've learned is that accessible design is often better design for everyone. Clear navigation, readable typography, and intuitive interactions benefit all users, not just those using assistive technologies.

We've also found that involving people with disabilities in our user testing process leads to better products. Their feedback often reveals usability issues that we might have missed, and their perspectives help us create more thoughtful, inclusive experiences.

The tools and techniques for accessible design are constantly evolving, and staying current requires ongoing learning. But the fundamental principle remains the same: design with empathy, test with real users, and never assume that your experience is universal.`,
  },
  {
    id: "2",
    slug: "the-future-of-web-animation",
    title: "The Future of Web Animation",
    date: "2024-02-28",
    excerpt: "Subtle motion can transform a good interface into a great one. We explore how animation enhances user experience without overwhelming.",
    content: `Animation on the web has come a long way from the flashy, distracting effects of the early 2000s. Today, thoughtful animation serves a purpose: it guides attention, provides feedback, and creates a sense of polish that makes digital experiences feel more human.

The key is subtlety. A gentle fade-in as content loads, a smooth transition between states, or a micro-interaction that confirms an action—these small details add up to create an experience that feels intentional and refined.

We're particularly excited about the possibilities that Framer Motion and other modern animation libraries bring to React applications. The ability to orchestrate complex animations with simple declarative code opens up new creative possibilities while maintaining performance.

But animation isn't just about aesthetics. It can communicate hierarchy, show relationships between elements, and provide crucial feedback. When a button responds to a click with a subtle scale animation, users understand that their action was registered. When a form field shakes slightly on validation error, the feedback is immediate and clear.

As we look to the future, we see animation becoming even more integrated into the design process. Motion design will be considered alongside typography and color as a fundamental design element, not an optional enhancement.`,
  },
  {
    id: "3",
    slug: "building-design-systems",
    title: "Building Design Systems That Scale",
    date: "2024-02-10",
    excerpt: "A well-crafted design system is the foundation of consistent, maintainable digital products. Here's our approach to creating systems that grow with projects.",
    content: `Design systems have become essential for teams building digital products at scale. But creating a system that's both comprehensive and flexible is a challenge. Too rigid, and it stifles creativity. Too loose, and it fails to provide the consistency it was meant to ensure.

Our approach starts with understanding the unique needs of each project. We don't believe in one-size-fits-all design systems. Instead, we build systems that reflect the brand's personality while providing the structure needed for efficient development.

The foundation of any good design system is a thoughtful component library. We start with the basics—buttons, inputs, cards—and build up to more complex patterns. Each component is designed to be composable, allowing designers and developers to create new variations without starting from scratch.

Documentation is crucial. A design system is only as good as its documentation. We create clear guidelines for when and how to use each component, along with code examples that developers can reference. This documentation becomes a shared language between design and development teams.

But perhaps the most important aspect of a design system is that it's living. As projects evolve, the system should evolve with them. We establish processes for proposing new components, updating existing ones, and deprecating patterns that no longer serve their purpose.

The result is a system that provides consistency without constraining creativity, and structure without sacrificing flexibility.`,
  },
  {
    id: "4",
    slug: "client-collaboration",
    title: "The Art of Client Collaboration",
    date: "2024-01-22",
    excerpt: "Great work comes from great partnerships. We share our approach to building collaborative relationships with clients.",
    content: `The best projects we've worked on weren't just about executing a brief—they were true collaborations with clients who became partners in the creative process. Building these relationships requires intentional effort and a commitment to transparency.

We start every project with a discovery phase that goes beyond gathering requirements. We want to understand not just what clients want, but why they want it. What are their business goals? What challenges are they facing? What does success look like for them?

This understanding becomes the foundation for everything that follows. When we present design solutions, we can explain not just what we've created, but how it addresses their specific needs and goals. This alignment makes feedback more productive and decisions more confident.

Communication is key. We establish regular check-ins, share work-in-progress frequently, and create opportunities for clients to provide input at the right moments. We've found that involving clients in the process—not just presenting finished work—leads to better outcomes and stronger relationships.

But collaboration also means being honest when we disagree. If we think a client's request might not serve their goals, we say so. We provide alternatives and explain our reasoning. This candor, delivered with respect, builds trust and leads to better work.

The result is projects that clients feel ownership over, not just approval of. They understand the decisions that were made and why, which makes them better advocates for the work and better partners for future projects.`,
  },
  {
    id: "5",
    slug: "sustainability-in-digital",
    title: "Sustainability in Digital Design",
    date: "2024-01-05",
    excerpt: "The environmental impact of digital products is real. We explore how thoughtful design and development can reduce our carbon footprint.",
    content: `When we think about sustainability, digital products might not be the first thing that comes to mind. But the internet has a significant environmental impact—data centers consume massive amounts of energy, and the devices we use to access digital content have their own environmental costs.

As designers and developers, we have a responsibility to consider the environmental impact of the work we create. This means thinking about performance optimization, efficient code, and user behavior patterns that reduce energy consumption.

One of the most effective ways to reduce the environmental impact of a website is to make it faster. Faster sites use less energy, both on the server side and the client side. This means prioritizing performance from the start—optimizing images, minimizing JavaScript, and choosing efficient hosting solutions.

We also consider the lifecycle of the products we build. Are we creating something that will need constant updates and maintenance, or something that can evolve gracefully? Are we using technologies that will remain viable, or trendy solutions that might need to be rebuilt in a few years?

But sustainability isn't just about technical optimization. It's also about creating products that serve real needs and provide lasting value. The most sustainable product is one that doesn't need to be replaced because it continues to serve its purpose well.

We're still learning how to measure and improve the sustainability of our work, but we're committed to making it a priority. Every project is an opportunity to do better, and we're excited about the possibilities that thoughtful design and development can unlock.`,
  },
];

