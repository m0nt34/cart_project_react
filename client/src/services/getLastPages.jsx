import axios from "axios";

export const getLastPage = async ( limit ,searchWord) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/get/pages?limitItems=${limit}&searchWord=${searchWord}`
    );
    
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
