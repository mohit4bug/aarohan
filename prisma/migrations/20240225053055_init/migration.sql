-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('TEXT', 'SELECT');

-- CreateTable
CREATE TABLE "Fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FieldType" NOT NULL DEFAULT 'TEXT',
    "options" JSONB[],
    "placeholder" TEXT,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Fields_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fields" ADD CONSTRAINT "Fields_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
