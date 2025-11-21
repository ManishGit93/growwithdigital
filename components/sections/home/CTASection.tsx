"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#f6f1eb]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-[32px] border border-gray-200/70 bg-[#f6f1eb] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-rose-200/70 blur-3xl" />
            <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-yellow-200/60 blur-3xl" />
          </div>
          <div className="relative z-10 grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Final step
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Ready to bring your business online the right way?
              </h2>
              <p className="text-base text-gray-600 max-w-xl">
                Share a few details about your business and we&apos;ll suggest the best
                website and SEO plan for you — no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="primary">
                  Get a Free Consultation
                </Button>
                <Button
                  href="/work"
                  variant="ghost"
                  className="border border-gray-300 bg-white/70 hover:bg-white text-gray-900"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Current capacity
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  Booking May & June
                </p>
              </div>
              <div className="h-px bg-gray-200" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Avg. uplift
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  +38% conversion
                </p>
              </div>
              <div className="h-px bg-gray-200" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Referrals
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  80% new business
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

