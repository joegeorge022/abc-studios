import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ABC Studios',
  description: 'Our terms of service outline the rules and guidelines for using ABC Studios services, website, and content.',
  openGraph: {
    title: 'Terms of Service | ABC Studios',
    description: 'Our terms of service outline the rules and guidelines for using ABC Studios services, website, and content.',
    url: '/terms',
    siteName: 'ABC Studios',
    type: 'website',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 