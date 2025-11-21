'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionShell from '@/components/ui/SectionShell';
import ProjectCard from '@/components/work/ProjectCard';
import { projects } from '@/data/projects';

const categories = ['All', 'Branding', 'Web Development', 'Product Design', 'Mobile App'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project =>
      project.services.some(service =>
        service.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(service.toLowerCase())
      )
    );

  return (
    <SectionShell className="py-24 bg-white" maxWidth="7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Selected projects
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Our Work
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects we&apos;re proud to have worked on with amazing clients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/10'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </motion.div>
    </SectionShell>
  );
}
