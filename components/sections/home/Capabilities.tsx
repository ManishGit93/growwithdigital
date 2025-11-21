"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/capabilities";

export default function Capabilities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Go-to partner for brand, growth, and experience.
          </h2>
          <p className="text-lg text-gray-600">
            Modular teams spanning strategy, creative, content, and performance
            drop in exactly where you need them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {capability.badge}
                  </span>
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700"
                    whileHover={{ rotate: 15 }}
                  >
                    ↗
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {capability.title}
                </h3>
                <p className="text-gray-600 flex-1">
                  {capability.description}
                </p>
                <div className="text-sm font-medium text-gray-900">
                  Embedded specialists • Quarterly sprints
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

