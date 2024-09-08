'use client';
import { useCart } from '../context/cartContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TrashIcon } from './icons';

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

    const router = useRouter();

    if (!isOpen) return null;

    const handleCheckout = () => {
        router.push('/checkout'); 
        onClose(); 
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10 "
            onClick={onClose}
        >
            <div
                className="bg-rose-300 p-4 shadow-lg  mx-auto mt-24 rounded sm:w-[560px]"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl mb-4 text-center">Cart</h2>

                {cartItems.length === 0 ? (
                    <h4>Your cart is empty.</h4>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between mb-2 items-center ">
                                    <div className='flex flex-col xs:flex-row md:flex-col-2 items-center w-full sm:w-3/5'>
                                    <img src={item.image} alt={item.name} className='w-14 mr-4' />
                                    <p>{item.name}</p>
                                    </div>
                                    <div className="flex items-center w-full sm:w-2/5 justify-end justify-items-center">
    
                                    <div className="flex items-center gap-4">
                                      <button onClick={() => removeFromCart(item.id)} className="px-2 bg-gray-300 text-center rounded ">  - </button>

                                     <div className="flex items-center">
                                        <span className="min-w-[20px] text-center">{item.quantity}</span>
                                    </div>

                                    <button onClick={() => addToCart(item)} className="px-2 bg-gray-300 text-left rounded"> + </button>

                                     {/* <!-- ทำให้ส่วนแสดงราคาอยู่ด้านขวาและไม่ขยับ --> */}
                                    <div className="flex flex-row justify-end flex-grow">
                                         <span className="ml-2 min-w-[80px] text-left"> ${Number(item.price * item.quantity).toFixed(2)}</span>
    
                                    <button onClick={() => removeItemFromCart(item.id)} className="text-gray-500 mx-2 items-end"> <TrashIcon strokeColor="IndianRed" size="5" />
                                     </button>
                                    </div>
                                </div>  
                              </div>
                            </li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-4">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <hr></hr>
                        <div className='mt-2 flex justify-between'>
                            <button className='text-white bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500 hover:bg-gradient-to-br text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-md' onClick={clearCart}>Clear</button>
                            <button  onClick={handleCheckout} className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-md'>Checkout</button>
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
