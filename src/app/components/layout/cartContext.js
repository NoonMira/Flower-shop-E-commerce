'use client';
import React,{ createContext,useState, useContext} from "react";

const CartContext = createContext()

export default function cartProvider({children}) {
    const [cartItems,setCartItems] = useState([])

    const addToCart = (items)=>{
        setCartItems([...cartItems,items])
    }
    return(
        <CartContext.Provider>
        
        </CartContext.Provider>
    )
}