import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const saveArticle = createAsyncThunk(
  "savedArticles/saveArticle",
  async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/save-article`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "savedArticles/deleteArticle",
  async (id) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/save-article/delete-article/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);

const savedArticlesSlice = createSlice({
  name: "savedArticles",
  initialState: {
    savedArticles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.savedArticles.push(action.payload);
      })
      .addCase(saveArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.savedArticles = state.savedArticles.filter(
          (article) => article._id !== action.payload._id
        );
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default savedArticlesSlice.reducer;
