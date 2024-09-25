"use client";

import supabase from "@/supabase/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [isAuthInit, setIsAuthInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!!data) setIsLoggedIn(true);

      setIsAuthInit(true);
    })();
  }, []);

  return (
    <header className="flex">
      <Link href={"/"}>홈</Link>

      {isAuthInit ? (
        <div className="ml-auto">
          {isLoggedIn ? (
            <button>로그아웃</button>
          ) : (
            <>
              <Link href={"/log-in"}>로그인</Link> |{" "}
              <Link href={"/sign-up"}>회원가입</Link>
            </>
          )}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
