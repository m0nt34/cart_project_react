import axios from "axios";

export const getPageContent = async (page, limit, search) => {
  try {
    const res = await axios.get(
      `https://cart-project-react.onrender.com/get/games?pageNum=${page}&limitItems=${limit}&searchWord=${search}`
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};
