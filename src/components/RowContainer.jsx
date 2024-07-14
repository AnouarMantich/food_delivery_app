import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { USDollar } from "../utils/helperFunctions";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { fetchCart } from "../utils/fetchLocalSorageData";

const RowContainer = ({ flag, data = {}, scrollValue, setScrollValue }) => {
  const rowContainer = useRef();
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState(cartItems || []);

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      foodItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    if (scrollValue < 0) {
      setScrollValue((data.length - 2) * 200);
      return;
    }

    if (scrollValue > (data.length - 2) * 200) {
      setScrollValue(0);
      return;
    }

    rowContainer.current.scrollLeft = scrollValue;
  }, [scrollValue, setScrollValue, data]);

  useEffect(() => addToCart(), [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-250 md:w-250 h-[180px] bg-cardOverlay rounded-lg p-2 my-8 
      min-w-[300px] md:min-w-[340px] backdrop-blur-lg hover:drop-shadow-lg
      flex flex-col items-center justify-center relative hover:bg-gray-100 
      "
          >
            <div className="w-full flex items-center justify-between ">
              <motion.div
                className="w-40 h-40 -mt-20 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md absolute top-5 right-5"
              >
                <MdShoppingBasket
                  className="text-white"
                  // onClick={() =>
                  //   setItems((items) =>
                  //     !items.map((i) => i.id).includes(item.id)
                  //       ? [...items, item]
                  //       : items
                  //   )
                  // }

                  onClick={() =>
                    setItems((items) =>
                      !items.map((i) => i.id).includes(item.id)
                        ? [...items, item]
                        : items.map((i) =>
                            i.id !== item.id ? i : { ...i, qty: i.qty + 1 }
                          )
                    )
                  }
                />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end absolute bottom-5 right-5 ">
              <p className="max-w-[50%] text-textColor font-semibold text-sm md:text-base text-right capitalize">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item.calories} calories
              </p>
              <div className="flex items-center gap-8">
                <div className="text-lg text-headingColor font-semibold">
                  {USDollar.format(item.price)}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center ">
          <img src={NotFound} alt="not Found" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
