import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const owner = await prisma.owner.findUnique({ where: { email } });
  if (owner) {
    return NextResponse.json({ message: "로그인 성공", email: owner.email }, { status: 200 });
  }
  return NextResponse.json({ message: "로그인 실패" }, { status: 401 });
}
