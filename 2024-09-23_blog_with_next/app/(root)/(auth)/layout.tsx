import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-4xl text-center mt-8">
        ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
        <br />
        주의하세요. 당신의 비밀번호를 그냥 그대로 저장하는 사이트입니다.
        <br />
        ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
      </div>
      {children}
    </>
  );
}

export default AuthLayout;
