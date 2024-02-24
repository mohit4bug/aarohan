-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "isGroup" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "maxParticipants" INTEGER DEFAULT 1,
ADD COLUMN     "minParticipants" INTEGER DEFAULT 1;
