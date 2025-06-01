/*
  Warnings:

  - You are about to drop the `Part` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Part" DROP CONSTRAINT "Part_carId_fkey";

-- DropTable
DROP TABLE "Part";

-- CreateTable
CREATE TABLE "part" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lastkm" INTEGER,
    "lasttime" TIMESTAMP(3),
    "remainkm" INTEGER,
    "remaintime" TIMESTAMP(3),

    CONSTRAINT "part_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "part" ADD CONSTRAINT "part_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
