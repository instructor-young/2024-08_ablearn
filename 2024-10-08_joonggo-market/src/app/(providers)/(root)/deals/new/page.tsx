"use client";

import Page from "@/components/Page";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CreateDealForm from "./_components/CreateDealForm";

function CreateNewDealPage() {
  const router = useRouter();
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isAuthInitialized && !isLoggedIn) {
      router.replace("/");
    }
  }, [isAuthInitialized, isLoggedIn]);

  return (
    <Page title="새 판매글 작성하기">
      {isAuthInitialized && isLoggedIn ? <CreateDealForm /> : "로딩 중..."}
    </Page>
  );
}

export default CreateNewDealPage;
