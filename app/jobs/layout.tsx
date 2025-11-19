import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Studio",
  description: "Join our team. We're always looking for talented people who share our passion for creating exceptional digital experiences.",
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

