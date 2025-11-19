import Link from "next/link";
import Card from "@/components/ui/Card";
import { FeedPost } from "@/data/types";

interface FeedItemProps {
  post: FeedPost;
}

export default function FeedItem({ post }: FeedItemProps) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/feed/${post.slug}`}>
      <Card>
        <div className="p-6">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
          <span className="text-sm font-medium text-gray-900 dark:text-white hover:underline">
            Read more →
          </span>
        </div>
      </Card>
    </Link>
  );
}

