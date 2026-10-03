"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const products = [
  { name:"MTN 1GB - 30 Days", price:"₦350", cat:"Data Bundle", popular:true },
  { name:"Airtel 2GB - 30 Days", price:"₦700", cat:"Data Bundle", popular:false },
  { name:"Glo 3.5GB - 30 Days", price:"₦1,000", cat:"Data Bundle", popular:true },
  { name:"DSTV Compact", price:"₦10,500", cat:"Cable TV", popular:false },
  { name:"GOTV Max", price:"₦4,850", cat:"Cable TV", popular:false },
  { name:"IKEDC Token - ₦5,000", price:"₦5,000", cat:"Electricity", popular:true },
  { name:"Smile 10GB Router Bundle", price:"₦8,000", cat:"Internet", popular:false },
  { name:"Startimes Nova", price:"₦1,500", cat:"Cable TV", popular:false },
];

export default function StorePage(){
  const [open,setOpen]=useState(false);
  const [cart,setCart]=useState(0);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/5 h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center"><Image src="/logo.png" alt="GT" width={36} height={36} /></div>
            <span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span>
          </Link>
          <nav className="hidden lg:flex gap-7 text-[13.5px] text-white/60 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/api" className="hover:text-white">API</Link>
            <Link href="/store" className="text-[#00ff88] font-bold border-b-2 border-[#00ff88] pb-1">Store</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/reseller" className="hover:text-white">Become a Reseller</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white/10 text-white text-[12px]">🛒 Cart ({cart})</div>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Shop Now</Link>
          </div>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-[100px] max-w-[1280px] mx-auto px-6">
        <div className="bg-[#061e14] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-[#00ff88] text-[10px] font-black tracking-widest">GTSERVIZ DIGITAL STORE</p>
            <h1 className="text-white text-[28px] md:text-[36px] font-black leading-[1.1] mt-2">Buy Data, Airtime & Bills<br/>at Best Rates</h1>
            <p className="text-white/60 text-[13px] mt-3 max-w-[420px]">Instant delivery, 24/7 support, lowest prices for all networks and billers in Nigeria.</p>
          </div>
          <div className="flex gap-2 text-[11px] font-bold">
            <span className="px-3 py-1.5 rounded-full bg-white text-[#061e14]">All</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20">Data</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20">Airtime</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20">Cable</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20">Electricity</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p,i)=>(
            <div key={i} className="bg-white rounded-2xl border p-4 hover:shadow-md transition relative">
              {p.popular && <span className="absolute top-3 right-3 text-[9px] font-black px-2 py-1 rounded-full bg-[#00A54F] text-white">POPULAR</span>}
              <div className="w-full h-[80px] bg-[#f1f5f9] rounded-xl flex items-center justify-center text-[28px]">
                {p.cat==="Data Bundle"? "📶" : p.cat==="Cable TV"? "📺" : p.cat==="Electricity"? "⚡" : "🌐"}
              </div>
              <p className="text-[10px] font-bold text-[#00A54F] mt-3">{p.cat}</p>
              <h3 className="font-bold text-[13px] text-[#061e14] mt-1 leading-[1.3]">{p.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <p className="font-black text-[14px] text-[#061e14]">{p.price}</p>
                <button onClick={()=>setCart(cart+1)} className="px-3 py-1.5 rounded-full bg-[#061e14] text-white text-[11px] font-bold hover:bg-[#00A54F]">Add +</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div><h4 className="font-black text-[#061e14]">Need bulk purchase or custom pricing?</h4><p className="text-[12px] text-slate-500 mt-1">Contact our sales team for API + Store integration.</p></div>
          <Link href="/api" className="px-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-[12px]">Use Our API →</Link>
        </div>
      </section>
    </div>
  );
}
