import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your personalized ABC Studios dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 