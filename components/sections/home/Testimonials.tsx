"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import Button from "@/components/ui/Button";

const marqueeQuotes = testimonials.slice(0, 5);

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6f1eb] border-t border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.35em] text-gray-500"
            >
              Happy clients
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900"
            >
              “We consider this studio an essential partner for years to come.”
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600"
            >
              Buffalo surfaces testimonials as editorial pull quotes. We’re doing the same:
              a carousel of the quotes clients repeat the most, framed with italics, bold names,
              and neat dividers to keep the cadence calm and confident.
            </motion.p>

            <Button
              href="/contact"
              variant="outline"
              className="mt-6 w-full sm:w-auto border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white"
            >
              Launch proposal planner
            </Button>
          </div>

          <div className="space-y-6">
            {marqueeQuotes.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm"
              >
                <p className="text-lg italic text-gray-800 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="h-px bg-gray-200 mb-3" />
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

