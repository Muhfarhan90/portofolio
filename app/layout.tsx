import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
 {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CGNK48T3H7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CGNK48T3H7');
          `}
        </Script>
    </html>
  );
}
