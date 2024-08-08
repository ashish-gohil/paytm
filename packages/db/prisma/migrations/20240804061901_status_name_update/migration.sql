/*
  Warnings:

  - The values [PROCESSIONG] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('PROCESSING', 'SUCCESSFUL', 'FAILED', 'LOCKED');
ALTER TABLE "OnRampTransaction" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "P2pTransfer" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "OnRampTransaction" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TABLE "P2pTransfer" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "OnRampTransaction" ALTER COLUMN "status" SET DEFAULT 'PROCESSING';
ALTER TABLE "P2pTransfer" ALTER COLUMN "status" SET DEFAULT 'PROCESSING';
COMMIT;

-- AlterTable
ALTER TABLE "OnRampTransaction" ALTER COLUMN "status" SET DEFAULT 'PROCESSING';

-- AlterTable
ALTER TABLE "P2pTransfer" ALTER COLUMN "status" SET DEFAULT 'PROCESSING';
