const {
  Role,
  Status,
  Condition,
  OriginCountry,
  Manga,
  Author,
  Genre,
} = require("../app/models");

const mangaData = require("./manga.json");
const authorData = require("./authors.json");
const genreData = require("./genres.json");
const { DATA: constantData } = require("../app/constants");

class Seed {
  constructor() {
    this.roles = {
      name: "roles",
      model: Role,
      data: constantData.roles,
    };

    this.statuses = {
      name: "statuses",
      model: Status,
      data: constantData.statuses,
    };

    this.conditions = {
      name: "conditions",
      model: Condition,
      data: constantData.conditions,
    };

    this.originCountries = {
      name: "originCountries",
      model: OriginCountry,
      data: constantData.originCountries,
    };

    this.genres = {
      name: "genres",
      model: Genre,
      data: genreData,
    };

    this.authors = {
      name: "authors",
      model: Author,
      data: authorData,
    };

    this.mangas = {
      name: "mangas",
      model: Manga,
      data: mangaData,
    };

    this.keys = [
      this.roles,
      this.statuses,
      this.conditions,
      this.originCountries,
      this.genres,
      this.authors,
    ];
  }

  async start() {
    for (const key of this.keys) {
      await this.seed(key.model, key.data, key.name);
    }

    this.seedMangas();
  }

  async seed(model, data, name) {
    let counter = 0;
    const timeStart = Date.now();

    for (const row of data) {
      try {
        await model.create(row);
        counter++;
      } catch (e) {
        console.error(e);
      }
    }

    const timeEnd = Date.now();
    console.log(
      `${counter} ${name} seeded successfully in ${timeEnd - timeStart}ms`
    );
  }

  async seedMangas() {
    let counter = 0;
    const timeStart = Date.now();
    const data = this.mangas.data;

    // Create Unknow Author
    const unknownAuthor = await Author.create({
      name: "Unknown",
      mal_id: 0,
    });

    for (const manga of data) {
      try {
        const genres = [...manga.genres];
        delete manga.genres;
        const author = await Author.findOne({
          where: {
            mal_id: manga.author_id || 0,
          },
        });

        manga.author_id = author ? author.id : unknownAuthor.id;
        manga.status_id = manga.status_id || 1;

        // Check if manga already exists
        const mangaExists = await Manga.findOne({
          where: {
            name: manga.name,
          },
        });

        if (mangaExists) {
          manga.name = `${manga.name} (${manga.id})`;
        }

        const newManga = await Manga.create(manga);
        counter++;

        for (const genre_id of genres) {
          console.log(`Adding ${genre_id} to ${newManga.name} with author ${manga.author_id}`);
          const genreFound = await Genre.findOne({
            where: {
              mal_id: genre_id,
            },
          });

          if (genreFound) {
            await newManga.addGenre(genreFound);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    const timeEnd = Date.now();
    console.log(
      `${counter} ${this.mangas.name} seeded successfully in ${
        timeEnd - timeStart
      }ms`
    );
  }
}

const seed = new Seed();
seed.start();
