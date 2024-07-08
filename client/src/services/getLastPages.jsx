import axios from "axios";

export const getLastPage = async ( limit ,search) => {
  try {
    console.log(search);
    const res = await axios.get(
      `http://localhost:3000/get/pages?limitItems=${limit}&searchWord=${search}`
    );
    
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
