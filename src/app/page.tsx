"use client"

import NavBar from "@/front-end/NavBar";
import Banner from "@/front-end/Banner";
import Feature from "@/front-end/feature";
import Footer from "@/front-end/Footer";
import Banner2 from "@/front-end/Banner2";
import Products from "@/front-end/Products";
import SideCart from "@/front-end/SideCart";
import React, { useState } from "react";
export default function Home() {

  const [showCart,setShowCart]=useState(false)
  return (
    <main>
      <NavBar setShowCart={setShowCart}/>
      {showCart && <SideCart setShowCart={setShowCart}/>}
      <Banner/>
      <Feature/>
      <Products/>
      <Banner2/>
      <Footer/>

    </main>
  );
}
