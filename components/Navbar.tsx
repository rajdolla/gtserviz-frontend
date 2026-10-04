"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar({ active = "Home" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const links = [
    { name:"Home", href:"/" }, { name:"Store", href:"/store" }, { name:"Pricing", href:"/pricing" },
    { name:"API", href:"/api" }, { name:"Blog", href:"/blog" }, { name:"Become a Reseller", href:"/reseller" },
  ];
  return (
    <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/10 h-[68px]">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center"><Image src="/logo.png" alt="logo" width={36} height={36} /></div>
          <span className="text-white font-black tracking-widest text-[13px]">GTSERVIZ</span>
        </Link>
        <nav className="hidden lg:flex gap-7">{links.map(l=><Link key={l.name} href={l.href} className={`text-[13px] ${active===l.name? "text-[#00ff88] font-bold" : "text-white/60 hover:text-white"}`}>{l.name}</Link>)}</nav>
        <Link href="/signup" className="hidden lg:block px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Create Account</Link>
        <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
      </div>
      {open && <div className="lg:hidden bg-[#061e14] px-6 py-6 space-y-3 border-t border-white/10">{links.map(l=><Link key={l.name} href={l.href} className="block text-white/60 py-1">{l.name}</Link>)}</div>}
    </header>
  );
}
