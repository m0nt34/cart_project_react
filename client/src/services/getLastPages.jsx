import axios from "axios";

export const getLastPage = async ({ limit }) => {
  try {
    const res = await axios.get(`http://localhost:3000/get/pages?limitItems=${limit}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
    throw err; 
  }
};