"use client";
import "./landing.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      {/* HEADER like SubPlugs */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="GTServiz" width={38} height={38} className="rounded-full"/>
            <span className="font-black text-[22px] text-[#065F36]">GTSERVIZ</span>
          </Link>
          <nav className="hidden md:flex gap-7 text-[14px] font-semibold text-zinc-600">
            <Link href="#" className="text-black">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#how">How It Works</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
          <div className="hidden md:flex gap-3">
            <Link href="/login" className="px-6 py-2.5 rounded-full bg-zinc-900 text-white font-bold text-sm">Login</Link>
            <Link href="/signup" className="px-6 py-2.5 rounded-full bg-[#00A54F] text-white font-bold text-sm">Register</Link>
          </div>
          <button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button>
        </div>
      </header>

      {/* HERO like SubPlugs - left text + right mockup */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-[#00A54F] text-[11px] font-black tracking-widest border border-green-100">🔥 #1 VTU PLATFORM IN NIGERIA</span>
            <h1 className="text-[42px] md:text-[56px] font-black leading-[0.95] mt-5 tracking-tight">
              Fast & Easy <span className="text-[#00A54F]">VTU</span> <br/> Services For You.
            </h1>
            <p className="text-zinc-500 mt-4 text-[16px] max-w-[460px]">Buy airtime, data bundles, pay electricity bills, cable TV subscription and more. Automated delivery in seconds.</p>
            <div className="flex gap-3 mt-7">
              <Link href="/signup" className="px-8 py-4 rounded-full bg-[#00A54F] text-white font-black shadow-lg">Get Started →</Link>
              <Link href="#services" className="px-8 py-4 rounded-full bg-zinc-900 text-white font-bold">Our Services</Link>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2"><div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white"/><div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-white"/><div className="w-8 h-8 rounded-full bg-zinc-500 border-2 border-white"/></div>
              <p className="text-[13px] font-bold">Trusted by <span className="text-[#00A54F]">15,000+</span> users</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#f0fdf4] rounded-[32px] p-6 border-2 border-green-100">
              <div className="bg-white rounded-[24px] shadow-2xl p-6">
                <div className="flex justify-between items-center"><p className="font-black">Wallet Balance</p><span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Active</span></div>
                <h2 className="text-[32px] font-black mt-3">₦125,430.00</h2>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-zinc-50 rounded-xl p-3 text-center"><div className="text-xl">📱</div><p className="text-[11px] font-bold mt-1">Airtime</p></div>
                  <div className="bg-zinc-50 rounded-xl p-3 text-center"><div className="text-xl">📶</div><p className="text-[11px] font-bold mt-1">Data</p></div>
                  <div className="bg-zinc-50 rounded-xl p-3 text-center"><div className="text-xl">📺</div><p className="text-[11px] font-bold mt-1">TV</p></div>
                </div>
                <button className="w-full mt-6 bg-[#00A54F] text-white py-3 rounded-full font-black">Fund Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES like SubPlugs */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[32px] font-black text-center">Our Services</h2>
        <p className="text-center text-zinc-500 mt-2">We provide the best VTU services at unbeatable rates</p>
        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {[
            {t:"Buy Airtime", d:"MTN, Glo, Airtel, 9mobile", i:"📱", c:"bg-orange-50"},
            {t:"Buy Data", d:"Cheapest data plans", i:"📶", c:"bg-green-50"},
            {t:"Cable TV", d:"DSTV, GOTV, Startimes", i:"📺", c:"bg-purple-50"},
            {t:"Electricity", d:"All Discos available", i:"💡", c:"bg-yellow-50"},
            {t:"Education PIN", d:"WAEC, JAMB, NECO", i:"🎓", c:"bg-blue-50"},
            {t:"Airtime to Cash", d:"Convert airtime to cash", i:"💸", c:"bg-red-50"},
            {t:"Bulk SMS", d:"Send SMS to many", i:"💬", c:"bg-pink-50"},
            {t:"Recharge Card", d:"Print recharge cards", i:"🧾", c:"bg-zinc-100"},
          ].map((s, idx)=>(
            <div key={idx} className="bg-white rounded-[20px] p-6 border hover:shadow-xl hover:-translate-y-1 transition">
              <div className={`w-12 h-12 rounded-xl ${s.c} flex items-center justify-center text-xl`}>{s.i}</div>
              <h4 className="font-black mt-4">{s.t}</h4>
              <p className="text-[13px] text-zinc-500 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY + HOW IT WORKS like SubPlugs */}
      <section id="how" className="bg-white py-16 border-y">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[28px] font-black">Why Choose GTServiz?</h2>
            <div className="mt-6 space-y-4">
              {["Instant Delivery - 100% automated", "24/7 Support - Always available", "Secure & Reliable - Bank-grade", "Best Rates - Earn more profit"].map((x,i)=>(
                <div key={i} className="flex gap-3"><div className="w-6 h-6 rounded-full bg-[#00A54F] text-white flex items-center justify-center text-[10px]">✓</div><p className="font-bold text-sm">{x}</p></div>
              ))}
            </div>
          </div>
          <div className="bg-[#0a0a0a] text-white rounded-[24px] p-8">
            <h3 className="font-black text-[20px]">Become a Reseller & Earn Daily</h3>
            <p className="text-zinc-400 text-sm mt-2">Join 12,000+ agents making ₦5k - ₦50k daily.</p>
            <Link href="/signup" className="inline-block mt-6 px-8 py-3 bg-[#00A54F] rounded-full font-black">Start Earning Now</Link>
            <p className="mt-6 text-xs text-zinc-500">📞 07012222025 • support@gtserviz.com • www.gtserviz.com</p>
          </div>
        </div>
      </section>

      {/* FOOTER like SubPlugs */}
      <footer className="bg-[#0a0a0a] text-zinc-400 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div><div className="flex items-center gap-2"><Image src="/logo.png" alt="logo" width={36} height={36} className="rounded-full bg-white"/><span className="text-white font-black text-[18px]">GTSERVIZ</span></div><p className="text-sm mt-4 leading-relaxed">Fastest VTU platform in Nigeria. Buy data, airtime, pay bills instantly.</p></div>
          <div><h4 className="text-white font-black mb-4">Services</h4><ul className="space-y-2 text-sm"><li>Airtime</li><li>Data</li><li>TV Subscription</li><li>Electricity</li></ul></div>
          <div><h4 className="text-white font-black mb-4">Company</h4><ul className="space-y-2 text-sm"><li>About Us</li><li>Contact</li><li>API Docs</li><li>Become an Agent</li></ul></div>
          <div><h4 className="text-white font-black mb-4">Contact</h4><p className="text-sm">📞 07012222025</p><p className="text-sm mt-1">✉️ support@gtserviz.com</p><p className="text-sm mt-1">🌐 www.gtserviz.com</p></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex justify-between text-[12px]"><p>© 2026 GTServiz. All rights reserved.</p><p className="flex gap-4"><span>Privacy</span><span>Terms</span></p></div>
      </footer>
    </div>
  );
}
