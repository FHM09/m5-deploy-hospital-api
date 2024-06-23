-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('DOCTOR', 'LAB_TECHNICIAN', 'NURSE');

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'NURSE';
