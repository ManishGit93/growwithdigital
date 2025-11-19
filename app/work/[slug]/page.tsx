import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Studio`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
          >
            ← Back to all work
          </Link>
          <div className="mb-6">
            {project.services.map((service) => (
              <Tag key={service} className="mr-2 mb-2">
                {service}
              </Tag>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
            {project.role && (
              <div>
                <span className="font-semibold">Role:</span> {project.role}
              </div>
            )}
            <div>
              <span className="font-semibold">Year:</span> {project.year}
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="space-y-16">
          {project.caseStudySections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
              {section.images && section.images.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative"
                    >
                      <Image
                        src={image}
                        alt={`${section.title} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s work together to create something meaningful.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
