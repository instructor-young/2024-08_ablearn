"use client";

import authAPI from "@/api/auth.api";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

function ProfilePage() {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: authAPI.getMyProfile,
  });

  if (!profile)
    return (
      <div>
        로그인을 해 주세요. (또는 프로필 정보를 불러오는 데에 실패했습니다)
      </div>
    );

  const avatarUrl = profile.identities?.[0]["identity_data"]?.["avatar_url"];

  return (
    <div>
      <img src={avatarUrl} />
    </div>
  );
}

export default ProfilePage;
