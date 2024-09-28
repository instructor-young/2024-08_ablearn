import axios from "axios";

const youtubeAPI = axios.create({ baseURL: "https://api.youtube.com" });
const kakaoAPI = axios.create({ baseURL: "https://api.kakao.com" });
const naverAPI = axios.create({ baseURL: "https://api.naver.com" });
const ourAPI = axios.create({ baseURL: "https://api.ours.com" });

export async function logIn() {
  const response = await ourAPI.post("/log-in", { email: "a", password: "b" });

  ourAPI.defaults.headers[
    "Authorization"
  ] = `Bearer ${response.data.accessToken}`;
}
