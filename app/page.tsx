"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* your page content */}
      <Footer />
    </>
  )
}

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
            Buy airtime, data, cable TV and electricity at the best rates. 99.9% uptime, instant delivery for all your VTU needs.
          </p>
          <div className="flex gap-3 justify-center mt-8">
            <Link href="/signup" className="px-7 py-3.5 rounded-full bg-[#00A54F] hover:bg-[#009346] text-white font-black text-[13px] transition">Get Started →</Link>
            <Link href="/api" className="px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-[13px] hover:bg-white/10 transition">View API Docs</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 max-w-[1280px] mx-auto px-6">
        <h2 className="font-black text-[24px] text-[#061e14]">Our Services</h2>
        <p className="text-[12px] text-slate-500 mt-1">Everything you need in one place</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="border rounded-2xl p-6 hover:shadow-md transition"><div className="text-[24px]">📱</div><p className="font-bold text-[13px] mt-3">Airtime</p><p className="text-[11px] text-slate-500 mt-1">All networks at discount</p></div>
          <div className="border rounded-2xl p-6 hover:shadow-md transition"><div className="text-[24px]">📶</div><p className="font-bold text-[13px] mt-3">Data Bundles</p><p className="text-[11px] text-slate-500 mt-1">MTN, Airtel, Glo, 9mobile</p></div>
          <div className="border rounded-2xl p-6 hover:shadow-md transition"><div className="text-[24px]">📺</div><p className="font-bold text-[13px] mt-3">Cable TV</p><p className="text-[11px] text-slate-500 mt-1">DSTV, GOTV, Startimes</p></div>
          <div className="border rounded-2xl p-6 hover:shadow-md transition"><div className="text-[24px]">⚡</div><p className="font-bold text-[13px] mt-3">Electricity</p><p className="text-[11px] text-slate-500 mt-1">All discos nationwide</p></div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-[#f8fafc] border-t">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-black text-[24px] text-[#061e14]">Best Market Pricing</h2>
          <p className="text-[12px] text-slate-500 mt-1">Cheapest rates for resellers & end users</p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white border rounded-2xl p-6"><p className="font-black">MTN Data</p><p className="text-[20px] font-black mt-2 text-[#00A54F]">From ₦250</p></div>
            <div className="bg-white border-2 border-[#00A54F] rounded-2xl p-6"><p className="font-black">Airtel Data</p><p className="text-[20px] font-black mt-2 text-[#00A54F]">From ₦250</p></div>
            <div className="bg-white border rounded-2xl p-6"><p className="font-black">Glo Data</p><p className="text-[20px] font-black mt-2 text-[#00A54F]">From ₦250</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
