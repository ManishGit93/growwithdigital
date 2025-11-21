'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionShell from '@/components/ui/SectionShell';
import FeedItem from '@/components/feed/FeedItem';
import { feedPosts } from '@/data/feed';

export default function FeedPage() {
  return (
    <SectionShell className="py-20 bg-[#f6f1eb]" maxWidth="6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Studio journal
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">Studio Feed</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, insights, and updates from our team on design, development, and building digital products.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {feedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeedItem post={post} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
