import { ADD_TO_CART,  DECRIMENT, INCREMENT, REMOVE_ORDER, UPDATE_COUNT_ORDER } from "./ActionsOr";

const initialValues = {
     orders : [
        {
          id: 1,
          total_price: 120.99,
          random_key:'XYS343AS',
          status: "pending",
          payment_method: "credit card",
          created_at: "2024-07-16T09:20:00Z",
          updated_at: "2024-07-16T09:20:00Z",
          user: { user_id:12, name: "Alice Johnson", email: "alice@example.com" },
          products: [
            { name: "Product A", price: 30.00 },
            { name: "Product B", price: 50.00 },
            { name: "Product C", price: 40.00 },
          ],
        },
        {
          id: 2,
          total_price: 85.75,
          random_key:'wyeu3AS',
          status: "completed",
          payment_method: "paypal",
          created_at: "2024-07-15T15:45:00Z",
          updated_at: "2024-07-15T15:45:00Z",
          user: { user_id:50, name: "Bob Smith", email: "bob@example.com" },
          products: [
            { name: "Product B", price: 50.00 },
            { name: "Product D", price: 60.00 },
          ],
        },
        {
          id: 3,
          total_price: 220.00,
          random_key:'RTE343AS', 
          status: "cancelled",
          payment_method: "cash on delivery",
          created_at: "2024-07-14T08:30:00Z",
          updated_at: "2024-07-14T08:30:00Z",
          user: { user_id:69, name: "Charlie Brown", email: "charlie@example.com" },
          products: [
            { name: "Product C", price: 40.00 },
            { name: "Product E", price: 70.00 },
            { name: "Product A", price: 30.00 },
          ],
        },
        {
          id: 4,
          total_price: 150.50,
          random_key:'nmu343AS',
          status: "pending",
          payment_method: "credit card",
          created_at: "2024-07-13T11:00:00Z",
          updated_at: "2024-07-13T11:00:00Z",
          user: { user_id:10, name: "David Wilson", email: "david@example.com" },
          products: [
            { name: "Product D", price: 60.00 },
            { name: "Product B", price: 50.00 },
            { name: "Product A", price: 30.00 },
          ],
        },
        {
          id: 5,
          total_price: 90.25,
          random_key:'po23AS',
          status: "completed",
          payment_method: "paypal",
          created_at: "2024-07-12T14:25:00Z",
          updated_at: "2024-07-12T14:25:00Z",
          user: { user_id:27, name: "Eve Davis", email: "eve@example.com" },
          products: [
            { name: "Product B", price: 50.00 },
            { name: "Product C", price: 40.00 },
          ],
        },
        {
          id: 6,
          total_price: 65.00,
          random_key:'sdjbdjs433AS',
          status: "latest",
          payment_method: "credit card",
          created_at: "2024-07-11T16:10:00Z",
          updated_at: "2024-07-11T16:10:00Z",
          user: { user_id:90, name: "Frank Miller", email: "frank@example.com" },
          products: [
            { name: "Product A", price: 30.00 },
            { name: "Product C", price: 40.00 },
          ],
        },
        {
          id: 7,
          total_price: 130.75,
          random_key:'wds34343AS',
          status: "cancelled",
          payment_method: "cash on delivery",
          created_at: "2024-07-10T09:55:00Z",
          updated_at: "2024-07-10T09:55:00Z",
          user: { user_id:67, name: "Grace Lee", email: "grace@example.com" },
          products: [
            { name: "Product D", price: 60.00 },
            { name: "Product B", price: 50.00 },
          ],
        },
        {
          id: 8,
          total_price: 200.00,
          random_key:'12wqms343AS', 
          status: "latest",
          payment_method: "credit card",
          created_at: "2024-07-09T12:30:00Z",
          updated_at: "2024-07-09T12:30:00Z",
          user: { user_id:35, name: "Hannah Martinez", email: "hannah@example.com" },
          products: [
            { name: "Product E", price: 70.00 },
            { name: "Product B", price: 50.00 },
            { name: "Product A", price: 30.00 },
          ],
        },
        {
          id: 9,
          total_price: 75.50,
          random_key:'sd43AS',
          status: "pending",
          payment_method: "paypal",
          created_at: "2024-07-08T10:15:00Z",
          updated_at: "2024-07-08T10:15:00Z",
          user: { user_id:12, name: "Ivy Garcia", email: "ivy@example.com" },
          products: [
            { name: "Product C", price: 40.00 },
            { name: "Product B", price: 50.00 },
          ],
        },
        {
          id: 10,
          total_price: 180.00,
          random_key:'mb23eu343AS',
          status: "completed",
          payment_method: "cash on delivery",
          created_at: "2024-07-07T13:40:00Z",
          updated_at: "2024-07-07T13:40:00Z",
          user: { user_id:34,  name: "Jack White", email: "jack@example.com" },
          products: [
            { name: "Product E", price: 70.00 },
            { name: "Product D", price: 60.00 },
          ],
        },
      ]
     
    
};

export const OrderReducer = (state = initialValues, action) => {
  switch (action.type) {

      case ADD_TO_CART:
          return { ...state, orders: [...state.orders, { ...action.payload.data, count:action.payload.count }]};

      case INCREMENT:
          return {
              ...state,
              orders: state.orders.map(order =>
                  order.id === action.payload ? { ...order, count: order.count + 1 } : order
              )
          };

      case DECRIMENT:
          return {
              ...state,
              orders: state.orders.map(order =>
                  order.id === action.payload ? { ...order, count: Math.max(1, order.count - 1) } : order
              )
          };

      case UPDATE_COUNT_ORDER:
          return {
            ...state , orders: state.orders.map((order) => {
               return  order.id === action.payload.id ? {...order, count:action.payload.quantity} : order
            })
          };

      case REMOVE_ORDER:
          return {
              ...state,
              orders: state.orders.filter((order) => {
                return order.id !== action.payload
              })
          };

      default:
          return state;
  }
};


