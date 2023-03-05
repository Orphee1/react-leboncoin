import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import uiSlice from './ui-slice'
import offersSlice from './offers-slice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    offers: offersSlice.reducer,
  },
})

export default store
