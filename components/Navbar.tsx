"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ active = "" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const item = (name: string, href: string) => (
    <Link href={href} className={`${active===name?"text-[#00ff88] font-bold border-b-2 border-[#00ff88] pb-1":"text-white/60 hover:text-white"} transition text-[13px]`}>{name}</Link>
  );
  return (
    <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/5 h-[72px]">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-black text-[#061e14] text-[12px]">GT</div>
          <span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 font-medium">
          {item("Home", "/")}
          {item("Services", "/#services")}
          {item("Pricing", "/#pricing")}
          {item("Store", "/store")}
          {item("Blog", "/blog")}
          {item("API", "/api")}
          {item("Become a Reseller", "/reseller")}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login" className="text-white/70 text-[13px]">🔒 Login</Link>
          <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Create Account</Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0a2a1a] border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white text-[14px]">
          <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link href="/#services" onClick={()=>setOpen(false)}>Services</Link>
          <Link href="/#pricing" onClick={()=>setOpen(false)}>Pricing</Link>
          <Link href="/store" onClick={()=>setOpen(false)}>Store</Link>
          <Link href="/blog" onClick={()=>setOpen(false)}>Blog</Link>
          <Link href="/api" onClick={()=>setOpen(false)} className="text-[#00ff88] font-bold">API →</Link>
          <Link href="/reseller" onClick={()=>setOpen(false)}>Become a Reseller</Link>
          <div className="flex gap-3 mt-4 pt-5 border-t border-white/10">
            <Link href="/login" className="flex-1 py-3 rounded-full border border-white/20 text-center">Login</Link>
            <Link href="/signup" className="flex-1 py-3 rounded-full bg-[#00A54F] text-center font-black">Create Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
