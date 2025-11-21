"use client";

import { motion } from "framer-motion";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Services / Website Development
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Conversion-focused website development
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your website is often the first impression a customer has of your
              business. We build modern, mobile-first websites that load fast,
              look professional, and are easy for your visitors to navigate.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                What we build
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Single-page landing pages</li>
                <li>4–8 page business websites</li>
                <li>E-commerce or product sites</li>
                <li>Portfolio sites for individuals</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                What you get
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Custom design, not just a random template</li>
                <li>Responsive layouts for mobile, tablet, desktop</li>
                <li>Basic on-page SEO setup</li>
                <li>Integration with forms, WhatsApp, email, etc.</li>
              </ul>
            </div>
          </motion.div>

          <div className="mt-4 rounded-2xl bg-gray-50 border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Is this for me?
            </h2>
            <p className="text-gray-700">
              If you feel embarrassed to share your current website link, or
              your business still doesn&apos;t have a proper website, this
              service is for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


