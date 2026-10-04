"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";

export default function ResellerPage(){
  const [open,setOpen]=useState(false);
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/5 h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2"><div className="w-9 h-9 bg-white rounded-full flex items-center justify-center"><Image src="/logo.png" alt="GT" width={36} height={36} /></div><span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span></Link>
          <nav className="hidden lg:flex gap-7 text-[13.5px] text-white/60"><Link href="/" className="hover:text-white">Home</Link><Link href="/api" className="hover:text-white">API</Link><Link href="/blog" className="hover:text-white">Blog</Link><Link href="/reseller" className="text-[#00ff88] font-bold border-b-2 border-[#00ff88] pb-1">Become a Reseller</Link></nav>
          <Link href="/signup" className="hidden lg:block px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Start Earning</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
      </header>

      <section className="pt-[100px] bg-[#061e14] text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex px-3 py-1 rounded-full bg-[#00A54F]/15 border border-[#00A54F]/30 text-[#00ff88] text-[10px] font-black">EARN DAILY • 0% SETUP FEE</div>
            <h1 className="text-[38px] md:text-[52px] font-black leading-[1.05] mt-4">Become a <span className="text-[#00ff88]">GTSERVIZ</span><br/>Reseller Today</h1>
            <p className="text-white/60 text-[14px] mt-4 max-w-[500px]">Launch your own VTU business with our reseller platform.</p>
            <div className="flex gap-3 mt-6">
              <Link href="/signup" className="px-7 py-3.5 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Create Reseller Account →</Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-[#061e14]">
            <h3 className="font-black">Why Resellers Choose Us</h3>
            <p className="text-[12px] mt-3">✔ Your own website + app ✔ Set your prices ✔ Instant payouts</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
