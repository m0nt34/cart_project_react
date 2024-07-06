import Games from "../model/game.js";

export default {
  get: async (req, res) => {
    try {
      const pageNum = parseInt(req.query.pageNum) || 0;
      const limitItems = parseInt(req.query.limitItems) || 6;
      
      if (pageNum < 0 || limitItems <= 0) {
        return res.status(400).json({ error: "Invalid pagination parameters" });
      }
      const data = await Games.find({}).skip(pageNum * limitItems).limit(limitItems);

      res.status(200).json(data);
    } catch (err) {
      console.error(err);

      res.status(500).json({ error: "An error occurred while fetching the games." });
    }
  },
};