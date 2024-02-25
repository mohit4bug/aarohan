/*
  Warnings:

  - Added the required column `value` to the `Fields` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fields" ADD COLUMN     "value" TEXT NOT NULL;
