import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch API Data from Backend: ${error.message}`);
  }
};

export const fetchAsync = createAsyncThunk("fetch/fetchAsync", async (url) => {
  const data = await fetchAPI(url);
  return data;
});

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  refetchUrl: null,
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    refetchData: (state, action) => {
      state.refetchUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { refetchData } = fetchSlice.actions;
export default fetchSlice.reducer;
