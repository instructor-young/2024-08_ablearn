import { LogInData, User } from "@/schemas/auth.schema";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const { email, password } = (await request.json()) as LogInData;
  const filePath = path.join(process.cwd(), "data/users.json");
  const rawData = await readFile(filePath, "utf-8");
  const users = JSON.parse(rawData) as User[];
  const user = users.find((user) => user.email === email);

  if (!user) return NextResponse.json("Not Found", { status: 404 });
  if (user.password !== password)
    return NextResponse.json("Bad Request", { status: 400 });

  const baseNumber = Date.now();
  const residual = baseNumber % 1024;
  const key = baseNumber - residual - 4;

  const 여권 = { email: user.email, key };

  return NextResponse.json(여권);
}
