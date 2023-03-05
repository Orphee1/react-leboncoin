import { createSlice } from '@reduxjs/toolkit'

const initialUiState = {
  sideBarIsOpen: false,
  modalIsOpen: false,
  isLoading: false,
  isError: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleSideBar(state) {
      state.sideBarIsOpen = !state.sideBarIsOpen
    },
    toggleModal(state) {
      state.modalIsOpen = !state.modalIsOpen
    },
    handleIsLoading(state, action) {
      state.isLoading = action.payload.status
    },
    handleIsError(state, action) {
      state.isError = action.payload.status
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice
