"use client";

import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React from "react";

function LoggedInOnlyLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isAuthInitialized) return <div>... 로그인 여부 확인 중 ...</div>;
  if (!isLoggedIn) {
    router.replace("/log-in");

    return null;
  }

  return children;
}

export default LoggedInOnlyLayout;
