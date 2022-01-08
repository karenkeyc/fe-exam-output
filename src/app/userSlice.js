import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    credential: {isLoggedIn: false},
    allUsers: []
  },
  reducers: {
    userAdded( state, { payload }) {
      state.credential = payload
    }
  }
})

export const { userAdded } = userSlice.actions

export default userSlice.reducer

