'use client';
import { useCart } from '../context/cartContext';
import { useState, useEffect } from 'react';

const CartModal = ({ isOpen, onClose }) => {
    const { cartItems, addToCart, removeFromCart, clearCart, removeItemFromCart } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        const total = cartItems.reduce(
            (acc, item) => acc + (item.price * item.quantity || 0),
            0
        );
        setTotalPrice(total);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
            onClick={onClose}
        >
            <div
                className="bg-rose-300 p-4 shadow-lg max-w-md mx-auto mt-24"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl mb-4">Cart</h2>

                {cartItems.length === 0 ? (
                    <h4>Your cart is empty.</h4>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between mb-2 items-center">
                                    <img src={item.image} alt={item.name} className='w-14' />
                                    <span>{item.name}</span>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="px-2 bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="px-2 bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        onClick={() => removeItemFromCart(item.id)}
                                        className="text-gray-500"
                                    >
                                        X
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-4">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <hr></hr>
                        <div className='mt-2 flex justify-between'>
                            <button className='text-white bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500 hover:bg-gradient-to-br text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={clearCart}>Clear</button>
                            <button className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br text-sm px-5 py-2.5 text-center me-2 mb-2'>Check Out</button>
                        </div>
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartModal;
