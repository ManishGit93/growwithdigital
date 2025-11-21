"use client";

import { motion } from "framer-motion";

export default function SEOServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Services / SEO
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              SEO that helps you show up where it matters
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              SEO is not magic. It&apos;s the process of making your website
              discoverable and relevant for the people already searching for
              what you offer. We focus on practical, long-term SEO that matches
              your business goals.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                On-page SEO
              </h2>
              <p className="text-gray-700">
                Optimizing your titles, headings, content structure and internal
                links so search engines understand what each page is about.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Technical SEO
              </h2>
              <p className="text-gray-700">
                Fixing speed, crawl issues, mobile usability, and indexability
                so search engines can access and trust your site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Local SEO
              </h2>
              <p className="text-gray-700">
                Setting up and optimizing your Google Business Profile and local
                citations so nearby customers can find you when they search.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Content direction
              </h2>
              <p className="text-gray-700">
                Helping you decide what blog posts and pages to create to
                attract the right visitors and answer the questions they&apos;re
                already asking.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


