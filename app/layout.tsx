import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Information Systems Student",
  description:
    "Information Systems student passionate about fullstack web development and building scalable web applications.",
  keywords: [
    "portfolio",
    "web developer",
    "software engineer",
    "fullstack developer",
    "sistem informasi",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Information Systems Student",
    description:
      "Information Systems student passionate about fullstack web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
