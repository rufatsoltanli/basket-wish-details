import React, { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const BasketContext = createContext();

function BasketProvider({ children }) {


    // const [basket, setBasket] = useState([])

    const [basket, setBasket] = useLocalStorage("basket", [])



    function addToBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (index === -1) {
            setBasket([...basket, { ...item, count: 1 }])
            return
        }
        basket[index].count++
        setBasket([...basket])
    }

    function countInc(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        basket[index].count++
        setBasket([...basket])
    }
    function countDec(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (basket[index].count === 1) {
            return

        }
        basket[index].count--
        setBasket([...basket])
    }
    function removeFromBasket(item) {
        setBasket(basket.filter((x) => x.id !== item.id))
    }

    function checkIsBasket(item) {
        const element = basket.find((x) => x.id === item.id);
        if (element) {
            
            return true
        }
        return false
    }
    const basketData = { basket, setBasket, addToBasket, countInc, countDec, removeFromBasket ,checkIsBasket}
    return (
        <BasketContext.Provider value={basketData}>
            {children}
        </BasketContext.Provider>
    );
}

export default BasketProvider;