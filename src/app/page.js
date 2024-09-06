import { Linefont } from "next/font/google";
import { headers } from "next/headers";
import Link from "next/link";
import Hero from "@/components/layout/hero";
import { CartProvider } from "@/components/context/cartContext";

export default function Home() {
  return (
    <CartProvider>
      <Hero/>
    </CartProvider>
  );
}
