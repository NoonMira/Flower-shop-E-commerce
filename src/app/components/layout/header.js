'use client'
import { useState } from "react";
import SearchModal from "./searchModal";
import CartModal from "./cartModal";
import { useCart } from "../context/cartContext";
import Link from "next/link";

// components/Navbar.js
export default function Navbar() {
  const { getTotalQuantity } = useCart();

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);
    return (
<div className="navbar bg-rose-200 text-white lg:[calc(100%-320px)] h-[80px] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-pink-100 text-red-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Order</a></li>
        <li><a>About</a></li>
        <li><a>For admin</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link href={"/"} className="btn btn-ghost text-xl">RosyBloom</Link>
  </div>
  {/* <Link href={""}>Flower</Link> */}
  <div className="navbar-end">
    
  <div className="relative flex flex-row">
            {/* Search Modal */}
            <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
            
            {/* Cart Modal */}
            <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />

            {/* Button to open Search Modal */}
            <button onClick={openSearchModal} className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            {/* Button to open Cart Modal */}
            <button onClick={openCartModal} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item">{getTotalQuantity()}</span>
                </div>
            </button>
        </div>
  </div>
</div>
    );
  }
  