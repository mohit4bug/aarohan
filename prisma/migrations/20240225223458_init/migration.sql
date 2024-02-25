/*
  Warnings:

  - A unique constraint covering the columns `[eventId,fieldId]` on the table `EventField` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `EventField` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventField" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "EventField_eventId_fieldId_key" ON "EventField"("eventId", "fieldId");
