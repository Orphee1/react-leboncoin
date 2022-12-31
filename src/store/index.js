import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-slice'
import offersSlice from './offers-slice'

const store = configureStore({
  reducer: { ui: uiSlice.reducer, offers: offersSlice.reducer },
})

export default store
