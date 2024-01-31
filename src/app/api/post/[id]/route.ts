import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const prisma = new PrismaClient();
    const postid = req.url.slice(req.url.lastIndexOf("/") + 1);

    if (!postid) {
      return NextResponse.json({ status: 404 });
    }
    const post = await prisma.posts.findFirst({
      where: {
        postid: parseInt(postid),
      },
    });

    return NextResponse.json({ status: 200, postDetails: post });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
