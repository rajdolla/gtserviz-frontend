"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const faqs = [
    { q:"How fast is delivery?", a:"All transactions are instant. Airtime & data in <5 seconds, electricity token in 10 seconds. 99.9% success rate." },
    { q:"What are your data rates?", a:"MTN 1GB from ₦250, Airtel 1GB from ₦250, Glo 1GB from ₦250, 9mobile 1GB from ₦250. Resellers get extra discount." },
    { q:"How do I become a reseller?", a:"Sign up, upgrade to reseller in dashboard, you get your own website, API key, and set your own prices to earn profit." },
    { q:"Do you have an API?", a:"Yes! Well-documented REST API. Integrate airtime, data, cable, electricity in 10 minutes. See /api page." },
    { q:"Is my wallet safe?", a:"Bank-grade security, 2FA, auto-refund for failed transactions. Your funds are 100% safe." },
  ];

  const links = [
    { name:"Home", href:"/", active:true },
    { name:"Store", href:"/store" },
    { name:"Pricing", href:"/pricing" },
    { name:"API", href:"/api" },
    { name:"Blog", href:"/blog" },
    { name:"Become a Reseller", href:"/reseller" },
  ];

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* HEADER WITH PRICING */}
      <header className="fixed top-0 w-full z-[100] bg-[#061e14]/95 backdrop-blur-xl border-b border-white/[0.06] h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="GT" width={36} height={36} />
            </div>
            <span className="text-white font-black tracking-[0.15em] text-[13.5px]">GTSERVIZ</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l)=>(
              <Link key={l.name} href={l.href} className={`text-[13px] font-medium transition ${l.active? "text-[#00ff88] font-bold border-b-2 border-[#00ff88] pb-1" : "text-white/60 hover:text-white"}`}>{l.name}</Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-white/70 text-[13px] font-bold px-4">Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Create Account</Link>
          </div>

          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center">{open?"✕":"☰"}</button>
        </div>
        {open && (
          <div className="lg:hidden bg-[#061e14] border-t border-white/10 px-6 py-6 space-y-4">
            {links.map((l)=>(
              <Link key={l.name} href={l.href} className="block text-white/60 py-1">{l.name}</Link>
            ))}
            <Link href="/signup" className="block text-center py-3 rounded-full bg-[#00A54F] text-white font-black">Create Account</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-[68px] bg-[#061e14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,136,0.15),transparent_60%)]" />
        <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-28 relative text-center">
          <div className="inline-flex px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-bold tracking-widest text-[#00ff88]">99.9% UPTIME • INSTANT • 24/7 SUPPORT</div>
          <h1 className="text-[42px] md:text-[72px] font-black leading-[0.9] text-white mt-6">Fast, Cheap &<br /><span className="text-[#00ff88]">Secure</span> VTU</h1>
          <p className="text-white/60 mt-6 max-w-[560px] mx-auto text-[15px] leading-[1.7]">Buy airtime, data, cable & electricity at best rates. Trusted by 50k+ Nigerians & 2k+ resellers.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/signup" className="px-8 py-4 rounded-full bg-[#00A54F] hover:bg-[#009346] text-white font-black text-[14px] shadow-[0_0_30px_rgba(0,165,79,0.3)]">Get Started Free →</Link>
            <Link href="/api" className="px-8 py-4 rounded-full bg-white/10 border border-white/10 text-white font-bold text-[14px]">View API Docs</Link>
          </div>
          <div className="flex items-center justify-center gap-3 mt-10 text-[12px] text-white/50">
            <div className="flex -space-x-2"><div className="w-7 h-7 rounded-full bg-white border-2 border-[#061e14]" /><div className="w-7 h-7 rounded-full bg-[#00ff88] border-2 border-[#061e14]" /><div className="w-7 h-7 rounded-full bg-white border-2 border-[#061e14]" /></div>
            <span>Trusted by <b className="text-white">50k+ users</b> • ⭐ 4.9/5</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 max-w-[1280px] mx-auto px-6">
        <p className="text-[#00A54F] text-[11px] font-black tracking-[0.2em]">OUR SERVICES</p>
        <h2 className="text-[32px] md:text-[42px] font-black text-[#061e14] mt-2 leading-[1.05]">Everything you need<br />in one place</h2>
        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {[
            { icon:"📱", title:"Airtime VTU", desc:"All networks 2% off", price:"From ₦50" },
            { icon:"📶", title:"Data Bundles", desc:"Cheapest rates instant", price:"From ₦250" },
            { icon:"📺", title:"Cable TV", desc:"DSTV, GOTV, Startimes", price:"Instant" },
            { icon:"⚡", title:"Electricity", desc:"All discos nationwide", price:"Instant token" },
          ].map((s,i)=>(
            <div key={i} className="bg-white border border-slate-200 rounded-[20px] p-6 hover:border-[#00A54F] hover:shadow-[0_10px_30px_rgba(0,165,79,0.08)] transition">
              <div className="w-12 h-12 rounded-xl bg-[#f6fdf8] flex items-center justify-center text-[22px]">{s.icon}</div>
              <h3 className="font-black text-[15px] mt-5 text-[#061e14]">{s.title}</h3>
              <p className="text-[12px] text-slate-500 mt-2">{s.desc}</p>
              <p className="text-[12px] font-black text-[#00A54F] mt-4">{s.price} →</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc] border-y py-20">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#00A54F] text-[11px] font-black tracking-[0.2em]">FAQ</p>
            <h2 className="text-[32px] md:text-[40px] font-black text-[#061e14] leading-[1.05] mt-3">Frequently Asked<br />Questions</h2>
            <p className="text-[13px] text-slate-500 mt-4 max-w-[340px]">Everything you need to know about GTSERVIZ. Can't find answer? Chat us.</p>
            <Link href="https://wa.me/2349012345678" target="_blank" className="inline-block mt-6 px-5 py-3 rounded-full bg-[#061e14] text-white text-[13px] font-bold">Chat on WhatsApp →</Link>
          </div>
          <div className="space-y-3">
            {faqs.map((f,i)=>(
              <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition ${faqOpen===i? 'border-[#00A54F] shadow-md' : 'border-slate-200'}`}>
                <button onClick={()=>setFaqOpen(faqOpen===i? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                  <span className="font-bold text-[14px] text-[#061e14] pr-4">{f.q}</span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[14px] shrink-0 ${faqOpen===i? 'bg-[#00A54F] text-white' : 'bg-slate-100 text-slate-600'}`}>{faqOpen===i? "−" : "+"}</span>
                </button>
                {faqOpen===i && <div className="px-5 pb-5 text-[13px] text-slate-600 leading-[1.6]">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="bg-[#061e14] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,136,0.2),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-[32px] md:text-[48px] font-black text-white leading-[1.05]">Ready to get started?</h2>
            <p className="text-white/60 text-[14px] mt-4 max-w-[500px] mx-auto">Create free account in 30 seconds. No hidden fees, instant setup.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="/signup" className="px-8 py-4 rounded-full bg-[#00A54F] text-white font-black text-[14px]">Create Free Account →</Link>
              <Link href="/login" className="px-8 py-4 rounded-full bg-white text-[#061e14] font-black text-[14px]">Login to Dashboard</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/2349012345678?text=Hello%20GTSERVIZ%20I%20need%20help"
        target="_blank"
        className="fixed bottom-6 right-6 z-[9999] w-[56px] h-[56px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-[28px]">💬</span>
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-25 -z-10" />
      </a>
    </div>
  );
}
