// src/app/api/savepart/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { partlist, useremail: useremail, model } = body as {
      partlist: any[];
      useremail: string;
      model: string;
    };
    for (const [index, onelist] of partlist.entries()) {

      const { name, lastkm, lasttime, remainkm, remaintime } = onelist;
      const newPart = await prisma.part.create({
        data: {
          useremail,
          name,
          lastkm,
          lasttime,
          remainkm,
          remaintime,
          model,
        },
      });
    }
    return NextResponse.json(
      { message: "모든 소모품이 성공적으로 저장되었습니다." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[/app/savepart/route] POST 예외 발생:", error);
    if (error.code) {
      console.error("Prisma Error Code:", error.code, "Meta:", error.meta);
    }
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
