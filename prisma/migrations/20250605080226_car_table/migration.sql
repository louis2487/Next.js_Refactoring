/*
  Warnings:

  - You are about to drop the column `brand` on the `car` table. All the data in the column will be lost.
  - Added the required column `brend` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car" DROP COLUMN "brand",
ADD COLUMN     "brend" TEXT NOT NULL,
ADD COLUMN     "fuel" TEXT NOT NULL;
