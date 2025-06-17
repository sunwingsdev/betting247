import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("token"),
  singleUser: null, // Add singleUser to the initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.singleUser = null;
    },
    setSingleUser: (state, { payload }) => {
      state.singleUser = payload;
    },
    checkUserStatus: (state) => {
      if (
        state.user &&
        (state.user.status === "banned" ||
          state.user.status === "deactivated" ||
          state.user.status === null ||
          state.user.status === undefined)
      ) {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setCredentials, logout, setSingleUser, checkUserStatus } =
  authSlice.actions;
export default authSlice.reducer;
