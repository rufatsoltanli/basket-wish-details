import React from "react";
import BasketProvider from "./BasketContext";
import WishlistProvider from "./WishListContext";

function MainProvider({ children }) {
    return (
        <WishlistProvider>
            <BasketProvider>{children}</BasketProvider>
        </WishlistProvider>
    );
}

export default MainProvider;