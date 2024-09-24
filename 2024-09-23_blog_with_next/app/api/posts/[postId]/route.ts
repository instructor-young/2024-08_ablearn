import { Post } from "@/schemas/posts.schema";
import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const postId = Number(params.postId);

  const projectDirPath = process.cwd();
  const dataPath = path.join(projectDirPath, "data/posts.json");
  const data = await readFile(dataPath, "utf-8");
  const posts = JSON.parse(data) as Post[];

  const post = posts.find((post) => post.id === postId);

  if (!post) return NextResponse.error();

  return NextResponse.json(post);
}
