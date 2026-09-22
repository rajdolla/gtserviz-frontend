"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="GTServiz" width={42} height={42} className="rounded-full bg-white"/>
            <span className="text-[20px] font-black text-[#065F36]">GTServiz</span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center text-[14px] font-semibold">
            <Link href="#">Home</Link>
            <div className="relative group">
              <button className="hover:text-[#00A54F] flex gap-1">Services ▾</button>
              <div className="absolute hidden group-hover:block bg-white border shadow-xl rounded-2xl p-2 w-56 top-8 -left-10">
                <Link href="#services" className="block p-3 hover:bg-[#f6fdf8] rounded-xl">📱 Airtime & Data</Link>
                <Link href="#services" className="block p-3 hover:bg-[#f6fdf8] rounded-xl">📺 TV Subscription</Link>
                <Link href="#services" className="block p-3 hover:bg-[#f6fdf8] rounded-xl">💡 Power Bill Payment</Link>
              </div>
            </div>
            <Link href="#pricing" className="hover:text-[#00A54F]">Pricing</Link>
            <Link href="#agent" className="text-[#E31E24]">Become a Reseller</Link>
          </nav>

          <div className="hidden md:flex gap-2">
            <Link href="/login" className="px-5 py-2.5 rounded-full border font-bold text-sm">Login</Link>
            <Link href="/signup" className="px-6 py-2.5 rounded-full bg-[#00A54F] text-white font-bold text-sm shadow-lg shadow-green-600/20">Get Started</Link>
          </div>
          <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>☰</button>
        </div>
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4 font-bold">
            <Link href="#">Home</Link><Link href="#services">Services</Link><Link href="#agent" className="text-[#E31E24]">Become a Reseller</Link>
            <Link href="/login" className="mt-2 border rounded-full py-3 text-center">Login</Link>
            <Link href="/signup" className="bg-[#00A54F] text-white rounded-full py-3 text-center">Get Started</Link>
          </div>
        )}
      </header>

      {/* HERO - Using flyer style */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[#E31E24] font-bold text-[18px] md:text-[22px]">Become a</h2>
            <h1 className="text-5xl md:text-[72px] font-black leading-[0.9] tracking-tight mt-1">
              <span className="bg-[#00A54F] text-white px-3 leading-none inline-block rounded-[6px] rotate-[-1deg]">DATA</span><br/>
              <span className="bg-[#00A54F] text-white px-3 leading-none inline-block rounded-[6px] rotate-[-1deg] mt-2">RESELLER</span>
            </h1>
            <p className="text-[18px] md:text-[20px] font-medium mt-6 leading-snug">and Earn Passive Income Daily<br/>using your mobile phone.</p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex gap-3 items-center"><div className="w-12 h-12 rounded-full bg-[#FF8C1A] flex items-center justify-center text-xl">📱</div><span className="text-sm font-bold leading-tight">Airtime VTU<br/>& Data</span></div>
              <div className="flex gap-3 items-center"><div className="w-12 h-12 rounded-full bg-[#FF8C1A] flex items-center justify-center text-xl">📺</div><span className="text-sm font-bold leading-tight">TV<br/>Subscription</span></div>
              <div className="flex gap-3 items-center"><div className="w-12 h-12 rounded-full bg-[#FF8C1A] flex items-center justify-center text-xl">💡</div><span className="text-sm font-bold leading-tight">Power Bill<br/>Payment</span></div>
            </div>

            <div className="flex gap-3 mt-10">
              <Link href="/signup" className="px-8 py-4 bg-[#065F36] text-white rounded-full font-bold">Start Selling →</Link>
              <Link href="#services" className="px-8 py-4 bg-zinc-100 rounded-full font-bold">View Price</Link>
            </div>
          </div>

          {/* Right - Services card mimicking your MTN/glo box */}
          <div className="relative bg-zinc-50 rounded-[24px] p-6 border">
            <div className="grid grid-cols-2 gap-3 max-w-[260px]">
              <div className="bg-[#ffcc00] rounded-xl p-4 font-black text-center">MTN</div>
              <div className="bg-[#00A54F] text-white rounded-xl p-4 font-bold text-center rounded-full">glo</div>
              <div className="bg-[#E31E24] text-white rounded-xl p-4 font-bold text-center">airtel</div>
              <div className="bg-black text-[#c4ff00] rounded-xl p-4 font-black text-center">9mobile</div>
            </div>
            <div className="mt-6 p-5 bg-white rounded-2xl border shadow-sm">
              <p className="text-xs text-zinc-400">Quick Top-up</p>
              <div className="mt-3 flex gap-2"><div className="h-10 flex-1 bg-zinc-100 rounded-full"></div><div className="h-10 w-24 bg-[#00A54F] rounded-full"></div></div>
            </div>
          </div>
        </div>

        {/* Red line from flyer */}
        <div className="h-[6px] w-full bg-[#E31E24]" />
        <div className="bg-white py-4 px-6 flex flex-col md:flex-row justify-between max-w-7xl mx-auto gap-3 font-black text-[#E31E24] text-[20px]">
          <span>📞 07012222025</span>
          <span className="flex items-center gap-2">🌐 www.gtserviz.com</span>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section id="services" className="bg-zinc-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {t:"Airtime VTU", d:"Instant"}, {t:"Data Bundles", d:"Cheap"}, {t:"Cable TV", d:"DSTV/GOTV"}, {t:"Electricity", d:"All DisCos"}
          ].map(s => (
            <div key={s.t} className="bg-white p-6 rounded-2xl border hover:border-[#00A54F]/30 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-full bg-[#FF8C1A]/20 flex items-center justify-center">⚡</div>
              <h4 className="font-bold mt-4">{s.t}</h4><p className="text-sm text-zinc-500">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-zinc-400">© 2026 GTServiz • Built with your flyer colors</footer>
    </div>
  );
}
