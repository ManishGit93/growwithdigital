"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { stats } from "@/data/stats";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const heroStats = stats.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <motion.div
        className="absolute inset-0 opacity-40 dark:opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.15), transparent 60%)",
            "radial-gradient(circle at 80% 70%, rgba(236,72,153,0.15), transparent 60%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="space-y-6">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400"
          >
            Creativity Driven
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            We turn ambitious brands into category leaders.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
          >
            Strategy, creative, and growth embedded with your team. We deliver
            bold narratives, high-performing digital experiences, and campaigns
            that actually move metrics.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
            <Button href="/work" variant="outline">
              View our work
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            {heroStats.map((stat) => (
              <div key={stat.id} className="space-y-1">
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-800 dark:to-gray-900 text-white p-10 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
          <div className="relative space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
              Studio Snapshot
            </p>
            <h3 className="text-2xl font-semibold">
              Turning performance, product, and brand into one continuous story.
            </h3>
            <p className="text-gray-300">
              Embedded teams driving product-market fit, go-to-market, and
              evergreen growth. We deploy pods across brand, product, and
              revenue so everything feels connected.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Operating model
                </p>
                <p className="font-semibold">Fractional + Embedded</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Response time
                </p>
                <p className="font-semibold">Same week kickoff</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Collaboration
                </p>
                <p className="font-semibold">Slack + Figma + Notion</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Availability
                </p>
                <p className="font-semibold">2 open partner slots</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

