import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Axios from 'axios'
import reducer from '../reducers/products_reducer'
const products_url = 'http://localhost:5000/api/v1/offers/with-count/'
// "https://leboncoinhl.herokuapp.com/api/v1/offers/with-count/";

const initialState = {
  offers: [],
  count: 0,
  isLoading: false,
  isError: false,
  skip: 0,
  limit: 10,
  sort: '',
  filters: {
    title: '',
    category: '',
    priceMin: 0,
    priceMax: 0,
  },
  single_offer_loading: false,
  single_offer_error: false,
  single_offer: {},
  vendor_offers: 0,
}

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async () => {
    dispatch({ type: 'GET_OFFERS_BEGIN' })
    try {
      const response = await Axios.post(products_url, {
        limit: state.limit,
        skip: state.skip,
        sort: state.sort,
        category: state.filters.category,
        priceMax: state.filters.priceMax,
        priceMin: state.filters.priceMin,
        title: state.filters.title,
      })
      // console.log(response);
      if (response.data) {
        const { count, offers } = response.data

        dispatch({
          type: 'GET_OFFERS_SUCCESS',
          payload: {
            count,
            offers,
          },
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: 'GET_OFFERS_ERROR' })
    }
  }

  const fetchSingleProduct = async (url) => {
    dispatch({ type: 'GET_SINGLE_OFFER_BEGIN' })
    try {
      const response = await Axios.get(url)
      // console.log(response);
      if (response.data) {
        const offer = response.data[0]
        const vendor_offers = response.data[1]
        dispatch({
          type: 'GET_SINGLE_OFFER_SUCCESS',
          payload: { offer, vendor_offers },
        })
      }
    } catch (error) {
      dispatch({ type: 'GET_SINGLE_OFFER_ERROR' })
    }
  }

  const handleSort = (event) => {
    let value = event.target.value
    dispatch({ type: 'SET_SORT', payload: value })
  }

  const handleFilters = (event) => {
    let name = event.target.name
    let value = event.target.value
    // if (name === "max-price") {
    //   value = Number(value);
    // }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  // to handle bottom page buttons and items per page
  const handleSkip = (skip) => {
    dispatch({ type: 'SET_SKIP', payload: skip })
  }

  let skipTab = []
  for (let i = 0; i < state.count / 10; i++) {
    skipTab.push(i + 1)
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line
  }, [
    state.filters.category,
    state.filters.priceMax,
    state.filters.priceMin,
    state.filters.title,
    state.skip,
    state.sort,
  ])

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        clearFilters,
        fetchSingleProduct,
        handleFilters,
        handleSkip,
        handleSort,
        skipTab,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
