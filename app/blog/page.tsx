"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* your page content */}
      <Footer />
    </>
  )
}

const posts = [
  { cat:"VTU BUSINESS", title:"How to Start a Profitable VTU Business in Nigeria in 2026", date:"Sep 28, 2026", read:"5 min read" },
  { cat:"API", title:"GTSERVIZ API: Integrate Airtime & Data in 10 Minutes", date:"Sep 20, 2026", read:"4 min read" },
  { cat:"ELECTRICITY", title:"Why Electricity Token Purchases Fail & How We Fix It", date:"Sep 15, 2026", read:"3 min read" },
  { cat:"RESELLER", title:"Become a Reseller: Earn Up to 20% Commission Daily", date:"Sep 10, 2026", read:"6 min read" },
];

export default function BlogPage(){
  const [open,setOpen]=useState(false);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/5 h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2"><div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center"><Image src="/logo.png" alt="GT" width={36} height={36} /></div><span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span></Link>
          <nav className="hidden lg:flex gap-7 text-[13.5px] text-white/60"><Link href="/" className="hover:text-white">Home</Link><Link href="/#services" className="hover:text-white">Services</Link><Link href="/api" className="hover:text-white">API</Link><Link href="/blog" className="text-[#00ff88] font-bold border-b-2 border-[#00ff88] pb-1">Blog</Link><Link href="/reseller" className="hover:text-white">Become a Reseller</Link></nav>
          <Link href="/signup" className="hidden lg:block px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Create Account</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
      </header>

      <section className="pt-[120px] pb-10 max-w-[1280px] mx-auto px-6">
        <p className="text-[#00A54F] text-[10px] font-black tracking-widest">GTSERVIZ INSIGHTS</p>
        <h1 className="text-[36px] font-black text-[#061e14] leading-[1.1] mt-2">Guides, Updates & VTU<br/>Business Tips</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((p,i)=>(
            <div key={i} className="bg-white rounded-2xl border p-5 hover:shadow-lg transition">
              <span className="text-[10px] font-black px-2 py-1 rounded-full bg-[#e6f6ec] text-[#00A54F]">{p.cat}</span>
              <h3 className="font-bold text-[14px] text-[#061e14] mt-3 leading-[1.4]">{p.title}</h3>
              <p className="text-[11px] text-slate-400 mt-3">{p.date} • {p.read}</p>
              <Link href="#" className="inline-block mt-4 text-[11px] font-bold text-[#00A54F]">Read Article →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
