import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Our Team',
  description: 'Explore career opportunities at ABC Studios and join our team of media production, live streaming, and digital marketing experts.',
  openGraph: {
    title: 'Careers at ABC Studios',
    description: 'Explore career opportunities at ABC Studios and join our team of media production, live streaming, and digital marketing experts.',
    url: '/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 