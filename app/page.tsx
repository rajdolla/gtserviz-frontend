"use client";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const products = [
  { name:"MTN 1GB - 30 Days", price:"₦350", cat:"Data Bundle", popular:true },
  { name:"Airtel 2GB - 30 Days", price:"₦700", cat:"Data Bundle", popular:false },
  { name:"Glo 3.5GB - 30 Days", price:"₦1,000", cat:"Data Bundle", popular:true },
  { name:"DSTV Compact", price:"₦10,500", cat:"Cable TV", popular:false },
];

export default function StorePage(){
  const [cart,setCart]=useState(0);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar active="Store" />
      <section className="pt-[100px] max-w-[1280px] mx-auto px-6">
        <div className="bg-[#061e14] rounded-[24px] p-8 flex justify-between items-center">
          <div><h1 className="text-white text-[28px] font-black">Store</h1><p className="text-white/60 text-[13px]">Buy Data, Airtime & Bills</p></div>
          <div className="px-4 py-2 rounded-full bg-white/10 text-white text-[12px]">Cart ({cart})</div>
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p,i)=>(
          <div key={i} className="bg-white rounded-2xl border p-4">
            <p className="text-[10px] font-bold text-[#00A54F]">{p.cat}</p>
            <h3 className="font-bold text-[13px] mt-1">{p.name}</h3>
            <div className="flex justify-between mt-4"><p className="font-black">{p.price}</p><button onClick={()=>setCart(cart+1)} className="px-3 py-1.5 rounded-full bg-[#061e14] text-white text-[11px]">Add +</button></div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
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
