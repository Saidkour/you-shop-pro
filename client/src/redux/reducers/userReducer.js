const initialState = {
  user: undefined,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export const setUser = (payload) => ({
  type: "set_user",
  payload,
});

export default userReducer;
