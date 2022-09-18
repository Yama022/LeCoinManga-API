-- Revert LeCoinManga:initialization from pg

BEGIN;

DROP TABLE "role",
  "user",
  "reset_password_token",
  "refresh_token",
  "origin_country",
  "author",
  "status",
  "manga",
  "offer",
  "condition",
  "offer_picture",
  "offer_has_offer_pictures",
  "type",
  "manga_has_types";

COMMIT;
