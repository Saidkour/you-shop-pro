export const initialValue = {
  orders: [],
  showCard: false,
};

const cardRedcure = (state = initialValue, action) => {
  switch (action.type) {
    case "toggle_card":
      return { ...state, showCard: !state.showCard };
    case "clear_card":
      return { ...state, orders: [] };
    case "update_order": {
      const updatedCmmands = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...order, quantity: ++order.quantity };
          } else if (action.payload.type === "dec") {
            return {
              ...order,
              quantity: order.quantity <= 1 ? 1 : --order.quantity,
            };
          }
        } else {
          return order;
        }
        console.log(updatedCmmands);
      });
      return { ...state, orders: updatedCmmands };
    }
    case "update_order_by_value": {
      const updatedCmmands = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          return { ...order, quantity: action.payload.value };
        } else {
          return order;
        }
      });
      return { ...state, orders: updatedCmmands };
    }
    case "add_order":
      if (state.orders.find((e) => e.id === action.payload.id)) return state;
      return { ...state, orders: [...state.orders, action.payload] };
    case "delete_order": {
      const newOrdersList = state.orders.filter(
        (o) => o.id !== action.payload.id
      );
      return { ...state, orders: [...newOrdersList] };
    }

    case "set_orders":
      return { ...state, orders: action.payload };

    default:
      return state;
  }
};

export const toggleCard = (payload) => ({
  type: "toggle_card",
  payload,
});
export const clearCard = (payload) => ({
  type: "clear_card",
  payload,
});

export const addOrder = (payload) => ({
  type: "add_order",
  payload,
});

export const deleteOrder = (payload) => ({
  type: "delete_order",
  payload,
});

// the payload is an object of {type:inc||dec,id}
export const updateOrder = (payload) => ({
  type: "update_order",
  payload,
});

export const updateOrderByValue = (payload) => ({
  type: "update_order_by_value",
  payload,
});

export const setOrders = (payload) => ({
  type: "set_orders",
  payload,
});

export default cardRedcure;
