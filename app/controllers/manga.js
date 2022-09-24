const { Manga, Genre } = require("../models");

module.exports = {
  async getAllMangasWithFilter(req, res) {
    try {
      const { genre_id } = req.query;
      const genre = await Genre.findByPk(genre_id, {
        include: [
          {
            model: Manga,
            as: "mangas",
          },
        ],
        limit: 25,
      });

      console.log(genre);

      res.status(200).json(genre.mangas);
    } catch (error) {
      console.log(error);
      res.json({ error: error.message });
    }
  },
};
