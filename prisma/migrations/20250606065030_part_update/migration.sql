/*
  Warnings:

  - The `lasttime` column on the `part` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `remaintime` column on the `part` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "part" DROP COLUMN "lasttime",
ADD COLUMN     "lasttime" INTEGER,
DROP COLUMN "remaintime",
ADD COLUMN     "remaintime" INTEGER;
