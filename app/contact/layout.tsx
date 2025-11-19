import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Studio",
  description: "Have a project in mind? Get in touch and we'll discuss how we can help bring your vision to life.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

