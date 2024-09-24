import { getPosts } from "@/data/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const postId = Number(params.postId);
  const posts = getPosts();
  console.log("[postId]", posts);
  const post = posts.find((post) => post.id === postId);

  if (!post) return NextResponse.error();

  return NextResponse.json(post);
}
