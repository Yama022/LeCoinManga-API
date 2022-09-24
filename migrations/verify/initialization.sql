-- Verify LeCoinManga:initialization on pg

BEGIN;

SELECT id FROM "role" WHERE FALSE;
SELECT id FROM "user" WHERE FALSE;
SELECT id FROM "reset_password_token" WHERE FALSE;
SELECT id FROM "refresh_token" WHERE FALSE;
SELECT id FROM "origin_country" WHERE FALSE;
SELECT id FROM "author" WHERE FALSE;
SELECT id FROM "status" WHERE FALSE;
SELECT id FROM "manga" WHERE FALSE;
SELECT id FROM "offer" WHERE FALSE;
SELECT id FROM "condition" WHERE FALSE;
SELECT id FROM "offer_picture" WHERE FALSE;
SELECT id FROM "offer_has_offer_pictures" WHERE FALSE;
SELECT id FROM "genre" WHERE FALSE;
SELECT id FROM "manga_has_genres" WHERE FALSE;

ROLLBACK;
