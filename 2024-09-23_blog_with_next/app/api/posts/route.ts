import { NewPostData } from "@/schemas/posts.schema";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const projectDirPath = process.cwd();
  const dataPath = path.join(projectDirPath, "data/posts.json");
  const posts = await readFile(dataPath, "utf-8");

  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const key = request.headers.get("Authorization");
  const isKeyValid = Number(key) % 1024 === 1000;

  if (!isKeyValid) return NextResponse.json("위조 여권임", { status: 400 });

  const data = (await request.json()) as NewPostData;
  const post = {
    id: Date.now(),
    ...data,
  };

  // 새로운 포스트 추가
  const projectDirPath = process.cwd();
  const dataPath = path.join(projectDirPath, "data/posts.json");
  const postsData = await readFile(dataPath, "utf-8");
  const posts = JSON.parse(postsData);

  posts.push(post);

  await writeFile(dataPath, JSON.stringify(posts, undefined, 2));

  return NextResponse.json(post);
}
