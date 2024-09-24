import { LogInData, SignUpData } from "@/schemas/auth.schema";

export async function signUp(data: SignUpData) {
  const response = await fetch("http://localhost:3000/api/auth/sign-up", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();

  return result;
}

export async function logIn(data: LogInData) {
  const response = await fetch("http://localhost:3000/api/auth/log-in", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();

  return result;
}
