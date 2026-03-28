import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {


    //favorits

        const [fevItems, setFevItems] = useState(() => {
        const savedFev = localStorage.getItem("fevItems");
        return savedFev ? JSON.parse(savedFev) : [];
    });


    const addToFev = (item) => {
        setFevItems((prev) => {
            if(prev.some((i) => i.id === item.id)) return prev;
            return [...prev, item]
        })
    }


    useEffect(() => {
        localStorage.setItem("fevItems" , JSON.stringify(fevItems))
    }, [fevItems])


    const removeFev = (id) => {
        setFevItems((prev) => prev.filter((i) => i.id !== id))
    }

    //cart
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // increaseQuantity

    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
        );
    };

    // decreaseQuantity

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    };

    // removeCart

    const removeCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // addCart

    const addCart = (item) => {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addCart,
                increaseQuantity,
                decreaseQuantity,
                removeCart,
                fevItems,
                addToFev,
                removeFev
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
