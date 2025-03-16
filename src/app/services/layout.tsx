import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Discover the comprehensive range of services offered by ABC Studios including live streaming, media production, digital marketing, and esports.',
  openGraph: {
    title: 'ABC Studios Services',
    description: 'Discover the comprehensive range of services offered by ABC Studios including live streaming, media production, digital marketing, and esports.',
    url: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 