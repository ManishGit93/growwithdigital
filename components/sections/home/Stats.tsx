"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.3fr] items-center mb-12">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              A few stats
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
              Numbers from partners who trusted us with their next chapter.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600">
            We stay small on purpose so we can obsess over the details. The metrics
            we monitor most are the ones clients feel the day after launch—momentum,
            confidence, and conversion.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200/70 bg-[#fdfaf5] px-6 sm:px-10 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <motion.div
                  whileHover={{ x: 6 }}
                  className="text-3xl sm:text-4xl font-semibold text-gray-900"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  {stat.label}
                </p>
                <div className="h-px bg-gray-200/80" />
                <p className="text-sm text-gray-600">
                  {stat.description ?? "Consistently delivered across recent collaborations."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

