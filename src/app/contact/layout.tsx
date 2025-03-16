import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ABC Studios for your media production, live streaming, digital marketing, and esports needs.',
  openGraph: {
    title: 'Contact ABC Studios',
    description: 'Get in touch with ABC Studios for your media production, live streaming, digital marketing, and esports needs.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 