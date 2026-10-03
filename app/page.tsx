"use client";
import "./landing.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { icon: "📱", title: "Airtime VTU", desc: "Instant top-up for all networks with automatic 3% discount.", list: ["MTN • 3% off", "Glo • 4% off", "Airtel • 3% off", "9mobile • 4% off"], color: "gt-green" },
  { icon: "📶", title: "Data Bundles", desc: "Cheapest SME, Corporate & Gifting plans. 30 days validity.", list: ["MTN 1GB - ₦275", "Glo 2.9GB - ₦800", "Airtel 1.5GB - ₦950", "9mobile 1.5GB - ₦850"], color: "gt-dark" },
  { icon: "📺", title: "Cable TV", desc: "Pay DSTV, GOTV, Startimes instantly with instant activation.", list: ["DSTV • All bouquets", "GOTV • All bouquets", "Startimes • All bouquets", "0% extra charge"], color: "gt-black" },
  { icon: "💡", title: "Electricity Bills", desc: "Pay all DisCos - IKEDC, EKEDC, IBEDC, AEDC etc with token instantly.", list: ["Prepaid & Postpaid", "Instant token", "No commission", "24/7 available"], color: "gt-red" },
  { icon: "🎓", title: "Education Pins", desc: "WAEC, NECO, JAMB ePins for your customers.", list: ["WAEC Result Checker", "NECO Token", "JAMB ePin", "Instant delivery"], color: "gt-dark" },
  { icon: "💸", title: "Airtime to Cash", desc: "Convert excess airtime to cash at best rates.", list: ["MTN - 88%", "Airtel - 85%", "Glo - 80%", "9mobile - 78%"], color: "gt-green" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white border shadow-sm overflow-hidden"><Image src="/logo.png" alt="GTServiz" width={36} height={36}/></div>
            <span className="font-black text-[20px] tracking-tight text-[#065F36]">GTServiz</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-[14px] font-bold">
            <Link href="#">Home</Link><Link href="#services" className="text-[#00A54F]">Services</Link><Link href="#agent" className="text-[#E31E24]">Become a Reseller</Link>
          </nav>
          <div className="hidden md:flex gap-2.5">
            <Link href="/login" className="px-6 py-2.5 rounded-full border font-bold text-sm">Login</Link>
            <Link href="/signup" className="px-6 py-2.5 rounded-full bg-[#00A54F] text-white font-bold text-sm">Get Started</Link>
          </div>
          <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>☰</button>
        </div>
      </header>

      {/* HERO - kept short */}
      <section className="gt-hero">
        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="gt-badge inline-flex gap-2 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest"><span className="w-2 h-2 bg-[#E31E24] rounded-full animate-pulse"/> OUR SERVICES</div>
            <h1 className="text-[44px] md:text-[56px] font-[800] leading-[0.95] mt-6 tracking-tight">Everything for <br/><span className="text-[#00A54F]">VTU business.</span></h1>
            <p className="text-zinc-500 text-[16px] mt-4 max-w-[440px]">All networks, all billers, one wallet. Built for agents who want speed & profit.</p>
          </div>
          <div className="bg-[#f8fdf9] border border-[#e5f3ea] rounded-[24px] p-6">
            <p className="font-black text-[#065F36]">07012222025 • www.gtserviz.com</p>
            <p className="text-sm text-zinc-500 mt-1">Support: 8am - 10pm daily • Instant response</p>
          </div>
        </div>
        <div className="h-[6px] w-full bg-[#E31E24]" />
      </section>

      {/* SERVICES DETAILS - Number 2 */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-[36px] font-[800] tracking-tight">Our Services</h2>
          <p className="text-zinc-500 mt-3">We give you the best rates so you earn on every transaction. No hidden charges.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="gt-card p-7 flex flex-col">
              <div className={`gt-icon ${s.color}`}>{s.icon}</div>
              <h3 className="font-[800] text-[18px] mt-5">{s.title}</h3>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{s.desc}</p>
              <div className="mt-5 bg-zinc-50 rounded-xl p-4 space-y-2">
                {s.list.map((l, j) => (
                  <div key={j} className="flex items-center gap-2 text-[13px] font-medium"><span className="w-1.5 h-1.5 bg-[#00A54F] rounded-full"/>{l}</div>
                ))}
              </div>
              <Link href="/signup" className="mt-6 text-[13px] font-bold text-[#00A54F]">Start Selling →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER - Same as before */}
      <footer className="bg-[#0a0a0a] text-zinc-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2"><div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center"><Image src="/logo.png" alt="GT" width={40} height={40}/></div><span className="text-white font-black text-[20px]">GTServiz</span></div>
              <p className="text-sm text-zinc-400 mt-4 max-w-[300px]">Fastest and easiest way to buy airtime, data, pay TV & electricity bills. All-in-one for resellers.</p>
            </div>
            <div><h4 className="text-white font-bold mb-4">Services</h4><ul className="space-y-3 text-sm text-zinc-400"><li>Airtime VTU</li><li>Data Bundles</li><li>Cable TV</li><li>Electricity</li><li>Education Pins</li></ul></div>
            <div><h4 className="text-white font-bold mb-4">Company</h4><ul className="space-y-3 text-sm text-zinc-400"><li>About Us</li><li>Become Agent</li><li>API Docs</li><li>Blog</li></ul></div>
            <div><h4 className="text-white font-bold mb-4">Support</h4><ul className="space-y-3 text-sm text-zinc-400"><li className="text-white font-bold">07012222025</li><li className="text-[#00A54F]">support@gtserviz.com</li><li>www.gtserviz.com</li></ul></div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex justify-between text-[12px] text-zinc-500"><p>© 2026 GTServiz Technology Limited.</p><div className="flex gap-6"><span>Privacy</span><span>Terms</span></div></div>
        </div>
      </footer>
    </div>
  );
}
