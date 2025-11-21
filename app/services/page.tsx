"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    slug: "web-development",
    title: "Website Development",
    description:
      "Conversion-focused website development for business, portfolio, e‑commerce and campaign landing pages.",
  },
  {
    slug: "seo",
    title: "SEO Services",
    description:
      "Practical on-page, technical and local SEO to help your website show up on Google where it matters.",
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    description:
      "Ongoing updates, backups, fixes and performance checks so your website never feels stuck.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Services that cover your entire digital presence
            </h1>
            <p className="text-lg text-gray-600">
              Whether you&apos;re launching your first website or fixing an old
              one that doesn&apos;t perform, GrowWithDigital connects the dots
              between design, development and SEO so everything works together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gray-100 rounded-2xl p-6 bg-gray-50 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-gray-900 hover:underline"
                >
                  Learn more <span className="ml-1">↗</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


