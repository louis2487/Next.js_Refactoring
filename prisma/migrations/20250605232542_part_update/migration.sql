/*
  Warnings:

  - You are about to drop the column `carId` on the `part` table. All the data in the column will be lost.
  - Added the required column `model` to the `part` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `part` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "part" DROP COLUMN "carId",
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "owner" TEXT NOT NULL;
