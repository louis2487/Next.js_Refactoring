/*
  Warnings:

  - The `remaintime` column on the `part` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "part" ALTER COLUMN "lasttime" SET DATA TYPE TEXT,
DROP COLUMN "remaintime",
ADD COLUMN     "remaintime" INTEGER;
