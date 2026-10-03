"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PricingPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f7fb]">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5"><div className="w-8 h-8 bg-white rounded-full overflow-hidden"><Image src="/logo.png" alt="GT" width={32} height={32}/></div><span className="text-white font-black">GTSERVIZ</span></Link>
          <nav className="hidden lg:flex gap-6 text-[13px] text-white/60"><Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/pricing" className="text-[#00A54F] font-bold border-b-2 border-[#00A54F] py-5">Pricing</Link><Link href="/store">Store</Link><Link href="/blog">Blog</Link></nav>
          <Link href="/signup" className="hidden lg:block px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[12px] font-black">Create Account</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
        {open && <div className="lg:hidden bg-[#0a2a1a] px-6 py-6 flex flex-col gap-4 text-white"><Link href="/">Home</Link><Link href="/pricing" className="text-[#00A54F]">Pricing</Link><Link href="/store">Store</Link><Link href="/blog">Blog</Link></div>}
      </header>

      <section className="pt-24 pb-16">
        <div className="max-w-[1240px] mx-auto px-5 text-center">
          <p className="text-[#00A54F] text-[11px] font-black tracking-widest">OUR PRICING</p>
          <h1 className="text-[32px] font-black mt-2">Cheapest Rates in Nigeria</h1>
          <p className="text-[13px] text-slate-500 mt-2 max-w-[600px] mx-auto">We beat market price. No hidden charges. Instant delivery for all networks.</p>

          <div className="grid md:grid-cols-4 gap-4 mt-12 text-left">
            {[
              {net:"MTN", plans:[{n:"1GB",p:"₦275",d:"30 days"},{n:"2GB",p:"₦550",d:"30 days"},{n:"5GB",p:"₦1,375",d:"30 days"}]},
              {net:"AIRTEL", plans:[{n:"1GB",p:"₦280",d:"30 days"},{n:"2GB",p:"₦560",d:"30 days"},{n:"5GB",p:"₦1,400",d:"30 days"}]},
              {net:"GLO", plans:[{n:"1GB",p:"₦270",d:"30 days"},{n:"2GB",p:"₦540",d:"30 days"},{n:"5GB",p:"₦1,350",d:"30 days"}]},
              {net:"9MOBILE", plans:[{n:"1GB",p:"₦290",d:"30 days"},{n:"2GB",p:"₦580",d:"30 days"},{n:"5GB",p:"₦1,450",d:"30 days"}]},
            ].map((m,i)=>(
              <div key={i} className="bg-white rounded-2xl border p-6">
                <div className="w-10 h-10 rounded-full bg-[#e6f6ec] flex items-center justify-center font-black text-[#065F36] text-[12px]">{m.net[0]}</div>
                <h3 className="font-black mt-4">{m.net} Data</h3>
                <div className="mt-4 space-y-3">
                  {m.plans.map((pl,k)=>(
                    <div key={k} className="flex justify-between items-center border-b border-slate-100 pb-2"><span className="text-[12px]">{pl.n} - {pl.d}</span><span className="font-black text-[#065F36] text-[13px]">{pl.p}</span></div>
                  ))}
                </div>
                <Link href="/signup" className="block mt-5 py-2.5 rounded-full bg-[#061e14] text-white text-center text-[12px] font-black">Buy Now</Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#061e14] rounded-2xl p-8 text-left text-white grid md:grid-cols-2 gap-6">
            <div><h3 className="font-black text-[18px]">Airtime - All Networks</h3><p className="text-[12px] text-white/60 mt-1">2% Discount on all airtime purchases</p></div>
            <div className="grid grid-cols-2 gap-3 text-[12px]"><div className="bg-white/10 p-3 rounded-xl">MTN - 2% OFF</div><div className="bg-white/10 p-3 rounded-xl">Airtel - 2% OFF</div><div className="bg-white/10 p-3 rounded-xl">Glo - 3% OFF</div><div className="bg-white/10 p-3 rounded-xl">9mobile - 3% OFF</div></div>
          </div>
        </div>
      </section>
      <footer className="bg-[#0b1f35] text-white/60 py-8 text-center text-[12px]">© 2026 GTSERVIZ • 07012222025</footer>
    </div>
  )
}
