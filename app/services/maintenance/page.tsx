"use client";

import { motion } from "framer-motion";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Services / Maintenance
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Ongoing website care &amp; maintenance
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A website is not a one-time project. Technology, security and
              content needs keep changing. Our maintenance plans keep everything
              updated, secure and running smoothly.
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
                Plans overview
              </h2>
              <p className="text-gray-700 mb-4">
                Different businesses need different levels of care. We group our
                maintenance into three simple plan types:
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>
                  <strong>Basic Care:</strong> For small sites that need
                  occasional updates and backups.
                </li>
                <li>
                  <strong>Standard Care:</strong> For active business websites
                  with regular content changes and checkups.
                </li>
                <li>
                  <strong>Premium Care:</strong> For growing businesses that
                  need priority support and performance monitoring.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


