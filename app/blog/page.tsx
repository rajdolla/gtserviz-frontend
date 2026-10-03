"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [open, setOpen] = useState(false);
  const posts = [
    {t:"How to start VTU business and make ₦100k monthly in 2026",d:"Complete guide for beginners with capital as low as ₦5k...",date:"Oct 2, 2026",cat:"BUSINESS"},
    {t:"Cheapest data plans this month - MTN vs Airtel vs Glo",d:"We compared all networks to find the best deal...",date:"Oct 1, 2026",cat:"DATA"},
    {t:"GTServiz API documentation - Integrate VTU in 5 minutes",d:"For developers who want to build with our API...",date:"Sep 28, 2026",cat:"API"},
    {t:"How to pay electricity bills online in Nigeria",d:"Step by step guide to buy IKEDC, EKEDC tokens...",date:"Sep 25, 2026",cat:"BILLS"},
    {t:"Why GTServiz is the best SubPlug alternative",d:"Faster delivery, cheaper rates, 24/7 support...",date:"Sep 20, 2026",cat:"NEWS"},
    {t:"JAMB, WAEC, NECO pins now available instantly",d:"Get exam pins delivered to your email in 30 seconds...",date:"Sep 18, 2026",cat:"EDUCATION"},
  ];
  return (
    <div className="min-h-screen bg-[#f2f7fb]">
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5"><div className="w-8 h-8 bg-white rounded-full overflow-hidden"><Image src="/logo.png" alt="GT" width={32} height={32}/></div><span className="text-white font-black">GTSERVIZ</span></Link>
          <nav className="hidden lg:flex gap-6 text-[13px] text-white/60"><Link href="/">Home</Link><Link href="/pricing">Pricing</Link><Link href="/store">Store</Link><Link href="/blog" className="text-[#00A54F] font-bold border-b-2 border-[#00A54F] py-5">Blog</Link></nav>
          <Link href="/signup" className="hidden lg:block px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[12px] font-black">Create Account</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
      </header>

      <section className="pt-24 pb-16">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="text-[#00A54F] text-[11px] font-black tracking-widest">GTSERVIZ BLOG</p>
          <h1 className="text-[28px] font-black mt-1">Tips, News & Updates</h1>
          <p className="text-[13px] text-slate-500 mt-2">Learn how to grow with GTSERVIZ.</p>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {posts.map((p,i)=>(
              <div key={i} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-44 bg-gradient-to-br from-[#e6f6ec] to-[#0e3320]/20 flex items-center justify-center text-[40px]">📝</div>
                <div className="p-5">
                  <div className="flex gap-2 items-center"><span className="px-2 py-1 bg-[#e6f6ec] text-[#065F36] text-[9px] font-black rounded-full">{p.cat}</span><span className="text-[10px] text-slate-500">{p.date}</span></div>
                  <h3 className="font-black text-[14px] mt-3 leading-tight">{p.t}</h3>
                  <p className="text-[12px] text-slate-500 mt-2 line-clamp-2">{p.d}</p>
                  <button className="mt-4 text-[#00A54F] text-[11px] font-black">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-[#0b1f35] text-white/60 py-8 text-center text-[12px]">© 2026 GTSERVIZ Blog • 07012222025</footer>
    </div>
  )
}
