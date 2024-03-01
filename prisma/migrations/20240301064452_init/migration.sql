-- DropForeignKey
ALTER TABLE "EventField" DROP CONSTRAINT "EventField_eventId_fkey";

-- DropForeignKey
ALTER TABLE "EventField" DROP CONSTRAINT "EventField_fieldId_fkey";

-- AlterTable
ALTER TABLE "EventField" ALTER COLUMN "eventId" DROP NOT NULL,
ALTER COLUMN "fieldId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "EventField" ADD CONSTRAINT "EventField_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventField" ADD CONSTRAINT "EventField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE SET NULL ON UPDATE CASCADE;
