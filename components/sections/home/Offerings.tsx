"use client";

import { motion } from "framer-motion";
import { offerings } from "@/data/offerings";

export default function Offerings() {
  return (
    <section className="py-20 bg-[#f6f1eb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What we do at GrowWithDigital
            </h2>
            <p className="mt-3 text-gray-600">
              One partner for your website, SEO, and ongoing support.
            </p>
          </div>
          <p className="text-gray-600 max-w-xl">
            From first build to ongoing optimisation, we help you move from
            “just having a website” to a digital presence that actually brings
            enquiries and sales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-4">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {offering.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {offering.summary}
              </p>
              <button className="text-sm font-semibold text-gray-900 inline-flex items-center gap-2">
                {offering.cta}
                <span className="text-lg">↗</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

