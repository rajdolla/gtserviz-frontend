"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const faqs = [
    { q:"How fast is delivery?", a:"All transactions are instant. Airtime & data in <5 seconds, electricity token in 10 seconds." },
    { q:"What are your data rates?", a:"MTN 1GB from ₦250, Airtel 1GB from ₦250, Glo 1GB from ₦250, 9mobile 1GB from ₦250." },
    { q:"How do I become a reseller?", a:"Sign up, upgrade to reseller in dashboard, you get your own website and API key." },
    { q:"Do you have an API?", a:"Yes! REST API for airtime, data, cable, electricity. See /api page." },
    { q:"Is my wallet safe?", a:"Bank-grade security, 2FA, auto-refund for failed transactions." },
  ];

  const links = [
    { name:"Home", href:"/" },
    { name:"Store", href:"/store" },
    { name:"Pricing", href:"/pricing" },
    { name:"API", href:"/api" },
    { name:"Blog", href:"/blog" },
    { name:"Become a Reseller", href:"/reseller" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/10 h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="GTSERVIZ" width={36} height={36} className="object-contain" />
            </div>
            <span className="text-white font-black tracking-[0.15em] text-[13.5px]">GTSERVIZ</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l)=>(
              <Link key={l.name} href={l.href} className="text-[13px] text-white/60 hover:text-white">{l.name}</Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-white/70 text-[13px] font-bold px-4">Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Create Account</Link>
          </div>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
        {open && (
          <div className="lg:hidden bg-[#061e14] border-t border-white/10 px-6 py-6 space-y-3">
            {links.map((l)=><Link key={l.name} href={l.href} className="block text-white/60 py-1">{l.name}</Link>)}
          </div>
        )}
      </header>

      <section className="pt-[68px] bg-[#061e14] text-center">
        <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-28">
          <h1 className="text-[42px] md:text-[68px] font-black leading-[0.9] text-white">Fast, Cheap &<br/><span className="text-[#00ff88]">Secure</span> VTU</h1>
          <p className="text-white/60 mt-6 max-w-[560px] mx-auto">Buy airtime, data, cable & electricity at best rates.</p>
          <div className="flex gap-3 justify-center mt-8">
            <Link href="/signup" className="px-8 py-4 rounded-full bg-[#00A54F] text-white font-black text-[14px]">Get Started Free →</Link>
            <Link href="/api" className="px-8 py-4 rounded-full bg-white/10 border border-white/10 text-white font-bold text-[14px]">View API Docs</Link>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <h2 className="text-[36px] font-black text-[#061e14]">Everything you need in one place</h2>
        <div className="grid md:grid-cols-4 gap-5 mt-10">
          <div className="border rounded-2xl p-6"><h3 className="font-black text-[14px]">Airtime VTU</h3></div>
          <div className="border rounded-2xl p-6"><h3 className="font-black text-[14px]">Data Bundles</h3></div>
          <div className="border rounded-2xl p-6"><h3 className="font-black text-[14px]">Cable TV</h3></div>
          <div className="border rounded-2xl p-6"><h3 className="font-black text-[14px]">Electricity</h3></div>
        </div>
      </section>

      <section className="bg-[#f8fafc] border-y py-20">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div><h2 className="text-[36px] font-black">FAQ</h2></div>
          <div className="space-y-3">
            {faqs.map((f,i)=>(
              <div key={i} className="bg-white border rounded-2xl overflow-hidden">
                <button onClick={()=>setFaqOpen(faqOpen===i? null : i)} className="w-full flex justify-between p-5 text-left font-bold text-[14px]">{f.q}<span>{faqOpen===i? "−" : "+"}</span></button>
                {faqOpen===i && <div className="px-5 pb-5 text-[13px] text-slate-600">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <a href="https://wa.me/2349012345678" target="_blank" className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-[26px] shadow-lg">💬</a>
    </div>
  );
}
