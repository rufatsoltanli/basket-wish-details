import React, { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

  const [wishList, setwishList] = useLocalStorage("wishList", [])

  

  return (
    <WishlistContext.Provider value={""}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;