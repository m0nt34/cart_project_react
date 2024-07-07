import Games from "../model/game.js";

export default {
  get: async (req, res) => {
    try {
      const pageNum = parseInt(req.query.pageNum)-1 || 0;
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
  getPagesLength:async(req,res)=>{
    try{
      const limitItems = parseInt(req.query.limitItems) || 6;
      if ( limitItems <= 0) {
        return res.status(400).json({ error: "Invalid pagination parameters" });
      }
      const docs = await Games.countDocuments()
      if(docs%limitItems===0){
        const pages = docs/limitItems;
        return res.status(200).json({data:pages})
      }else{
        const pages = Math.floor(docs/limitItems)+1;
        return res.status(200).json({data:pages})
      }
    }catch(err){
      console.log(err)
      res.status(500).json(err)
    }
  }
};