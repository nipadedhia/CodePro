import React, { useState } from "react";

import Axios from "axios";
import { useEffect } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  //set up the how the shopping cart will be displayed

  const [cart, setCart] = useState([]);
  useEffect(() => {
    Axios.get("api/cart").then((res) => {
      setCart(res.data);
      console.log(res.data, "cart");
    });
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
