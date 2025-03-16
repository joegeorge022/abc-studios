import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ABC Studios',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information when you use our services.',
  openGraph: {
    title: 'Privacy Policy | ABC Studios',
    description: 'Our privacy policy outlines how we collect, use, and protect your personal information when you use our services.',
    url: '/privacy',
    siteName: 'ABC Studios',
    type: 'website',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 