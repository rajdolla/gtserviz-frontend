"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar active="Home" />

      {/* HERO */}
      <section className="pt-[120px] bg-[#061e14] text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
          <p className="text-[#00ff88] text-[10px] font-black tracking-[0.15em]">FAST • CHEAP • SECURE • RELIABLE</p>
          <h1 className="text-[44px] md:text-[62px] font-black leading-[0.95] mt-4">
            Fast, Cheap &<br />
            <span className="text-[#00ff88]">Secure</span> VTU
          </h1>
          <p className="text-white/60 text-[14px] mt-4 max-w-[600px] mx-auto leading-[1.6]">
            Buy airtime, data, cable TV and electricity at the best rates. 99.9% uptime, instant delivery.
          </p>
          <div className="flex gap-3 justify-center mt-8">
            <Link href="/signup" className="px-7 py-3.5 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get Started →</Link>
            <Link href="/api" className="px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-[13px]">View API Docs</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 max-w-[1280px] mx-auto px-6">
        <h2 className="font-black text-[24px] text-[#061e14]">Our Services</h2>
        <p className="text-[12px] text-slate-500 mt-1">Everything you need in one place</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="border rounded-2xl p-6"><div className="text-[24px]">📱</div><p className="font-bold text-[13px] mt-3">Airtime</p></div>
          <div className="border rounded-2xl p-6"><div className="text-[24px]">📶</div><p className="font-bold text-[13px] mt-3">Data</p></div>
          <div className="border rounded-2xl p-6"><div className="text-[24px]">📺</div><p className="font-bold text-[13px] mt-3">Cable TV</p></div>
          <div className="border rounded-2xl p-6"><div className="text-[24px]">⚡</div><p className="font-bold text-[13px] mt-3">Electricity</p></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
