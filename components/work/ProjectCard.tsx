"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/work/${project.slug}`}>
      <Card>
        <div className="aspect-video bg-gray-200 overflow-hidden relative">
          {!imageError ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setImageError(true)}
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
              <span className="text-sm">Image not available</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <Tag key={service}>{service}</Tag>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}

