"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About GrowWithDigital
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed space-y-3">
            GrowWithDigital started with a simple idea — most small businesses
            don&apos;t need a complicated website. They need a clean, fast, and
            trustworthy digital home that helps customers find them and contact
            them easily.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            With a background in modern frontend development and a strong focus
            on SEO, we combine design, code and search strategy to deliver
            websites that do more than just &quot;look nice&quot;.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To help small businesses and creators move from &quot;just existing
              online&quot; to actually generating leads and sales through clear,
              effective websites and SEO.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What we care about
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Clarity",
                  copy: "We keep communication simple and honest.",
                },
                {
                  title: "Performance",
                  copy: "We care about speed, UX and real-world results.",
                },
                {
                  title: "Partnership",
                  copy: "We like long-term client relationships, not one-time transactions.",
                },
                {
                  title: "Learning",
                  copy: "We constantly improve our skills to keep your website up to date with modern practices.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who we&apos;re a good fit for
            </h2>
            <p className="text-lg text-gray-600">
              We work best with teams who value clear communication, practical
              strategy, and websites that support real business goals.
            </p>
          </div>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Local businesses who want more enquiries from search and WhatsApp.</li>
            <li>Coaches, trainers and consultants building a personal brand.</li>
            <li>Small e-commerce brands who need a fast, trustworthy storefront.</li>
            <li>Agencies looking for a white-label web + SEO partner.</li>
          </ul>
        </div>
      </section>

      {/* Mini Team */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who you&apos;ll work with
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-700">
                M
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-1">
                  Founder &amp; Lead Developer
                </p>
                <h3 className="text-xl font-semibold text-gray-900">Manish</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              &quot;I handle the strategy, design direction and the actual development —
              so you always know who is working on your project.&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
