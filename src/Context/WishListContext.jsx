import React, { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

  const [wishList, setwishList] = useLocalStorage("wishList", [])

  function toggleWishList(item) {
    const index = wishList.findIndex((x) => x.id === item.id)
    if (index === -1) {
      setwishList([...wishList, item])
      return
    }

    setwishList(wishList.filter((x) => x.id !== item.id))

  }
  function checkIsWishList(item) {
    const element = wishList.find((x) => x.id === item.id);
    if (element) {
      return true
    }
    return false
  }
  const data = { wishList, setwishList, toggleWishList, checkIsWishList }

  return (
    <WishlistContext.Provider value={data}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;