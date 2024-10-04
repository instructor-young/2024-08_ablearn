"use client";

import api from "@/api/client.api";
import LogInModal from "@/components/LogInModal";
import { useAuthStore } from "@/zustand/auth.store";
import { useModalStore } from "@/zustand/modal.store";
import Link from "next/link";

function HeaderAuthMenus() {
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logOut = useAuthStore((state) => state.logOut);
  const openModal = useModalStore((state) => state.openModal);

  const handleClickLogInButton = async () => {
    await api.auth.refreshToken();
    openModal(<LogInModal />);
  };

  const handleClickLogOutButton = async () => {
    const isLogOutSuccess = await api.auth.logOut();
    if (isLogOutSuccess) {
      logOut();
      alert("로그아웃에 성공하였습니다");
    } else {
      alert("로그아웃에 실패하였습니다");
    }
  };

  if (!isAuthInitialized) return null;

  return (
    <div className="ml-auto flex gap-x-4">
      {isLoggedIn ? (
        <>
          <Link href={"/cart"}>장바구니</Link>
          <button onClick={handleClickLogOutButton}>로그아웃</button>
        </>
      ) : (
        <>
          <Link href={"/sign-up"}>회원가입</Link>
          <button onClick={handleClickLogInButton}>로그인</button>
        </>
      )}
    </div>
  );
}

export default HeaderAuthMenus;
