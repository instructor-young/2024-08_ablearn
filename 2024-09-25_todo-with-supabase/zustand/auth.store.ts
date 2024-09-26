"use client";

import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthStoreState {
  isAuthInitialized: boolean;
  isLoggedIn: boolean;
  currentUser: null | User;
  initAuth: () => void;
  logIn: (user: User) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthStoreState>((set, get) => ({
  isAuthInitialized: false,
  isLoggedIn: false,
  currentUser: null,
  initAuth: () => set({ isAuthInitialized: true }),
  logIn: (user: User) => set({ currentUser: user, isLoggedIn: true }),
  logOut: () => set({ currentUser: null, isLoggedIn: false }),
}));
