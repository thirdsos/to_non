import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    password: null,
    token: null,
  },

  reducers: {
    setCredentials: (state, { payload: { email, password, token } }) => {
      state.email = email;
      state.password = password;
      state.token = token;
      console.log(state.email);
      console.log(state.password);
    },
    removeCredentials: (state) => {
      state.email = null;
      state.password = null;
      state.token = null;
    },
  },
});

export const { setCredentials, removeCredentials } = userSlice.actions;

export default userSlice.reducer;
