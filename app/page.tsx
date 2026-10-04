"use client";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const faqs = [
    { q:"How fast is delivery?", a:"Instant delivery in less than 5 seconds." },
    { q:"What are your rates?", a:"MTN 1GB from ₦250, Airtel, Glo, 9mobile cheap." },
    { q:"How to become reseller?", a:"Sign up and upgrade in dashboard." },
    { q:"Do you have API?", a:"Yes, simple REST API." },
    { q:"Is wallet safe?", a:"Bank-grade security." },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar active="Home" />
      <section className="pt-[68px] bg-[#061e14] text-center">
        <div className="max-w-[1280px] mx-auto px-6 py-24">
          <h1 className="text-[48px] md:text-[72px] font-black text-white leading-[0.9]">Fast, Cheap &<br/><span className="text-[#00ff88]">Secure</span> VTU</h1>
          <p className="text-white/60 mt-6">Trusted by 50k+ users. Best rates for airtime, data, cable & electricity.</p>
          <div className="flex gap-3 justify-center mt-8">
            <Link href="/signup" className="px-8 py-4 rounded-full bg-[#00A54F] text-white font-black">Get Started →</Link>
            <Link href="/pricing" className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/10 font-bold">View Pricing</Link>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-[1280px] mx-auto px-6 grid md:grid-cols-4 gap-5">
        <div className="border rounded-2xl p-6 font-black text-[14px]">📱 Airtime VTU</div>
        <div className="border rounded-2xl p-6 font-black text-[14px]">📶 Data Bundles</div>
        <div className="border rounded-2xl p-6 font-black text-[14px]">📺 Cable TV</div>
        <div className="border rounded-2xl p-6 font-black text-[14px]">⚡ Electricity</div>
      </section>
      <section className="bg-[#f8fafc] border-y py-20">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div><h2 className="text-[36px] font-black">FAQ</h2></div>
          <div className="space-y-3">{faqs.map((f,i)=>(<div key={i} className="bg-white border rounded-2xl"><button onClick={()=>setFaqOpen(faqOpen===i? null : i)} className="w-full flex justify-between p-5 text-left font-bold text-[14px]">{f.q}<span>{faqOpen===i? "−" : "+"}</span></button>{faqOpen===i && <div className="px-5 pb-5 text-[13px] text-slate-600">{f.a}</div>}</div>))}</div>
        </div>
      </section>
      <Footer />
      <a href="https://wa.me/2349012345678" target="_blank" className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-[26px] shadow-lg">💬</a>
    </div>
  );
}
