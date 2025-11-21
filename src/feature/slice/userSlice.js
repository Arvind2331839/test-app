import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

// 1️⃣ Fetch All Users
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  }
);

// 2️⃣ Fetch User By ID
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    singleUser: null,   // new field for single data
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // 📌 fetchUser cases
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
      })

      // 📌 fetchUserById cases
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleUser = action.payload;   // store data separately
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
      });
  }
});

export default userSlice.reducer;
