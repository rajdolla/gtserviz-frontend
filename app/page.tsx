"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f7fb] text-[#0f2440]">
       <header className="fixed top-0 w-full z-[100] bg-[#061e14]/95 backdrop-blur-md border-b border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center">
              <Image src="/logo.png" alt="GT" width={36} height={36} />
            </div>
            <span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium">
            <Link href="/" className="text-[#00A54F] font-bold">Home</Link>
            <Link href="/#services" className="text-white/60 hover:text-white transition">Services</Link>
            <Link href="/#pricing" className="text-white/60 hover:text-white transition">Pricing</Link>
            <Link href="/#store" className="text-white/60 hover:text-white transition">Store</Link>
            <Link href="/#blog" className="text-white/60 hover:text-white transition">Blog</Link>
            <Link href="/api" className="text-white/60 hover:text-white transition">API</Link>
            <Link href="#" className="text-white/60 hover:text-white transition">Reseller</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-white/80 hover:text-white text-[13px] font-medium px-4 py-2">Login</Link>
            <Link href="/signup" className="px-6 py-3 rounded-full bg-[#00A54F] hover:bg-[#009346] text-white text-[13px] font-black transition">Create Account</Link>
          </div>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center">
            {open? "✕" : "☰"}
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-[#0a2a1a] border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white text-[14px]">
            <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
            <Link href="/#services" onClick={()=>setOpen(false)}>Services</Link>
            <Link href="/#pricing" onClick={()=>setOpen(false)}>Pricing</Link>
            <Link href="/#store" onClick={()=>setOpen(false)}>Store</Link>
            <Link href="/#blog" onClick={()=>setOpen(false)}>Blog</Link>
            <Link href="/api" onClick={()=>setOpen(false)} className="text-[#00ff88] font-bold">API →</Link>
            <div className="flex gap-3 mt-3 pt-5 border-t border-white/10">
              <Link href="/login" className="flex-1 py-3 rounded-full border border-white/20 text-center">Login</Link>
              <Link href="/signup" className="flex-1 py-3 rounded-full bg-[#00A54F] text-center font-black">Create Account</Link>
            </div>
          </div>
        )}
      </header>

      <section className="bg-[#061e14] relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e3320] to-[#061e14]" />
        <div className="max-w-[1240px] mx-auto px-5 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="text-center md:text-left">
            <div className="inline-flex px-3 py-1 rounded-full border border-[#00A54F]/40 bg-[#00A54F]/10 text-[#7cffb0] text-[10px] font-black">● FAST, CHEAP & SECURE</div>
            <h1 className="text-white text-[32px] md:text-[50px] font-black leading-[1.05] mt-5">Fast, Cheap & Secure<br/>Airtime, Data, Cable TV<br/>and <span className="text-[#00A54F]">More!</span></h1>
            <p className="text-white/60 text-[14px] mt-4 max-w-[420px] mx-auto md:mx-0">Top up airtime, buy data, pay bills, and more — instant, affordable, and reliable.</p>
            <div className="flex gap-3 mt-7 justify-center md:justify-start">
              <Link href="/signup" className="px-7 py-3.5 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get Started →</Link>
              <Link href="#pricing" className="px-7 py-3.5 rounded-full bg-white/10 text-white font-black text-[13px] border border-white/10">View Pricing</Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-[#00A54F]/20 blur-[50px] rounded-full" />
            <div className="relative w-[280px] h-[560px] bg-black rounded-[42px] p-[8px] shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_25px_80px_rgba(0,0,0,0.6)] z-10">
              <div className="w-full h-full bg-white rounded-[34px] overflow-hidden flex flex-col">
                <div className="h-7 flex justify-center items-center"><div className="w-20 h-4 bg-black rounded-full" /></div>
                <div className="px-4 py-2 flex justify-between border-b"><div className="flex gap-2 items-center"><div className="w-6 h-6 bg-[#00A54F] rounded-full flex items-center justify-center text-white text-[8px] font-black">GT</div><span className="font-black text-[11px] text-[#065F36]">GTSERVIZ</span></div><span>🔔</span></div>
                <div className="mx-3 mt-3 bg-gradient-to-br from-[#065F36] to-[#00A54F] rounded-2xl p-4 text-white"><p className="text-[9px] opacity-70 font-bold">WALLET BALANCE</p><p className="text-[22px] font-black">₦2,450.00</p></div>
                <div className="grid grid-cols-3 gap-2 p-3">
                  <div className="bg-slate-50 rounded-xl p-3 text-center border text-[9px] font-bold">📱 Airtime</div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border text-[9px] font-bold">📶 Data</div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border text-[9px] font-bold">📺 TV</div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border text-[9px] font-bold">💡 Electric</div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border text-[9px] font-bold">🎓 Exam</div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border text-[9px] font-bold">💸 To Cash</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-[1240px] mx-auto px-5 -mt-8 relative z-20 grid grid-cols-2 md:grid-cols-6 gap-3">
        {["Airtime","Data","Cable TV","Airtime to Cash","Electricity","Exam Pins"].map((t,i)=><div key={i} className="bg-white rounded-xl border p-4 text-center shadow-sm"><p className="font-black text-[12px]">{t}</p><p className="text-[10px] text-slate-500 mt-1">Instant delivery</p></div>)}
      </section>

      <section id="pricing" className="max-w-[1240px] mx-auto px-5 py-16 bg-[#eef5f0] rounded-[24px] mt-12"><p className="text-center text-[#00A54F] text-[11px] font-black">AFFORDABLE PRICING</p><h2 className="text-center text-[26px] font-black mt-2">Best rates for all services</h2><div className="grid md:grid-cols-3 gap-5 mt-10 max-w-[1000px] mx-auto"><div className="bg-white border rounded-2xl p-6"><h3 className="font-black">MTN Data</h3><p className="text-[28px] font-black text-[#065F36] mt-2">₦275 / 1GB</p><Link href="/signup" className="block mt-4 py-3 rounded-full bg-[#e6f6ec] text-center font-black text-[12px] text-[#065F36]">Buy Now</Link></div><div className="bg-[#061e14] text-white rounded-2xl p-6 md:scale-105 shadow-xl"><h3 className="font-black">Airtel Data</h3><p className="text-[28px] font-black text-[#00FF88] mt-2">₦280 / 1GB</p><Link href="/signup" className="block mt-4 py-3 rounded-full bg-[#00A54F] text-center font-black text-[12px]">Buy Now</Link></div><div className="bg-white border rounded-2xl p-6"><h3 className="font-black">Glo Data</h3><p className="text-[28px] font-black text-[#065F36] mt-2">₦270 / 1GB</p><Link href="/signup" className="block mt-4 py-3 rounded-full bg-[#e6f6ec] text-center font-black text-[12px] text-[#065F36]">Buy Now</Link></div></div></section>

      <section id="store" className="bg-white border-y py-16 mt-16"><div className="max-w-[1240px] mx-auto px-5"><p className="text-[#00A54F] text-[11px] font-black">GTSERVIZ STORE</p><h2 className="text-[24px] font-black mt-1">Digital Products Marketplace</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"><div className="border rounded-xl p-4 bg-[#f8faf8]">📦 MTN 1GB - ₦275</div><div className="border rounded-xl p-4 bg-[#f8faf8]">📺 DSTV Compact - ₦10,500</div><div className="border rounded-xl p-4 bg-[#f8faf8]">🎓 JAMB Pin - ₦4,200</div><div className="border rounded-xl p-4 bg-[#f8faf8]">💡 Electricity - From ₦1000</div></div></div></section>

      <section id="blog" className="max-w-[1240px] mx-auto px-5 py-16"><p className="text-[#00A54F] text-[11px] font-black">LATEST FROM BLOG</p><h2 className="text-[24px] font-black mt-1">Tips, News & Updates</h2><div className="grid md:grid-cols-3 gap-5 mt-8">{["How to start VTU business in 2026","Cheapest data plans this month","GTServiz API for developers"].map((t,i)=><div key={i} className="bg-white border rounded-xl p-5"><h4 className="font-black text-[14px]">{t}</h4><p className="text-[12px] text-slate-500 mt-2">Read more →</p></div>)}</div></section>

      <footer className="bg-[#061e14] border-t border-white/[0.07] pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div className="col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center"><Image src="/logo.png" alt="GT" width={36} height={36} /></div>
                <span className="text-white font-black tracking-[0.15em] text-[14px]">GTSERVIZ</span>
              </div>
              <p className="text-white/50 text-[13px] leading-[1.6] mt-4 max-w-[280px]">Fast, cheap & secure VTU services. Buy airtime, data, pay bills and convert airtime to cash instantly.</p>
            </div>
            <div><h4 className="text-white font-black text-[12px] tracking-widest mb-5">SERVICES</h4><div className="flex flex-col gap-3 text-[13px] text-white/50"><Link href="#" className="hover:text-white">Airtime</Link><Link href="#" className="hover:text-white">Data</Link><Link href="#" className="hover:text-white">Cable TV</Link><Link href="#" className="hover:text-white">Electricity</Link><Link href="#" className="hover:text-white">Airtime to Cash</Link></div></div>
            <div><h4 className="text-white font-black text-[12px] tracking-widest mb-5">COMPANY</h4><div className="flex flex-col gap-3 text-[13px] text-white/50"><Link href="#" className="hover:text-white">About</Link><Link href="#pricing" className="hover:text-white">Pricing</Link><Link href="#store" className="hover:text-white">Store</Link><Link href="#blog" className="hover:text-white">Blog</Link><Link href="#" className="hover:text-white">API Docs</Link></div></div>
            <div><h4 className="text-white font-black text-[12px] tracking-widest mb-5">SUPPORT</h4><div className="flex flex-col gap-3 text-[13px] text-white/50"><p>07012222025</p><p>support@gtserviz.com</p><Link href="https://wa.me/2347012222025" className="mt-2 inline-flex px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[12px] font-bold w-fit">WhatsApp</Link></div></div>
          </div>
          <div className="mt-14 pt-8 border-t border-white/[0.07] flex justify-between items-center"><p className="text-white/30 text-[12px]">© 2026 GTSERVIZ</p><div className="flex gap-6 text-[12px] text-white/30"><span>Privacy</span><span>Terms</span></div></div>
        </div>
      </footer>
    </div>
  );
}
