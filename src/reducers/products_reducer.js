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
  return state;
};

export default products_reducer;
