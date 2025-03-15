import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Inter } from 'next/font/google'

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
    template: '%s | ABC Studios',
    default: 'ABC Studios - Live Streaming, Media Production & Digital Marketing',
  },
  description: 'ABC Studios specializes in professional live streaming, media production, digital marketing, and event management services. Discover how we can elevate your brand with our creative solutions.',
  keywords: ['live streaming', 'media production', 'digital marketing', 'event management', 'esports'],
  authors: [{ name: 'ABC Studios Team' }],
  generator: 'Next.js',
  applicationName: 'ABC Studios',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abc-studios.com',
    siteName: 'ABC Studios',
    title: 'ABC Studios - Live Streaming, Media Production & Digital Marketing',
    description: 'Professional live streaming, media production, and digital marketing services for your business.',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'ABC Studios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABC Studios - Live Streaming, Media Production & Digital Marketing',
    description: 'Professional live streaming, media production, and digital marketing services for your business.',
    images: ['/hero-bg.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
