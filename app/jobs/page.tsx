'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionShell from '@/components/ui/SectionShell';
import JobCard from '@/components/jobs/JobCard';
import { jobs } from '@/data/jobs';

export default function JobsPage() {
  return (
    <SectionShell className="py-20 bg-white" maxWidth="6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Careers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">Join Our Team</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We&apos;re always looking for talented people who are passionate about design,
            technology, and creating exceptional digital experiences. If you&apos;re driven,
            curious, and love solving problems, we&apos;d love to hear from you.
          </p>
        </div>

        {jobs.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-50 rounded-xl p-12 border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">No Open Positions Right Now</h2>
              <p className="text-gray-600 mb-6">
                We don&apos;t have any open roles at the moment, but we&apos;re always interested
                in meeting talented people. Feel free to send us your portfolio and a note
                about what you&apos;re looking for.
              </p>
              <a
                href="mailto:jobs@studio.com?subject=Speculative Application"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Speculative Application
              </a>
            </div>
          </div>
        )}

        {/* Culture Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Remote-First",
                copy:
                  "Work from anywhere. We&apos;ve been remote since day one and have built a culture that supports flexibility.",
              },
              {
                title: "Growth & Learning",
                copy:
                  "Budget for courses, conferences, and books. We invest in your professional development.",
              },
              {
                title: "Diverse Projects",
                copy: "Work on varied projects across industries. You&apos;ll never be bored.",
              },
              {
                title: "Great Benefits",
                copy:
                  "Competitive salary, health insurance, unlimited PTO, and equipment budget.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
