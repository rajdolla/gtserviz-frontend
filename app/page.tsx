"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-[100] bg-[#061e14]/95 backdrop-blur-xl border-b border-white/[0.06] h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="GT" width={36} height={36} className="object-contain" />
            </div>
            <span className="text-white font-black tracking-[0.15em] text-[13.5px]">GTSERVIZ</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-white/60">
            <Link href="/" className="text-white font-bold">Home</Link>
            <Link href="#services" className="hover:text-white transition">Services</Link>
            <Link href="/api" className="hover:text-white transition">API</Link>
            <Link href="/store" className="hover:text-white transition">Store</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/reseller" className="hover:text-white transition">Become a Reseller</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-white/70 hover:text-white text-[13px] font-bold px-4">Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] hover:bg-[#009346] text-white text-[13px] font-black transition">Create Account →</Link>
          </div>

          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center">
            {open? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-[#061e14] border-t border-white/10 px-6 py-6 space-y-4">
            <Link href="/" className="block text-white font-bold">Home</Link>
            <Link href="/api" className="block text-white/60">API</Link>
            <Link href="/store" className="block text-white/60">Store</Link>
            <Link href="/blog" className="block text-white/60">Blog</Link>
            <Link href="/reseller" className="block text-white/60">Become a Reseller</Link>
            <Link href="/signup" className="block mt-4 text-center py-3 rounded-full bg-[#00A54F] text-white font-black">Create Account</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-[68px] bg-[#061e14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,136,0.15),transparent_60%)]" />
        <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-28 relative">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-bold tracking-widest text-[#00ff88]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              99.9% UPTIME • INSTANT DELIVERY • 24/7 SUPPORT
            </div>
            <h1 className="text-[42px] md:text-[72px] font-black leading-[0.9] tracking-[-0.04em] text-white mt-6">
              Fast, Cheap &<br />
              <span className="text-[#00ff88]">Secure</span> VTU
              <br />Services
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/60 leading-[1.7] mt-6 max-w-[560px] mx-auto">
              Buy airtime, data bundles, cable TV & electricity tokens at the best market rates.
              Trusted by 50,000+ Nigerians & 2,000+ resellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="/signup" className="px-8 py-4 rounded-full bg-[#00A54F] hover:bg-[#009346] text-white font-black text-[14px] transition shadow-[0_0_30px_rgba(0,165,79,0.3)]">
                Get Started Free →
              </Link>
              <Link href="/api" className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-[14px] transition">
                View API Docs
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 mt-12 opacity-60">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-[#061e14]" />
                <div className="w-8 h-8 rounded-full bg-[#00ff88] border-2 border-[#061e14]" />
                <div className="w-8 h-8 rounded-full bg-white border-2 border-[#061e14]" />
              </div>
              <p className="text-[12px] text-white/60">Trusted by <span className="text-white font-bold">50k+ users</span> • ⭐ 4.9/5 rating</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-[20px] overflow-hidden mt-16 border border-white/10">
            {[
              ["50k+", "Active Users"],
              ["2k+", "Resellers"],
              ["1M+", "Transactions"],
              ["99.9%", "Uptime"]
            ].map(([val,label])=>(
              <div key={label} className="bg-[#0a2a1d] p-6 text-center">
                <p className="text-[24px] font-black text-white">{val}</p>
                <p className="text-[11px] text-white/50 font-bold tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="text-[#00A54F] text-[11px] font-black tracking-[0.2em]">OUR SERVICES</p>
            <h2 className="text-[32px] md:text-[42px] font-black tracking-[-0.03em] text-[#061e14] leading-[1.05] mt-2">Everything you need<br />in one place</h2>
          </div>
          <p className="text-[14px] text-slate-500 max-w-[360px] leading-[1.6]">From airtime to electricity, we provide instant, automated VTU services at unbeatable rates.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {[
            { icon:"📱", title:"Airtime VTU", desc:"MTN, Airtel, Glo, 9mobile with 2% discount", price:"From ₦50" },
            { icon:"📶", title:"Data Bundles", desc:"Cheapest data rates, instant delivery", price:"From ₦250 / 1GB" },
            { icon:"📺", title:"Cable TV", desc:"DSTV, GOTV, Startimes renewal instantly", price:"All packages" },
            { icon:"⚡", title:"Electricity", desc:"All discos - IKEDC, EKEDC, AEDC etc", price:"Instant token" },
          ].map((s,i)=>(
            <div key={i} className="group bg-white border border-slate-200 rounded-[20px] p-6 hover:border-[#00A54F] hover:shadow-[0_10px_40px_rgba(0,165,79,0.1)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#f6fdf8] group-hover:bg-[#00A54F] flex items-center justify-center text-[22px] transition">{s.icon}</div>
              <h3 className="font-black text-[15px] text-[#061e14] mt-5">{s.title}</h3>
              <p className="text-[12px] text-slate-500 mt-2 leading-[1.5]">{s.desc}</p>
              <p className="text-[12px] font-black text-[#00A54F] mt-4">{s.price} →</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#f8fafc] border-y border-slate-200 py-20">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#00A54F] text-[11px] font-black tracking-[0.2em]">WHY GTSERVIZ</p>
            <h2 className="text-[32px] md:text-[40px] font-black tracking-[-0.03em] text-[#061e14] leading-[1.05] mt-3">Built for speed,<br />reliability & profit</h2>
            <div className="mt-8 space-y-5">
              {[
                ["Instant Delivery", "All transactions processed in < 5 seconds with 99.9% success rate"],
                ["Cheapest Rates", "Best market pricing for resellers with up to 20% profit margin"],
                ["Reseller Platform", "Own website, API, pricing control & automated payouts"],
                ["24/7 Support", "Real humans available on WhatsApp & live chat round the clock"],
              ].map(([t,d])=>(
                <div key={t} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#061e14] text-[#00ff88] flex items-center justify-center text-[12px] font-black shrink-0">✓</div>
                  <div><p className="font-bold text-[14px] text-[#061e14]">{t}</p><p className="text-[12px] text-slate-500 mt-1 leading-[1.6]">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#061e14] rounded-[24px] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#00ff88]/10 rounded-full blur-[40px]" />
            <p className="text-[11px] font-black tracking-widest text-[#00ff88]">RESELLER EARNINGS</p>
            <h3 className="text-[22px] font-black mt-3">Start earning today</h3>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-[13px] p-3 rounded-xl bg-white/5"><span className="text-white/60">Today's Profit</span><span className="font-black text-[#00ff88]">₦12,450</span></div>
              <div className="flex justify-between text-[13px] p-3 rounded-xl bg-white/5"><span className="text-white/60">This Week</span><span className="font-black">₦78,200</span></div>
              <div className="flex justify-between text-[13px] p-3 rounded-xl bg-white/5"><span className="text-white/60">Total Resellers</span><span className="font-black">2,341</span></div>
            </div>
            <Link href="/reseller" className="mt-6 block text-center py-3.5 rounded-full bg-[#00A54F] font-black text-[13px]">Become a Reseller →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="bg-[#061e14] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,136,0.2),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-[32px] md:text-[48px] font-black text-white leading-[1.05]">Ready to get started?</h2>
            <p className="text-white/60 text-[14px] mt-4 max-w-[500px] mx-auto">Create a free account in 30 seconds. No hidden fees, instant setup, start transacting immediately.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="/signup" className="px-8 py-4 rounded-full bg-[#00A54F] text-white font-black text-[14px]">Create Free Account →</Link>
              <Link href="/login" className="px-8 py-4 rounded-full bg-white text-[#061e14] font-black text-[14px]">Login to Dashboard</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
