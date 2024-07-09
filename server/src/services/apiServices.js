import Games from "../model/game.js";

export default {
  get: async (req, res) => {
    try {
      const pageNum = parseInt(req.query.pageNum) - 1 || 0;
      const limitItems = parseInt(req.query.limitItems) || 4;
      const searchWord = req.query.searchWord || "";

      if (pageNum < 0 || limitItems <= 0) {
        return res.status(400).json({ error: "Invalid pagination parameters" });
      }

      const query = searchWord
        ? {
            $or: [
              { Name: { $regex: `^${searchWord}`, $options: "i" } },
              { Category: { $regex: `^${searchWord}`, $options: "i" } },
            ],
          }
        : {};

      const data = await Games.find(query)
        .skip(pageNum * limitItems)
        .limit(limitItems);

      res.status(200).json(data);
    } catch (err) {
      console.error(err);

      res
        .status(500)
        .json({ error: "An error occurred while fetching the games." });
    }
  },
  getPagesLength: async (req, res) => {
    try {
      const limitItems = parseInt(req.query.limitItems) || 6;
      const searchWord = req.query.searchWord || "";
      if (limitItems <= 0) {
        return res.status(400).json({ error: "Invalid pagination parameters" });
      }
      const docs =
        searchWord.length === 0
          ? await Games.countDocuments()
          : await Games.countDocuments({
              $or: [
                { Name: { $regex: `^${searchWord}`, $options: "i" } },
                { Category: { $regex: `^${searchWord}`, $options: "i" } },
              ],
            });
      if (docs % limitItems === 0) {
        const pages = docs / limitItems;
        return res.status(200).json(pages);
      } else {
        const pages = Math.floor(docs / limitItems) + 1;
        return res.status(200).json(pages);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
