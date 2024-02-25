/*
  Warnings:

  - A unique constraint covering the columns `[bossId,eventId]` on the table `Registration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Registration_bossId_eventId_key" ON "Registration"("bossId", "eventId");
