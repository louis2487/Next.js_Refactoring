import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { useremail, brend, model, fuel, year, mileage } = await request.json();

    if ( useremail === null || brend === null || model === null || fuel === null || year === null || mileage === null || isNaN(year) ||isNaN(mileage)) {
      return NextResponse.json(
        { error: "Input Data NULL" },
        { status: 400 }
      );
    }
    const newCar = await prisma.car.create({
      data: {
        useremail: useremail,
        brend,
        model,
        fuel,
        year,
        mileage,
      },
    });

    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    console.error("[/app/carsave/route] POST error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
