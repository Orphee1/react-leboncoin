const products_reducer = (state, action) => {
  if (action.type === "GET_OFFERS_BEGIN") {
    return { ...state, isLoading: true };
  }
  if (action.type === "GET_OFFERS_SUCCESS") {
    return {
      ...state,
      offers: action.payload.offers,
      count: action.payload.count,
      isLoading: false,
    };
  }
  if (action.type === "GET_OFFERS_ERROR") {
    return { ...state, isLoading: false, isError: true };
  }

  if (action.type === "SET_SKIP") {
    return { ...state, skip: action.payload };
  }

  if (action.type === "SET_SORT") {
    return { ...state, sort: action.payload };
  }

  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === "GET_SINGLE_OFFER_BEGIN") {
    return { ...state, single_offer_loading: true };
  }

  if (action.type === "GET_SINGLE_OFFER_SUCCESS") {
    const { offer, vendor_offers } = action.payload;
    return {
      ...state,
      single_offer_loading: false,
      single_offer: offer,
      vendor_offers,
    };
  }

  if (action.type === "GET_SINGLE_OFFER_ERROR") {
    return { ...state, single_offer_loading: false, single_offer_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
