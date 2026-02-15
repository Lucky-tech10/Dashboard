import { NextResponse } from "next/server";
import { mockVideos } from "@/utils/data";
let videos = [...mockVideos]; // mutable copy

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(videos);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Video id required" }, { status: 400 });
  }

  videos = videos.filter((v) => v.id !== id);

  return NextResponse.json({
    success: true,
    remaining: videos.length,
  });
}
