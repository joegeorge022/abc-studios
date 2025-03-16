import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esports',
  description: 'Watch live esports streams, view upcoming tournaments, and stay updated with the latest gaming competitions hosted by ABC Studios.',
  openGraph: {
    title: 'Esports | ABC Studios',
    description: 'Watch live esports streams, view upcoming tournaments, and stay updated with the latest gaming competitions hosted by ABC Studios.',
    url: '/esports',
  },
};

export default function EsportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 