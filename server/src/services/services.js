import Games from "../model/game.js";
export default {
  add: async (req, res) => {
    try {
      const savedGame = await new Games(req.body).save();
      res.json(savedGame);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
