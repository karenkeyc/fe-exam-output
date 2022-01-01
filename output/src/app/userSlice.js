import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    credential: {
      email: '',
      password: '',
      isLogged: false
    }
  },
  reducers: {
    userAdded( state, { payload }) {
      state.credential = payload
    },
    userRemoved( state, { payload }) {
      console.log('rem', payload)
      state.credential = {}
    }
  }
})

export const { userAdded, userRemoved } = userSlice.actions

export default userSlice.reducer

