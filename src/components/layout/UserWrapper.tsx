"use client";

import { useUser } from "@clerk/nextjs";
import { ReactNode } from "react";

type UserWrapperProps = {
  children: (user: ReturnType<typeof useUser>) => ReactNode;
};

export default function UserWrapper({ children }: UserWrapperProps) {
  const user = useUser();
  return <>{children(user)}</>;
} 