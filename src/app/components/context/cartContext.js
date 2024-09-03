'use client';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex !== -1) {
            const updatedItems = [...cartItems];
            updatedItems[itemIndex].quantity += 1;
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    // กรอง ถ้าตรงให้ลบออก
    const removeItemFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter(cartItem => cartItem.id !== itemId)
        );
    };
    
    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, removeItemFromCart, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
