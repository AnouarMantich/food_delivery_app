import React, { useEffect, useState } from "react";
import { USDollar } from "../utils/helperFunctions";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ item }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const addItem = () => {
    dispatch({
      type: actionType.INCREMENT_QTY,
      itemId: item.id,
    });
  };

  const removeItem = () => {
    dispatch({
      type: actionType.DECREMENT_QTY,
      itemId: item.id,
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="w-full p-1 px-2 rounded-lg ng-cartItem flex items-center gap-2">
      <img
        src={item.imageUrl}
        alt=""
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          {USDollar.format(item.price)}
        </p>
      </div>
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={removeItem}>
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {item.qty}
        </p>
        <motion.div whileTap={{ scale: 0.75 }} onClick={addItem}>
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
