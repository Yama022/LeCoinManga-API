-- Deploy LeCoinManga:initialization to pg

BEGIN;

CREATE TABLE "role" (
    "id" INT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL
);

COMMIT;
