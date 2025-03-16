import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles, insights, and updates from ABC Studios about media production, live streaming, digital marketing, and industry trends.',
  openGraph: {
    title: 'ABC Studios Blog',
    description: 'Read the latest articles, insights, and updates from ABC Studios about media production, live streaming, digital marketing, and industry trends.',
    url: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 