import axios from "axios";

export const getPageContent = async (page, limit, search) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/get/games?pageNum=${page}&limitItems=${limit}&searchWord=${search}`
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};
