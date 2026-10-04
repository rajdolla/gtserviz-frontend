"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function ResellerPage(){
  const [open,setOpen]=useState(false);
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/5 h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2"><div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center"><Image src="/logo.png" alt="GT" width={36} height={36} /></div><span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span></Link>
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
            <p className="text-white/60 text-[14px] mt-4 leading-[1.7] max-w-[500px]">Launch your own VTU business with our reseller platform. Get your own website, API, pricing control and earn commission on every transaction.</p>
            <div className="flex gap-3 mt-6">
              <Link href="/signup" className="px-7 py-3.5 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Create Reseller Account →</Link>
              <Link href="#pricing" className="px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-[13px]">See Pricing</Link>
            </div>
            <div className="flex gap-6 mt-6 text-[11px] text-white/60"><span>✔ No coding needed</span><span>✔ Instant setup</span><span>✔ Your own branding</span></div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-[#061e14]">
            <h3 className="font-black">Why Resellers Choose Us</h3>
            <div className="mt-4 space-y-3 text-[12px]">
              <p className="flex gap-2"><span className="w-5 h-5 bg-[#e6f6ec] rounded-full flex items-center justify-center text-[#00A54F]">✓</span> Your own VTU website + mobile app</p>
              <p className="flex gap-2"><span className="w-5 h-5 bg-[#e6f6ec] rounded-full flex items-center justify-center text-[#00A54F]">✓</span> Set your own prices & profit margin</p>
              <p className="flex gap-2"><span className="w-5 h-5 bg-[#e6f6ec] rounded-full flex items-center justify-center text-[#00A54F]">✓</span> Wallet funding & automated payouts</p>
              <p className="flex gap-2"><span className="w-5 h-5 bg-[#e6f6ec] rounded-full flex items-center justify-center text-[#00A54F]">✓</span> 24/7 support & 99.9% uptime</p>
            </div>
            <div className="mt-6 bg-[#061e14] rounded-xl p-4 text-white flex justify-between items-center">
              <div><p className="text-[10px] text-white/50">STARTING FROM</p><p className="font-black text-[18px]">₦0 / month</p></div><Link href="/signup" className="px-4 py-2 rounded-full bg-[#00A54F] text-[11px] font-black">Get Started Free</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 max-w-[1280px] mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-6"><h4 className="font-black">Starter</h4><p className="text-[24px] font-black mt-2">Free</p><p className="text-[11px] text-slate-500 mt-3">Perfect to test the platform</p><Link href="/signup" className="mt-5 block text-center py-2.5 rounded-full border font-bold text-[12px]">Choose Starter</Link></div>
        <div className="border-2 border-[#00A54F] rounded-2xl p-6 bg-[#f6fdf8] relative"><span className="absolute -top-3 left-6 px-2 py-1 rounded-full bg-[#00A54F] text-white text-[9px] font-black">MOST POPULAR</span><h4 className="font-black">Pro Reseller</h4><p className="text-[24px] font-black mt-2">₦10,000</p><p className="text-[11px] text-slate-500 mt-3">Own domain + API + App</p><Link href="/signup" className="mt-5 block text-center py-2.5 rounded-full bg-[#00A54F] text-white font-bold text-[12px]">Choose Pro</Link></div>
        <div className="border rounded-2xl p-6"><h4 className="font-black">Enterprise</h4><p className="text-[24px] font-black mt-2">Custom</p><p className="text-[11px] text-slate-500 mt-3">For large teams & high volume</p><Link href="/signup" className="mt-5 block text-center py-2.5 rounded-full border font-bold text-[12px]">Contact Sales</Link></div>
      </section>
    </div>
  );
}
