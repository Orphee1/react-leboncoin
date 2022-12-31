import Axios from 'axios'
import { offersActions } from './offers-slice'
import { uiActions } from './ui-slice'

export const fetchOffers = (fetchParams) => {
  const { skip, limit, sort, filters } = fetchParams
  return async (dispatch) => {
    dispatch(uiActions.handleIsError({ status: false }))
    dispatch(uiActions.handleIsLoading({ status: true }))
    try {
      const response = await Axios(
        `${process.env.REACT_APP_WEBADDRESS}/api/v1/offers?skip=${skip}&limit=${limit}&sort=${sort}&category=${filters.category}&title=${filters.title}&priceMax=${filters.priceMax}&priceMin=${filters.priceMin}`
      )
      const data = response.data
      if (!data.offers || !data.count) {
        throw new Error('Fetching data failed')
      }
      dispatch(
        offersActions.provideOffers({
          offers: data.offers,
          count: data.count,
        })
      )
    } catch (error) {
      console.log(`message is: ${error}`)
      dispatch(
        uiActions.handleIsError({
          status: true,
        })
      )
    }
    dispatch(uiActions.handleIsLoading({ status: false }))
  }
}

export const fetchSingleOffer = (id) => {
  return async (dispatch) => {
    dispatch(uiActions.handleIsError({ status: false }))
    dispatch(uiActions.handleIsLoading({ status: true }))
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_WEBADDRESS}/api/v1/offer/${id}`
      )
      const data = response.data
      if (!data.offer || !data.announcesNumber) {
        throw new Error('Fetching data failed')
      }
      dispatch(offersActions.provideSingleOffer(data))
    } catch (error) {
      console.log(`message is: ${error}`)
      dispatch(uiActions.handleIsError({ status: true }))
    }
    dispatch(uiActions.handleIsLoading({ status: false }))
  }
}
