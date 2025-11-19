import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work - Studio',
  description: 'Explore our portfolio of digital products and experiences we\'ve created for clients across various industries.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
