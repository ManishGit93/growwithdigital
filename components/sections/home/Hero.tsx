"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { stats } from "@/data/stats";

export default function Hero() {
  const heroStats = stats.slice(0, 3);

  return (
    <section className="relative isolate overflow-hidden bg-[#f6f1eb]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none" />
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#fbce83]/40 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32 flex flex-col gap-16">
        <div className="space-y-8 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gray-600"
          >
            Studio / Brighton · Remote worldwide
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-900"
          >
            We build brands and beautifully opinionated websites for teams that
            need to look their very best.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl"
          >
            From first sketch to shipped product we pair design, copy, and code
            into one deliberate process. Based in the UK, collaborating with founders
            and marketing teams everywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button href="/contact" variant="primary" className="text-base">
              Launch a project
            </Button>
            <Button
              href="/work"
              variant="ghost"
              className="border border-gray-300 bg-white/60 hover:bg-white text-gray-900"
            >
              Browse the work
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-gray-300/60 pt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            A few numbers we care about
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:max-w-3xl">
            {heroStats.map((stat) => (
              <div key={stat.id} className="space-y-1">
                <motion.div
                  className="text-3xl sm:text-4xl font-semibold text-gray-900"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

