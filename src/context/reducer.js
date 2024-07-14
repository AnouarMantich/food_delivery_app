export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  INCREMENT_QTY: "INCREMENT_QTY",
  DECREMENT_QTY: "DECREMENT_QTY",
  EMPTY_CART: "EMPTY_CART",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.foodItems,
      };
    case actionType.INCREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id !== action.itemId ? item : { ...item, qty: item.qty + 1 }
        ),
      };

    case actionType.DECREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id !== action.itemId
              ? item
              : item.qty <= 0
              ? item
              : { ...item, qty: item.qty - 1 }
          )
          .filter((item) => item.qty > 0),
      };

    case actionType.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default reducer;
