"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function StorePage() {
  const [open, setOpen] = useState(false);
  const products = [
    {t:"MTN 1GB SME",p:"₦275",cat:"Data",icon:"📶"},
    {t:"MTN 2GB SME",p:"₦550",cat:"Data",icon:"📶"},
    {t:"Airtel 1GB",p:"₦280",cat:"Data",icon:"📶"},
    {t:"Glo 1GB",p:"₦270",cat:"Data",icon:"📶"},
    {t:"DSTV Compact",p:"₦10,500",cat:"Cable TV",icon:"📺"},
    {t:"GOTV Max",p:"₦4,200",cat:"Cable TV",icon:"📺"},
    {t:"IKEDC Token",p:"From ₦1,000",cat:"Electricity",icon:"💡"},
    {t:"JAMB PIN",p:"₦4,700",cat:"Exam",icon:"🎓"},
  ];
  return (
    <div className="min-h-screen bg-[#f2f7fb]">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5"><div className="w-8 h-8 bg-white rounded-full overflow-hidden"><Image src="/logo.png" alt="GT" width={32} height={32}/></div><span className="text-white font-black">GTSERVIZ</span></Link>
          <nav className="hidden lg:flex gap-6 text-[13px] text-white/60"><Link href="/">Home</Link><Link href="/pricing">Pricing</Link><Link href="/store" className="text-[#00A54F] font-bold border-b-2 border-[#00A54F] py-5">Store</Link><Link href="/blog">Blog</Link></nav>
          <Link href="/signup" className="hidden lg:block px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[12px] font-black">Create Account</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
      </header>

      <section className="pt-24 pb-16">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="text-[#00A54F] text-[11px] font-black tracking-widest">GTSERVIZ STORE</p>
          <h1 className="text-[28px] font-black mt-1">Digital Marketplace</h1>
          <div className="flex gap-2 mt-6 overflow-x-auto">
            {["All","Data","Airtime","Cable TV","Electricity","Exam"].map(c=><button key={c} className={`px-4 py-2 rounded-full text-[12px] font-bold border ${c==="All"?"bg-[#061e14] text-white":"bg-white text-slate-600"}`}>{c}</button>)}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {products.map((it,i)=>(
              <div key={i} className="bg-white border rounded-xl p-4 hover:shadow-md transition">
                <div className="h-28 bg-[#f8faf8] rounded-lg border flex items-center justify-center text-[32px]">{it.icon}</div>
                <p className="text-[10px] text-[#00A54F] font-black mt-3">{it.cat}</p>
                <p className="font-black text-[13px]">{it.t}</p>
                <div className="flex justify-between items-center mt-3"><span className="font-black text-[#065F36]">{it.p}</span><Link href="/signup" className="px-3 py-1.5 bg-[#00A54F] text-white rounded-full text-[10px] font-black">Buy</Link></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-[#0b1f35] text-white/60 py-8 text-center text-[12px]">© 2026 GTSERVIZ Store • 07012222025</footer>
    </div>
  )
}
