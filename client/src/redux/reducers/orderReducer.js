const initialState = {
  Orders: [],
  PendingOrders: [],
  DelivredOrders: [],
  loading: false,
  length: 0,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_orders":
      return {
        ...state,
        orders: action.payload,
      };
    case "set_pending_orders":
      return {
        ...state,
        PendingOrders: action.payload,
      };
      case "set_delivred_orders":
      return {
        ...state,
        DelivredOrders: action.payload,
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
    default:
      return state;
  }
};

export const setOrders = (payload) => ({
  type: "set_orders",
  payload,
});
export const setPendingOrders = (payload) => ({
  type: "set_pending_orders",
  payload,
});
export const setDelivredOrders = (payload) => ({
  type: "set_delivred_orders",
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

export default orderReducer;
