import { fetchCart, fetchUser } from "../utils/fetchLocalSorageData";

const user = fetchUser();
const cartItems = fetchCart();
export const initialState = {
  user: user,
  foodItems: null,
  cartShow: false,
  cartItems: cartItems || [],
};
