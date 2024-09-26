"use client";
import SignInForm from "@/components/SignInForm";
import { useAuthStore } from "@/zustand/auth.store";
import React, { PropsWithChildren } from "react";

function AuthenticatedLayout({ children }: PropsWithChildren) {
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isAuthInitialized) return null;
  if (!isLoggedIn) return <SignInForm />;

  return children;
}

export default AuthenticatedLayout;
