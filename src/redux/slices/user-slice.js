import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("users")) || [], 
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const newUser = {
        ...action.payload,
        id: new Date().getTime().toString(),
      };
      state.value.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    editUser: (state, action) => {
      const index = state.value.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.value[index] = action.payload;
        localStorage.setItem("users", JSON.stringify(state.value));
      }
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.value));
    },
  },
});

export const { createUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
