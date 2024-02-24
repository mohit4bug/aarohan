/*
  Warnings:

  - Made the column `maxParticipants` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `minParticipants` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "maxParticipants" SET NOT NULL,
ALTER COLUMN "minParticipants" SET NOT NULL;
