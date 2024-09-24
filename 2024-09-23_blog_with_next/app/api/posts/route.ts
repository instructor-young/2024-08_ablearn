import { getPosts } from "@/data/posts";
import { NewPostData } from "@/schemas/posts.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const posts = getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as NewPostData;
  const post = {
    id: Date.now(),
    ...data,
  };

  // 새로운 포스트 추가
  const posts = getPosts();
  posts.push(post);

  console.log(post, posts);

  return NextResponse.json(post);
}
