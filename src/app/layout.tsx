import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import AIChatWrapper from '@/components/AIChatWrapper';
import AccessibilityControls from '@/components/layout/AccessibilityControls';
import { ClerkProvider } from '@clerk/nextjs';
import { LanguageProvider } from '@/utils/languageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: '%s | ABC Studios',
    default: 'ABC Studios - Media Production, Live Streaming, and Esports Services',
  },
  description: 'ABC Studios specializes in live streaming, media production, digital marketing, event management and Esports services. Bringing your vision to life.',
  keywords: ['live streaming', 'media production', 'digital marketing', 'event management', 'esports'],
  authors: [{ name: 'ABC Studios Team' }],
  generator: 'Next.js',
  applicationName: 'ABC Studios',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'ABC Studios',
    locale: 'en_US',
    images: ['/hero-bg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <LanguageProvider>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased overflow-x-hidden w-full`}>
            <Navbar />
            <main className="min-h-screen overflow-x-hidden w-full">
              {children}
            </main>
            <Footer />
            <AIChatWrapper />
            <AccessibilityControls />
          </body>
        </html>
      </LanguageProvider>
    </ClerkProvider>
  );
}
