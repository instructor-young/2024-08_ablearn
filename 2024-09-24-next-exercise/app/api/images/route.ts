import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("img") as File;

  const rootPath = process.cwd();
  const directoryPath = "public/img";
  const fileName = file.name;
  const filePath = path.join(rootPath, directoryPath, fileName);

  const arrayBuffer = await file.arrayBuffer();
  const data = Buffer.from(arrayBuffer);

  await writeFile(filePath, data);

  const imgUrl = `http://localhost:3000/img/${fileName}`;

  return NextResponse.json(imgUrl);
}
