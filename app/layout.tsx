import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "GrowWithDigital – Website Development & SEO Agency",
  description:
    "GrowWithDigital is a website development and SEO agency helping small businesses and startups build fast, modern, and search-ready websites that actually bring leads. Based in India and working remotely with clients across the world.",
  openGraph: {
    title: "GrowWithDigital – Website Development & SEO Agency",
    description:
      "Fast, modern, and search-ready websites that actually bring leads. Based in India, working with clients worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
