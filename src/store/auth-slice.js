import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
  token: '',
  userName: '',
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    load(state, action) {
      state.token = action.payload.token
      state.userName = action.payload.userName
      state.isLoggedIn = action.payload.isLoggedIn
    },
    logIn(state, action) {
      state.token = action.payload.receivedToken
      state.userName = action.payload.receivedUserName
      state.isLoggedIn = true
      localStorage.setItem(
        'identifier',
        JSON.stringify({
          token: action.payload.receivedToken,
          name: action.payload.receivedUserName,
        })
      )
    },
    logOut(state) {
      state.token = ''
      state.isLoggedIn = false
      localStorage.removeItem('identifier')
    },
  },
})

export const authActions = authSlice.actions

export default authSlice
