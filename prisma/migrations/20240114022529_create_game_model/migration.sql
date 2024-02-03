-- CreateTable
CREATE TABLE "games" (
    "id" BIGSERIAL NOT NULL,
    "code" VARCHAR NOT NULL,
    "players" INTEGER NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);
