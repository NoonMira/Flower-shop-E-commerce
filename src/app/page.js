import { Linefont } from "next/font/google";
import { headers } from "next/headers";
import Link from "next/link";
import Hero from "./components/layout/hero";

export default function Home() {
  return (
    <header>
      <Hero/>
    </header>
  );
}
