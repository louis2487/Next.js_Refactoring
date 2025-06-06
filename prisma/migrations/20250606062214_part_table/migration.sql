/*
  Warnings:

  - You are about to drop the column `owner` on the `part` table. All the data in the column will be lost.
  - Added the required column `useremail` to the `part` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "part" DROP COLUMN "owner",
ADD COLUMN     "useremail" TEXT NOT NULL;
