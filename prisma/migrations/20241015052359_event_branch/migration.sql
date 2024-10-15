/*
  Warnings:

  - You are about to drop the column `description` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `EventParticipation` table. All the data in the column will be lost.
  - Added the required column `branchId` to the `EventParticipation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "EventBranch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    CONSTRAINT "EventBranch_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    CONSTRAINT "Event_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("guildId", "id", "managerId", "name") SELECT "guildId", "id", "managerId", "name" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE TABLE "new_EventParticipation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL,
    "branchId" TEXT NOT NULL,
    CONSTRAINT "EventParticipation_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "EventBranch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EventParticipation" ("confirmed", "id", "messageId", "userId") SELECT "confirmed", "id", "messageId", "userId" FROM "EventParticipation";
DROP TABLE "EventParticipation";
ALTER TABLE "new_EventParticipation" RENAME TO "EventParticipation";
CREATE UNIQUE INDEX "EventParticipation_branchId_userId_key" ON "EventParticipation"("branchId", "userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
