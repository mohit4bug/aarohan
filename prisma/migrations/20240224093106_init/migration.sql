/*
  Warnings:

  - Added the required column `amount` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reward` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "reward" DOUBLE PRECISION NOT NULL;
