import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardBackspace,
} from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";

const DELIVERY_COST = 10;

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const totalPrice = cartItems
    .map((item) => item.qty * item.price)
    .reduce((acc, curr) => acc + curr, 0);

  const delivery_fee = (totalPrice * DELIVERY_COST) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardArrowRight className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
          onClick={() => {
            localStorage.clear("cartItems");

            dispatch({
              type: actionType.EMPTY_CART,
            });
          }}
        >
          {/* Clear <RiRefreshFill /> */}
        </motion.p>
      </div>
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div className="w-full h-[55%]  md:h-[60%] md:h-42 px-6 py-10 flex-col gap-3 overflow-y-scroll scrollbar-none">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 ">
              <img src={EmptyCart} alt="" className="w-300" />
              <p className="text-xl text-textColor font-semibold">
                Add some items to your cart
              </p>
            </div>
          )}
        </div>

        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center  px-8 py-2 overflow-y-scroll scrollbar-none ">
          <div className="w-full flex items-center mt-5 justify-between">
            <p className="text-gray-400 text-lg">Sub Total</p>
            <p className="text-gray-400 text-lg"> $ {totalPrice}</p>
          </div>
          <div className="w-full flex items-center mt-5 justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg"> $ {delivery_fee}</p>
          </div>
          <div className="w-full border-b border-gray-600 mt-5 my-2"></div>

          <div className="w-full flex items-center mt-5 justify-between">
            <p className="text-gray-400 text-lg">Total</p>
            <p className="text-gray-400 text-lg">
              {" "}
              $ {totalPrice + delivery_fee}
            </p>
          </div>
          {user ? (
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-full p-2 rounded-full bg-orange-500 mt-5 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
            >
              Check Out
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-full p-2 rounded-full bg-orange-500 mt-5 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
            >
              Login To Check Out
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CartContainer;
