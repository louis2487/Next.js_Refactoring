import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // ❶ 입력 검증
    if (!email || typeof email !== 'string')
      return NextResponse.json(
        { error: '올바른 이메일을 입력하세요.' },
        { status: 400 }
      );

    // ❷ 레코드 생성
    const owner = await prisma.owner.create({ data: { email } });
    return NextResponse.json(owner, { status: 201 });
  } catch (err: any) {
    // ❸ 중복(고유 제약 위반) → 409
    if (err.code === 'P2002')
      return NextResponse.json(
        { error: '이미 등록된 이메일입니다.' },
        { status: 409 }
      );                           // :contentReference[oaicite:1]{index=1}

    console.error('[POST /api/owner]', err);
    return NextResponse.json(
      { error: '서버 내부 오류' },
      { status: 500 }
    );
  }
}
