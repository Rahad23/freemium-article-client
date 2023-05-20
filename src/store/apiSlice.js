import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const slice = createSlice({
  name: "api",
  initialState: {},
  reducers: {
    sendData: async (state, { payload: { method, url, data } }) => {
      const config = {
        method,
        url: `${API_BASE_URL}${url}`,
        data,
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("freeMiumToken")}`,
          // Add any additional headers here
        },
      };
      try {
        const response = await axios(config);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data);
      }
    },
  },
});

export const { sendData } = slice.actions;
export default slice.reducer;
