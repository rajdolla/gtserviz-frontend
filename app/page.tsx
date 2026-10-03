"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f7fb] text-[#0f2440]">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-ring { 0%{transform:scale(0.8);opacity:1} 100%{transform:scale(2.3);opacity:0} }
      .float-anim{animation:float 4s ease-in-out infinite}
      .float-anim2{animation:float 4s ease-in-out infinite 1s}
      .float-anim3{animation:float 4s ease-in-out infinite 2s}
      .pulse-ring::before{content:'';position:absolute;inset:0;border-radius:9999px;background:#25D366;animation:pulse-ring 2s infinite}
      `}</style>

      {/* HEADER - Responsive */}
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden"><Image src="/logo.png" alt="GT" width={32} height={32}/></div>
            <span className="text-white font-black text-[18px]">GTSERVIZ</span>
          </Link>
          <nav className="hidden lg:flex gap-7 text-[13px] text-white/70"><Link href="#" className="text-[#00A54F] font-bold">Home</Link><Link href="#services">Services</Link><Link href="#">API</Link><Link href="#">Reseller</Link></nav>
          <div className="hidden lg:flex gap-3"><Link href="/login" className="text-white text-[13px] px-4">Login</Link><Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[12px] font-black">Create Account</Link></div>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
        {open && <div className="lg:hidden bg-[#0a2a1a] border-t border-white/10 px-6 py-5 flex flex-col gap-4 text-white"><Link href="#">Home</Link><Link href="#services">Services</Link><Link href="/signup" className="mt-2 py-3 rounded-full bg-[#00A54F] text-center font-black">Create Account</Link></div>}
      </header>

      {/* HERO */}
      <section className="bg-[#061e14] relative pt-[64px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e3320] to-[#061e14]" />
        <div className="max-w-[1240px] mx-auto px-5 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">

          <div className="text-center md:text-left">
            <h1 className="text-white text-[34px] md:text-[48px] font-black leading-[1.05]">Fast, Cheap & Secure<br/> Airtime, Data, Cable TV<br/> and <span className="text-[#00A54F]">More!</span></h1>
            <p className="text-white/60 text-[13px] mt-4 max-w-[420px] mx-auto md:mx-0">All VTU services in one place. Instant delivery.</p>
            <div className="flex gap-3 mt-7 justify-center md:justify-start"><Link href="/signup" className="px-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get Started →</Link></div>
          </div>

          {/* PHONE AREA - No overlay inside phone */}
          <div className="relative flex justify-center md:justify-end">
            {/* Glow behind phone - so edges visible */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-[#00A54F]/20 blur-[50px] rounded-full" />

            {/* Phone - CLEAN, no chips inside */}
            <div className="relative w-[280px] h-[560px] bg-black rounded-[42px] p-[8px] shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_25px_80px_rgba(0,0,0,0.6)] z-10">
              <div className="w-full h-full bg-white rounded-[34px] overflow-hidden">
                <div className="h-7 flex justify-center items-center"><div className="w-20 h-4 bg-black rounded-full"/></div>
                <div className="px-4 py-2 flex justify-between items-center">
                  <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#00A54F] rounded-full flex items-center justify-center"><span className="text-white text-[10px] font-black">GT</span></div><span className="font-black text-[11px] text-[#065F36]">GTSERVIZ</span></div>
                  <span className="text-[10px]">🔔</span>
                </div>
                <div className="mx-3 mt-2 bg-[#e9f7ed] rounded-2xl p-4">
                  <p className="text-[9px] font-bold text-[#065F36]/60 tracking-widest">WALLET BALANCE</p>
                  <p className="text-[22px] font-black text-[#065F36] mt-1">₦2,450.00</p>
                  <div className="flex gap-2 mt-3">
                    <div className="flex-1 bg-[#00A54F] text-white text-[10px] font-black py-2.5 rounded-full text-center">Fund</div>
                    <div className="flex-1 bg-white border text-[#065F36] text-[10px] font-black py-2.5 rounded-full text-center">History</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-3">
                  <div className="bg-slate-50 rounded-xl p-2 text-center border"><div>📱</div><p className="text-[8px] font-bold">Airtime</p></div>
                  <div className="bg-slate-50 rounded-xl p-2 text-center border"><div>📶</div><p className="text-[8px] font-bold">Data</p></div>
                  <div className="bg-slate-50 rounded-xl p-2 text-center border"><div>📺</div><p className="text-[8px] font-bold">TV</p></div>
                  <div className="bg-slate-50 rounded-xl p-2 text-center border"><div>💡</div><p className="text-[8px] font-bold">Electric</p></div>
                  <div className="bg-slate-50 rounded-xl p-2 text-center border"><div>🎓</div><p className="text-[8px] font-bold">Exam</p></div>
                  <div className="bg-slate-50 rounded-xl p-2 text-center border"><div>💸</div><p className="text-[8px] font-bold">To Cash</p></div>
                </div>
              </div>
            </div>

            {/* FLOATING CHIPS - NOW OUTSIDE PHONE */}
            <div className="absolute -right-2 md:-right-6 top-[18%] z-20 float-anim">
              <div className="px-4 py-2.5 bg-white rounded-xl shadow-xl border border-slate-200 flex items-center gap-2 text-[11px] font-bold text-slate-800">📱 Airtime</div>
            </div>
            <div className="absolute -right-2 md:right-2 top-[38%] z-20 float-anim2">
              <div className="px-4 py-2.5 bg-white rounded-xl shadow-xl border border-slate-200 flex items-center gap-2 text-[11px] font-bold text-slate-800">📶 Data</div>
            </div>
            <div className="absolute -right-2 md:-right-2 top-[58%] z-20 float-anim3">
              <div className="px-4 py-2.5 bg-white rounded-xl shadow-xl border border-slate-200 flex items-center gap-2 text-[11px] font-bold text-slate-800">📺 Cable TV</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1f35] text-white/60 py-10 text-center text-[12px]">© 2026 GTSERVIZ • 07012222025 • www.gtserviz.com</footer>

      {/* WHATSAPP - REAL SVG + PULSE */}
      <a href="https://wa.me/2347012222025?text=Hello%20GTServiz" target="_blank" className="fixed bottom-6 right-6 z-[999] w-[60px] h-[60px] flex items-center justify-center">
        <div className="absolute w-full h-full pulse-ring rounded-full"></div>
        <div className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 32 32" className="w-[30px] h-[30px] fill-white"><path d="M16 2.9c-7.18 0-13 5.82-13 13 0 2.29.6 4.53 1.74 6.51L3 29l6.69-1.76A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 2.9 16 2.9zm0 23.39a10.39 10.39 0 01-5.3-1.45l-.38-.23-3.97 1.04 1.06-3.87-.25-.4A10.35 10.35 0 015.61 16c0-5.74 4.67-10.41 10.39-10.41S26.39 10.26 26.39 16 21.72 26.29 16 26.29zm5.7-7.78c-.31-.16-1.85-.91-2.13-1.02-.29-.11-.5-.16-.7.16-.21.31-.81 1.02-.99 1.22-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.61-.51-.53-.7-.54h-.6c-.21 0-.55.08-.83.39-.29.31-1.09 1.07-1.09 2.6s1.12 3.02 1.27 3.23c.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36z"/></svg>
        </div>
      </a>
    </div>
  );
}
