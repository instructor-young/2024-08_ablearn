"use client";

import api from "@/api/client.api";
import { useAuthStore } from "@/zustand/auth.store";
import { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const logIn = useAuthStore((state) => state.logIn);

  useEffect(() => {
    api.auth.refreshToken().then((isRefreshTokenSuccess) => {
      if (isRefreshTokenSuccess) {
        logIn();
      }

      initializeAuth();
    });
  }, []);

  return children;
}

export default AuthProvider;
