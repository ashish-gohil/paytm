-- AlterTable
ALTER TABLE "User" ADD COLUMN     "availableBalance" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lockedBalance" INTEGER NOT NULL DEFAULT 0;
