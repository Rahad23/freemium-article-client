import { createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk action
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (url) => {
    // const url = `${process.env.REACT_APP_API_URL}/user/${email}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
