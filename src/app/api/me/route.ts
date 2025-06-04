import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!; 

export async function GET(request: NextRequest) {
  const tokenCookie = request.cookies.get("auth_token");
  if (!tokenCookie) {
    return NextResponse.json({ message: "인증 없음" }, { status: 401 });
  }

  try {
    const payload = jwt.verify(tokenCookie.value, JWT_SECRET) as {
      id: number;
      email: string;
      exp: number;
    };

    return NextResponse.json(
      { id: payload.id, email: payload.email },
      { status: 200 }
    );
  } catch {

    return NextResponse.json({ message: "토큰 유효하지 않음" }, { status: 401 });
  }
}
