import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const owner = await prisma.owner.findUnique({ where: { email } });
  if (!owner) {
    return NextResponse.json({ message: "로그인 실패" }, { status: 401 });   
  }
  const secret = process.env.JWT_SECRET!;
 const token = jwt.sign(
  { id: owner.id, email: owner.email },
  secret,
  { expiresIn: "7d" }
);

const res = NextResponse.json(
  { message: "로그인 성공", email: owner.email },
  { status: 200 }
);
res.cookies.set({
  name: "auth_token",
  value: token,
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, 
});
return res;

}
