import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    deleteUser(state, action) {},
  },
});

export default userSlice.reducer;
// console.log(userSlice.actions);
export const { addUser, removeUser, deleteUser } = userSlice.actions;
