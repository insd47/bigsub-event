-- CreateTable
CREATE TABLE "Guild" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    CONSTRAINT "Event_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EventParticipation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL,
    "eventId" TEXT NOT NULL,
    CONSTRAINT "EventParticipation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EventParticipationFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "blob" TEXT NOT NULL,
    "participationId" TEXT NOT NULL,
    CONSTRAINT "EventParticipationFile_participationId_fkey" FOREIGN KEY ("participationId") REFERENCES "EventParticipation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
