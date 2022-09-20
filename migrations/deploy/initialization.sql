-- Deploy LeCoinManga:initialization to pg

BEGIN;

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT,
    "lastname" TEXT,
    "username" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "phone" INT UNIQUE,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT,
    "bio" TEXT,
    "is_email_verified" BOOLEAN NOT NULL DEFAULT FALSE,
    "is_phone_verified" BOOLEAN NOT NULL DEFAULT FALSE,
    "role_id" INT NOT NULL REFERENCES "role" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "reset_password_token" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "token" TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "refresh_token" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "token" TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "origin_country" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "image_url" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "author" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "japanese_name" TEXT UNIQUE,
    "image_url" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "status" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "manga" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "japanese_name" TEXT UNIQUE,
    "description" TEXT,
    "image_url" TEXT NOT NULL,
    "release_date" DATE NOT NULL,
    "origin_country_id" INT NOT NULL REFERENCES "origin_country" ("id"),
    "status_id" INT NOT NULL REFERENCES "status" ("id"),
    "author_id" INT NOT NULL REFERENCES "author" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "condition" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "offer" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" FLOAT NOT NULL,
    "chapter_no" INT NOT NULL,
    "is_sold" BOOLEAN NOT NULL DEFAULT FALSE,
    "is_available" BOOLEAN NOT NULL DEFAULT TRUE,
    "manga_id" INT NOT NULL REFERENCES "manga" ("id"),
    "condition_id" INT NOT NULL REFERENCES "condition" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "offer_picture" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "offer_has_offer_pictures" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "offer_id" INT NOT NULL REFERENCES "offer" ("id"),
    "picture_id" INT NOT NULL REFERENCES "offer_picture" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "type" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "name" TEXT NOT NULL UNIQUE,
    "is_nsfw" BOOLEAN NOT NULL DEFAULT FALSE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "manga_has_types" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "manga_id" INT NOT NULL REFERENCES "manga" ("id"),
    "type_id" INT NOT NULL REFERENCES "type" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
