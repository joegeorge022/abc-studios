import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Explore our portfolio of successful projects showcasing our expertise in media production, live streaming, digital marketing, and esports solutions.',
  openGraph: {
    title: 'ABC Studios Portfolio',
    description: 'Explore our portfolio of successful projects showcasing our expertise in media production, live streaming, digital marketing, and esports solutions.',
    url: '/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 