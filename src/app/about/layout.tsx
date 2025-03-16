import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ABC Studios, our mission, values, and the talented team behind our media production and digital services.',
  openGraph: {
    title: 'About ABC Studios',
    description: 'Learn about ABC Studios, our mission, values, and the talented team behind our media production and digital services.',
    url: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 