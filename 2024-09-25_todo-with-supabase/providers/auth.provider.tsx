"use client";

import supabase from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const initAuth = useAuthStore((state) => state.initAuth);
  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        logIn(session.user);
      } else {
        logOut();
      }

      if (event === "INITIAL_SESSION") {
        initAuth();
      }

      if (event === "SIGNED_IN") {
        router.push("/");
      }
    });
  }, []);

  return children;
}

export default AuthProvider;
