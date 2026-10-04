"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";

const products = [
  { name:"MTN 1GB - 30 Days", price:"₦350", cat:"Data Bundle", popular:true },
  { name:"Airtel 2GB - 30 Days", price:"₦700", cat:"Data Bundle", popular:false },
  { name:"Glo 3.5GB - 30 Days", price:"₦1,000", cat:"Data Bundle", popular:true },
  { name:"DSTV Compact", price:"₦10,500", cat:"Cable TV", popular:false },
];

export default function StorePage(){
  const [open,setOpen]=useState(false);
  const [cart,setCart]=useState(0);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/5 h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2"><div className="w-9 h-9 bg-white rounded-full flex items-center justify-center"><Image src="/logo.png" alt="GT" width={36} height={36} /></div><span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span></Link>
          <nav className="hidden lg:flex gap-7 text-[13.5px] text-white/60"><Link href="/" className="hover:text-white">Home</Link><Link href="/store" className="text-[#00ff88] font-bold border-b-2 border-[#00ff88] pb-1">Store</Link><Link href="/blog" className="hover:text-white">Blog</Link><Link href="/reseller" className="hover:text-white">Become a Reseller</Link></nav>
          <div className="hidden lg:flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white/10 text-white text-[12px]">🛒 Cart ({cart})</div>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Shop Now</Link>
          </div>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
      </header>

      <section className="pt-[100px] max-w-[1280px] mx-auto px-6">
        <div className="bg-[#061e14] rounded-[24px] p-8 flex justify-between items-center">
          <h1 className="text-white text-[28px] font-black">Buy Data, Airtime & Bills<br/>at Best Rates</h1>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p,i)=>(
            <div key={i} className="bg-white rounded-2xl border p-4 relative">
              {p.popular && <span className="absolute top-3 right-3 text-[9px] font-black px-2 py-1 rounded-full bg-[#00A54F] text-white">POPULAR</span>}
              <p className="text-[10px] font-bold text-[#00A54F] mt-3">{p.cat}</p>
              <h3 className="font-bold text-[13px] mt-1">{p.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <p className="font-black text-[14px]">{p.price}</p>
                <button onClick={()=>setCart(cart+1)} className="px-3 py-1.5 rounded-full bg-[#061e14] text-white text-[11px] font-bold">Add +</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
