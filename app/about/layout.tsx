import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Studio",
  description: "Learn about our studio, our team, and what drives us to create exceptional digital experiences.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

