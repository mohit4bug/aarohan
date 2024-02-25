/*
  Warnings:

  - You are about to drop the `Fields` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Fields" DROP CONSTRAINT "Fields_eventId_fkey";

-- DropTable
DROP TABLE "Fields";

-- CreateTable
CREATE TABLE "Field" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" "FieldType" NOT NULL DEFAULT 'TEXT',
    "options" JSONB[],
    "placeholder" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventField" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,

    CONSTRAINT "EventField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventField" ADD CONSTRAINT "EventField_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventField" ADD CONSTRAINT "EventField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
