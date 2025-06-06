/*
  Warnings:

  - You are about to drop the column `ownerId` on the `car` table. All the data in the column will be lost.
  - Added the required column `useremail` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "part" DROP CONSTRAINT "part_carId_fkey";

-- AlterTable
ALTER TABLE "car" DROP COLUMN "ownerId",
ADD COLUMN     "useremail" TEXT NOT NULL;
