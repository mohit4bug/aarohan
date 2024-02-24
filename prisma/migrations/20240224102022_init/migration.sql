/*
  Warnings:

  - You are about to drop the column `teamId` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTeams` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bossId` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_teamId_fkey";

-- DropForeignKey
ALTER TABLE "UserTeams" DROP CONSTRAINT "UserTeams_teamId_fkey";

-- DropForeignKey
ALTER TABLE "UserTeams" DROP CONSTRAINT "UserTeams_userId_fkey";

-- DropIndex
DROP INDEX "Registration_teamId_eventId_key";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "teamId",
ADD COLUMN     "bossId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hasPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "UserTeams";

-- CreateTable
CREATE TABLE "_PARTICIPANT_REGISTRATIONS" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PARTICIPANT_REGISTRATIONS_AB_unique" ON "_PARTICIPANT_REGISTRATIONS"("A", "B");

-- CreateIndex
CREATE INDEX "_PARTICIPANT_REGISTRATIONS_B_index" ON "_PARTICIPANT_REGISTRATIONS"("B");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_bossId_fkey" FOREIGN KEY ("bossId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PARTICIPANT_REGISTRATIONS" ADD CONSTRAINT "_PARTICIPANT_REGISTRATIONS_A_fkey" FOREIGN KEY ("A") REFERENCES "Registration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PARTICIPANT_REGISTRATIONS" ADD CONSTRAINT "_PARTICIPANT_REGISTRATIONS_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
