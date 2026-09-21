import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sandrail — Local-first AI eval harness",
    template: "%s · Sandrail",
  },
  description:
    "Local-first AI eval harness / agent sandbox CLI — suite-driven regressions with network denied by default. Early OSS · pre-revenue · MIT · v0.2.0.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Sandrail — Local-first AI eval harness",
    description:
      "Run YAML/JSON eval suites against mock, allow-listed subprocess, or optional OpenAI-compatible backends. Secure defaults. Early OSS · pre-revenue.",
    type: "website",
    url: siteUrl,
    siteName: "Sandrail",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sandrail — Local-first AI eval harness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandrail — Local-first AI eval harness",
    description:
      "Suite-driven agent regressions with network denied by default. Early OSS · pre-revenue · MIT · v0.2.0.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
