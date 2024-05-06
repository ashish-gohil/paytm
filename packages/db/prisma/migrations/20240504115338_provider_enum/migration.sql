/*
  Warnings:

  - The `status` column on the `OnRampTransaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `provider` on the `OnRampTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PROCESSIONG', 'SUCCESSFUL', 'FAILED');

-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('BOB', 'SBI', 'ICICI');

-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "provider",
ADD COLUMN     "provider" "Provider" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PROCESSIONG';

-- DropEnum
DROP TYPE "Direction";
