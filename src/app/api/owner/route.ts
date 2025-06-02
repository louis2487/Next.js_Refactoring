export const runtime = 'nodejs';  
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();


    if (!email || typeof email !== 'string')
      return NextResponse.json(
        { error: '올바른 이메일을 입력하세요.' },
        { status: 400 }
      );


    const owner = await prisma.owner.create({ data: { email } });
    return NextResponse.json(owner, { status: 201 });
  } catch (err: any) {

    if (err.code === 'P2002')
      return NextResponse.json(
        { error: '이미 등록된 이메일입니다.' },
        { status: 409 }
      );                       

    console.error('[POST /api/owner]', err);
    return NextResponse.json(
      { error: '서버 내부 오류' },
      { status: 500 }
    );
  }
}
