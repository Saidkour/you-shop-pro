const initialState = {
  products: [],
  loading: false,
  length: 0,
  categorys: [],
};

// reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_products":
      return {
        ...state,
        products: action.payload,
      };
    case "set_loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "set_length":
      return {
        ...state,
        length: action.payload,
      };
    case "set_categorys":
      return {
        ...state,
        categorys: action.payload,
      };
    default:
      return state;
  }
};

// actions
export const setProducts = (payload) => ({
  type: "set_products",
  payload,
});



export const setLoading = (payload) => ({
  type: "set_loading",
  payload,
});
export const setLength = (payload) => ({
  type: "set_length",
  payload,
});
export const setError = (payload) => ({
  type: "set_error",
  payload,
});

export const setCategorys = (payload) => ({
  type: "set_categorys",
  payload,
});
export default productReducer;
