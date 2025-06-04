import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = NextResponse.json({ message: "로그아웃 완료" }, { status: 200 });
  res.cookies.set({
    name: "auth_token",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0, 
  });
  return res;
}
