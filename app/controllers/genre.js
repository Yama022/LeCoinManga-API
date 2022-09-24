const { Genre } = require("../models");

const {
  ERROR: { INTERNAL },
} = require("../constants");

module.exports = {
  getAll: async (req, res) => {
    try {
      // 0 = without nsfw 1 = with nsfw
      // We must transform the string into a number with +req.query.nsfw
      // And we must transform the number into a boolean with !!+req.query.nsfw
      const withNsfw = !!+req.query.withNsfw;

      const genres = await Genre.findAll();

      // If the user doesn't want nsfw, we filter the types
      if (!withNsfw) {
        const filteredGenres = genres.filter((genre) => !genre.is_nsfw);
        return res.status(200).json(filteredGenres);
      }

      res.status(200).json(genres);
    } catch (e) {
      res.status(500).json(INTERNAL);
    }
  },
};
