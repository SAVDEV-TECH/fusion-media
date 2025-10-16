 import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://fusion-media-wdxt-git-main-saviour-s-projects-fae96d2e.vercel.app/"), // ✅ change to your live site URL
  title: {
    default: "Fusion Media | Digital Branding Agency",
    template: "%s | Fusion Media",
  },
  description:
    "Fusion Media helps brands grow through storytelling, creative design, and digital strategy.",
  keywords: [
    "Fusion Media",
    "branding agency",
    "digital marketing",
    "web design",
    "SEO",
    "content strategy",
  ],
  authors: [{ name: "Fusion Media", url: "https://fusion-media-wdxt-git-main-saviour-s-projects-fae96d2e.vercel.app/" }],
  creator: "Fusion Media",
  publisher: "Fusion Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      // "max-image-preview": "large",
      // "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://fusion-media-wdxt-git-main-saviour-s-projects-fae96d2e.vercel.app/",
    title: "Fusion Media | Digital Branding Agency",
    description:
      "We build bold brands through design, marketing, and storytelling.",
    siteName: "Fusion Media",
    images: [
      {
        url: "/FUSION MIDEA BRANDING3.png",
        width: 1200,
        height: 630,
        alt: "Fusion Media Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fusionmedia", // ✅ replace with your handle if you have one
    creator: "@fusionmedia",
    title: "Fusion Media | Digital Branding Agency",
    description:
      "We build bold brands through design, marketing, and storytelling.",
    images: ["/FUSION MIDEA BRANDING3.png"],
  },
  alternates: {
    canonical: "https://fusion-media-wdxt-git-main-saviour-s-projects-fae96d2e.vercel.app/",
  },
  icons: {
    icon: "//FUSION MIDEA BRANDING3.png",
    shortcut: "/favicon.ico",
    apple: "//FUSION MIDEA BRANDING3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
