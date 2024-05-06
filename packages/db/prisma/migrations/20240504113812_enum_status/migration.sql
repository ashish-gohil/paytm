/*
  Warnings:

  - The `status` column on the `OnRampTransaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Direction" AS ENUM ('PROCESSIONG', 'SUCCESSFUL', 'FAILED');

-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "status",
ADD COLUMN     "status" "Direction" NOT NULL DEFAULT 'PROCESSIONG';
