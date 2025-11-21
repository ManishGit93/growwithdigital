"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navGroups = [
  {
    title: "Studio",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Feed", href: "/feed" },
      { label: "Jobs", href: "/jobs" },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Instagram", href: "https://instagram.com", external: true },
    ],
  },
];

const partners = ["Shopify Partner", "Mailchimp Partner", "Webflow Expert"];

export default function Footer() {
  return (
    <footer className="bg-[#f6f1eb] border-t border-gray-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              Built in Brighton · Remote worldwide
            </p>
            <h3 className="text-2xl font-semibold text-gray-900">
              We build brands and beautiful websites for teams with something to prove.
            </h3>
            <a
              href="mailto:hello@studio.com"
              className="text-lg text-gray-900 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900"
            >
              hello@studio.com
            </a>
          </div>
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => {
                  const content = (
                    <span className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      {link.label}
                    </span>
                  );
                  return (
                    <li key={link.href}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {content}
                        </a>
                      ) : (
                        <Link href={link.href}>{content}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
            We are proud to be recommended by these fine folks
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-800">
            {partners.map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 rounded-full border border-gray-300/80"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200/70 pt-6"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Studio. Registered in England. Company No. 06048231. VAT 899 6307 54.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="/legal">Legal</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

