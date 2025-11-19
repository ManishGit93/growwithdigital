"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Product Design",
    description: "We create intuitive, user-centered designs that solve real problems and delight users.",
  },
  {
    title: "Web Development",
    description: "Modern, performant websites and web applications built with cutting-edge technologies.",
  },
  {
    title: "Branding",
    description: "Complete brand identities that capture your essence and resonate with your audience.",
  },
  {
    title: "Strategy",
    description: "Data-driven insights and strategic thinking to guide your digital transformation.",
  },
  {
    title: "E-commerce",
    description: "Custom e-commerce solutions that convert visitors into customers and drive growth.",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Creative Director",
    bio: "Alex leads our creative vision and ensures every project tells a compelling story. With over 10 years of experience, they've worked with brands across industries.",
  },
  {
    name: "Jordan Kim",
    role: "Lead Developer",
    bio: "Jordan brings technical expertise and a passion for clean code. They specialize in building scalable, maintainable applications that perform beautifully.",
  },
  {
    name: "Sam Taylor",
    role: "Product Designer",
    bio: "Sam focuses on creating user experiences that are both beautiful and functional. They're passionate about accessibility and inclusive design.",
  },
  {
    name: "Casey Chen",
    role: "Brand Strategist",
    bio: "Casey helps clients define their brand identity and communicate their values effectively. They combine strategic thinking with creative execution.",
  },
  {
    name: "Riley Patel",
    role: "UX Researcher",
    bio: "Riley conducts user research to ensure our designs are grounded in real user needs. They're skilled at uncovering insights that drive better products.",
  },
  {
    name: "Morgan Lee",
    role: "Frontend Developer",
    bio: "Morgan transforms designs into pixel-perfect interfaces. They're passionate about performance, accessibility, and creating delightful interactions.",
  },
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every detail matters, and we take pride in delivering work that exceeds expectations.",
  },
  {
    title: "Collaborative Partnership",
    description: "We believe the best work comes from true collaboration. We become an extension of your team, invested in your success.",
  },
  {
    title: "User-Centered",
    description: "Users are at the heart of everything we do. We design and build with empathy, always considering the human experience.",
  },
  {
    title: "Continuous Learning",
    description: "The digital landscape evolves constantly. We stay curious, experiment with new approaches, and continuously improve our craft.",
  },
  {
    title: "Transparent Communication",
    description: "We believe in honest, open communication. You'll always know where things stand, and we'll always tell you what we think.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Studio
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {"We're"} a creative studio focused on crafting meaningful digital
            experiences. Founded on the belief that great design and thoughtful
            engineering can transform businesses, we partner with ambitious
            brands to bring their visions to life.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Studio was born from a simple idea: digital products should be
              both beautiful and purposeful. Too often, we saw companies
              struggling with websites and applications that looked good but
              didn&apos;t work well, or worked well but didn&apos;t connect with users on
              an emotional level.
            </p>
            <p>
              We set out to change that. By combining strategic thinking with
              creative execution, we help brands create digital experiences
              that not only meet business objectives but also delight users and
              build lasting relationships.
            </p>
            <p>
              Today, we work with clients across industries—from startups to
              established enterprises—helping them navigate the digital
              landscape with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-700">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
