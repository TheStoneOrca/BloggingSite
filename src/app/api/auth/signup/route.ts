import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function POST(Req: Request, Res: Response) {
  try {
    type signupDetails = {
      username: string;
      password: string;
      email: string;
      fname: string;
      lname: string;
    };
    const prisma = new PrismaClient();
    const req: signupDetails = await Req.json();

    if (req.username && req.password && req.email && req.fname && req.lname) {
      const checkUsername = await prisma.users.findFirst({
        where: {
          username: req.username,
        },
      });
      const checkEmail = await prisma.users.findFirst({
        where: {
          email: req.email,
        },
      });

      if (checkEmail || checkUsername) {
        return NextResponse.json({
          status: 406,
          errmsg: "Username or Email already found",
        });
      }

      const hashedPassword = await bcrypt.hash(req.password, 10);
      const user = await prisma.users.create({
        data: {
          username: req.username,
          password: hashedPassword,
          role: "member",
          profile: "",
          email: req.email,
          fname: req.fname,
          lname: req.lname,
        },
      });
      const userJWT = jwt.sign(user, process.env.JWT_SECRET as string);
      return NextResponse.json({ status: 200, userJWT: userJWT });
    } else {
      return NextResponse.json({
        status: 404,
        errmsg: "Unexpected Error: Missing Details for Signup.",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
