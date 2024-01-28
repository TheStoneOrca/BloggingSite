import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function POST(Req: Request, Res: Response) {
  try {
    type loginDetails = {
      username: string;
      password: string;
    };
    const prisma = new PrismaClient();
    const req: loginDetails = await Req.json();

    if (req.username && req.password) {
      let checkUsername = await prisma.users.findFirst({
        where: {
          username: req.username,
        },
      });

      if (!checkUsername) {
        const checkEmail = await prisma.users.findFirst({
          where: {
            email: req.username,
          },
        });
        if (!checkEmail) {
          return NextResponse.json({
            status: 406,
            errmsg: "Invalid Username/Email or Password",
          });
        }
        checkUsername = checkEmail;
      }

      const checkPassword = await bcrypt.compare(
        req.password,
        checkUsername.password
      );
      if (checkPassword) {
        const userJWT = jwt.sign(
          checkUsername,
          process.env.JWT_SECRET as string
        );
        return NextResponse.json({ status: 200, userJWT: userJWT });
      } else {
        return NextResponse.json({
          status: 401,
          errmsg: "Invalid Username/Email or Password",
        });
      }
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
