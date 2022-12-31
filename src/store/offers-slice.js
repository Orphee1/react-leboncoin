import { createSlice } from '@reduxjs/toolkit'

const offersState = {
  offersCart: [],
  count: 0,
  isLoading: false,
  isError: false,
  fetchParams: {
    skip: 0,
    limit: 10,
    sort: '',
    filters: {
      title: '',
      category: '',
      priceMin: '',
      priceMax: '',
    },
  },
  singleOffer: {},
  vendorOffers: 0,
}

const offersSlice = createSlice({
  name: 'offers',
  initialState: offersState,
  reducers: {
    provideOffers(state, action) {
      state.offersCart = action.payload.offers
      state.count = action.payload.count
    },
    provideSingleOffer(state, action) {
      state.singleOffer = action.payload.offer
      state.vendorOffers = action.payload.announcesNumber
    },
    handleSort(state, action) {
      state.fetchParams.sort = action.payload
    },
    handleCategory(state, action) {
      state.fetchParams.filters.category = action.payload
    },
    handlePriceMin(state, action) {
      state.fetchParams.filters.priceMin = action.payload
    },
    handlePriceMax(state, action) {
      state.fetchParams.filters.priceMax = action.payload
    },
    handleTitle(state, action) {
      state.fetchParams.filters.title = action.payload
    },
    handleSkip(state, action) {
      state.fetchParams.skip = action.payload
    },
  },
})

export const offersActions = offersSlice.actions

export default offersSlice
