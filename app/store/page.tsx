"use client";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
export default function StorePage(){
  const [cart,setCart]=useState(0);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar active="Store" />
      <div className="pt-[100px] max-w-[1280px] mx-auto px-6">
        <div className="bg-[#061e14] rounded-2xl p-8 flex justify-between"><h1 className="text-white font-black text-[28px]">Store</h1><span className="text-white/60 text-[12px] bg-white/10 px-3 py-1 rounded-full h-fit">Cart ({cart})</span></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[ "MTN 1GB ₦350","Airtel 2GB ₦700","Glo 3.5GB ₦1,000","DSTV Compact ₦10,500"].map((p,i)=><div key={i} className="bg-white border rounded-2xl p-4"><p className="font-bold text-[13px]">{p}</p><button onClick={()=>setCart(cart+1)} className="mt-3 px-3 py-1 rounded-full bg-[#061e14] text-white text-[11px]">Add +</button></div>)}
        </div>
      </div>
      <div className="mt-16"><Footer /></div>
    </div>
  );
}
