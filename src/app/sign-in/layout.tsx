import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your ABC Studios account",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 