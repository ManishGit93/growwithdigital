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
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900"
            >
              What our clients say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600"
            >
              A few words from clients we&apos;ve worked with on websites, SEO, and ongoing
              support. Real projects, clear communication, and a focus on results.
            </motion.p>
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

