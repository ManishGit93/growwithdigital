import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import SectionShell from '@/components/ui/SectionShell';
import { feedPosts } from '@/data/feed';

interface FeedPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return feedPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: FeedPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = feedPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Studio Feed`,
    description: post.excerpt,
  };
}

export default async function FeedPostPage({ params }: FeedPostPageProps) {
  const { slug } = await params;
  const post = feedPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <SectionShell className="py-16 bg-white" maxWidth="4xl">
      <article className="max-w-3xl mx-auto text-gray-900">
        {/* Back Link */}
        <Link
          href="/feed"
          className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to feed
        </Link>

        {/* Post Header */}
        <div className="mb-8">
          <div className="text-gray-500 mb-3">{formattedDate}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600">{post.excerpt}</p>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <div
            className="leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/feed"
            className="text-lg font-medium hover:underline"
          >
            ← Read more articles
          </Link>
        </div>
      </article>
    </SectionShell>
  );
}
