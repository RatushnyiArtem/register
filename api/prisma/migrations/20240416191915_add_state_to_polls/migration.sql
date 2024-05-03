-- CreateEnum
CREATE TYPE "State" AS ENUM ('OPEN', 'CLOSED');

-- AlterTable
ALTER TABLE "Poll" ADD COLUMN     "state" "State" NOT NULL DEFAULT 'OPEN';
