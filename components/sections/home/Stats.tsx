"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6f1eb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-3">
            Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            The kind of results we aim for
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <motion.div
                  className="relative flex items-center justify-center w-40 h-40 rounded-full bg-gray-100 shadow-sm"
                  style={{
                    // animate CSS custom property --progress from 0 to target
                    // and use it to drive the conic-gradient fill
                    background:
                      "conic-gradient(#14b8a6 0deg calc(var(--progress) * 3.6deg), #e5e7eb calc(var(--progress) * 3.6deg) 360deg)",
                  }}
                  initial={{ "--progress": 0 } as any}
                  whileInView={{ "--progress": stat.progress ?? 100 } as any}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center w-36 h-36 rounded-full bg-white">
                    <span className="text-3xl font-semibold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                </motion.div>
                <p className="text-xs tracking-[0.25em] text-gray-600 uppercase max-w-[11rem]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

