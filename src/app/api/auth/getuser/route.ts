import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(Req: Request, Res: Response) {
  try {
    type getUserDetails = {
      userJWT: string;
    };
    const req: getUserDetails = await Req.json();
    if (!req.userJWT) {
      return NextResponse.json({
        status: 404,
        errmsg: "Unexpected Error: Missing Details for Signup.",
      });
    }
    const user = jwt.verify(req.userJWT, process.env.JWT_SECRET as string);
    return NextResponse.json({ status: 200, user: user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
