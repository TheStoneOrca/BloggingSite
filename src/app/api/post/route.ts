import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(Req: Request, Res: Response) {
  try {
    type postData = {
      title: string;
      author: string;
      content: string;
    };

    const req: postData = await Req.json();

    if (req.title && req.author && req.content) {
      const prisma = new PrismaClient();
      await prisma.posts.create({
        data: {
          postitle: req.title,
          postauthor: req.author,
          postcontent: req.content,
          createdWhen: new Date(),
        },
      });

      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json({ status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}

export async function GET() {
  try {
    const prisma = new PrismaClient();
    const posts = await prisma.posts.findMany();

    return NextResponse.json({ status: 200, posts: posts });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
