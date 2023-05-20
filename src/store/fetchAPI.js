import axios from "axios";

const fetchAPI = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Failed to fetch API data: ${error.response.data}`);
    } else if (error.request) {
      throw new Error(`Failed to connect to the API: ${error.request}`);
    } else {
      throw new Error(`Failed to fetch API data: ${error.message}`);
    }
  }
};

export default fetchAPI;
