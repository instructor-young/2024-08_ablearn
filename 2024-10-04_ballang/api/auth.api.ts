import { Response } from "@/types/app.type";
import { ballangAPI } from "./client.api";

async function logIn(data: { email: string; password: string }) {
  try {
    const response = await ballangAPI.post<Response<null>>(
      "/auth/log-in",
      data
    );

    return response.data.success;
  } catch {
    return false;
  }
}

/**
 * 로그아웃을 수행합니다.
 */
async function logOut() {
  const response = await ballangAPI.delete<Response<null>>("/auth/log-out");
  return response.data.success;
}

/**
 * `accessToken`을 리프레시합니다.
 */
async function refreshToken() {
  const response = await ballangAPI.get<Response<boolean>>(
    `/auth/refresh-token`
  );
  const isRefreshTokenSuccess = response.data.result;

  return isRefreshTokenSuccess;
}

const authAPI = {
  logIn,
  logOut,
  refreshToken,
};

export default authAPI;
