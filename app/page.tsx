"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f7fb] text-[#0f2440]">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-ring { 0%{transform:scale(0.8);opacity:1} 100%{transform:scale(2.3);opacity:0} }
      .float-anim{animation:float 4s ease-in-out infinite}
      .float-anim2{animation:float 4s ease-in-out infinite 1s}
      .float-anim3{animation:float 4s ease-in-out infinite 2s}
      .pulse-ring::before{content:'';position:absolute;inset:0;border-radius:9999px;background:#25D366;animation:pulse-ring 2s infinite}
      `}</style>

      {/* HEADER - Responsive with Blog, Store, Pricing */}
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 md:px-6 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="GTServiz" width={32} height={32}/>
            </div>
            <span className="text-white font-black text-[18px] tracking-widest">GTSERVIZ</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-white/60">
            <Link href="#" className="text-[#00A54F] font-bold border-b-2 border-[#00A54F] py-5">Home</Link>
            <Link href="#services" className="hover:text-white transition">Services</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="#store" className="hover:text-white transition">Store</Link>
            <Link href="#blog" className="hover:text-white transition">Blog</Link>
            <Link href="#" className="hover:text-white transition">API</Link>
            <Link href="#" className="hover:text-white transition">Become a Reseller</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-white text-[13px] font-semibold px-4">🔒 Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[12px] font-black hover:bg-[#009645] transition">Create Account</Link>
          </div>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">{open?"✕":"☰"}</button>
        </div>
        {open && (
          <div className="lg:hidden bg-[#0a2a1a] border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white text-sm">
            <Link href="#" onClick={()=>setOpen(false)} className="text-[#00A54F] font-bold">Home</Link>
            <Link href="#services" onClick={()=>setOpen(false)}>Services</Link>
            <Link href="#pricing" onClick={()=>setOpen(false)}>Pricing</Link>
            <Link href="#store" onClick={()=>setOpen(false)}>Store</Link>
            <Link href="#blog" onClick={()=>setOpen(false)}>Blog</Link>
            <Link href="#">API</Link>
            <Link href="#">Become a Reseller</Link>
            <div className="flex gap-3 mt-3 pt-4 border-t border-white/10">
              <Link href="/login" className="flex-1 py-3 rounded-full border border-white/30 text-center font-bold">Login</Link>
              <Link href="/signup" className="flex-1 py-3 rounded-full bg-[#00A54F] text-center font-black">Create Account</Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-[#061e14] relative pt-[64px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e3320] to-[#061e14]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,165,79,0.18),transparent_70%)]" />
        <div className="max-w-[1240px] mx-auto px-5 md:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00A54F]/40 bg-[#00A54F]/10 text-[#7cffb0] text-[10px] font-black tracking-widest">● FAST, CHEAP & SECURE</div>
            <h1 className="text-white text-[32px] md:text-[48px] font-black leading-[1.05] mt-5">Fast, Cheap & Secure<br/> Airtime, Data, Cable TV<br/> and <span className="text-[#00A54F]">More!</span></h1>
            <p className="text-white/60 text-[13px] mt-4 max-w-[420px] mx-auto md:mx-0 leading-relaxed">Top up your phone, pay your bills, buy data and enjoy other digital services — all in one place. GTSERVIZ makes it easy, fast and affordable.</p>
            <div className="flex gap-3 mt-7 justify-center md:justify-start"><Link href="/signup" className="px-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get Started Now →</Link><Link href="#services" className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white text-[13px] font-bold">Explore Services</Link></div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-[#00A54F]/20 blur-[50px] rounded-full" />
            <div className="relative w-[280px] h-[560px] bg-black rounded-[42px] p-[8px] shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_25px_80px_rgba(0,0,0,0.6)] z-10">
              <div className="w-full h-full bg-white rounded-[34px] overflow-hidden flex flex-col">
                <div className="h-7 flex justify-center items-center"><div className="w-20 h-4 bg-black rounded-full"/></div>
                <div className="px-4 py-2 flex justify-between items-center border-b border-slate-100"><div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#00A54F] rounded-full flex items-center justify-center text-white text-[8px] font-black">GT</div><span className="font-black text-[11px] text-[#065F36]">GTSERVIZ</span></div><span>🔔</span></div>
                <div className="mx-3 mt-3 bg-gradient-to-br from-[#065F36] to-[#00A54F] rounded-2xl p-4 text-white"><p className="text-[9px] opacity-70 font-bold tracking-widest">WALLET BALANCE</p><p className="text-[22px] font-black mt-1">₦2,450.00</p><div className="flex gap-2 mt-3"><div className="flex-1 bg-white text-[#065F36] text-[10px] font-black py-2 rounded-full text-center">Fund Wallet</div><div className="flex-1 bg-white/20 text-white text-[10px] font-black py-2 rounded-full text-center">History</div></div></div>
                <div className="grid grid-cols-3 gap-2 p-3"><div className="bg-slate-50 rounded-xl p-2 text-center border"><div>📱</div><p className="text-[8px] font-bold">Airtime</p></div><div className="bg-slate-50 rounded-xl p-2 text-center border"><div>📶</div><p className="text-[8px] font-bold">Data</p></div><div className="bg-slate-50 rounded-xl p-2 text-center border"><div>📺</div><p className="text-[8px] font-bold">TV</p></div><div className="bg-slate-50 rounded-xl p-2 text-center border"><div>💡</div><p className="text-[8px] font-bold">Electric</p></div><div className="bg-slate-50 rounded-xl p-2 text-center border"><div>🎓</div><p className="text-[8px] font-bold">Exam</p></div><div className="bg-slate-50 rounded-xl p-2 text-center border"><div>💸</div><p className="text-[8px] font-bold">To Cash</p></div></div>
                <div className="px-4 mt-1"><p className="text-[10px] font-black">Recent Transactions</p><div className="mt-2 bg-slate-50 p-2 rounded-lg flex justify-between text-[10px]"><span>MTN 1GB • Success</span><span className="font-black text-[#00A54F]">-₦275</span></div></div>
              </div>
            </div>
            <div className="absolute -right-2 md:-right-6 top-[18%] z-20 float-anim hidden md:flex"><div className="px-4 py-2.5 bg-white rounded-xl shadow-xl border flex items-center gap-2 text-[11px] font-bold">📱 Airtime</div></div>
            <div className="absolute -right-2 md:right-2 top-[38%] z-20 float-anim2 hidden md:flex"><div className="px-4 py-2.5 bg-white rounded-xl shadow-xl border flex items-center gap-2 text-[11px] font-bold">📶 Data</div></div>
            <div className="absolute -right-2 md:-right-2 top-[58%] z-20 float-anim3 hidden md:flex"><div className="px-4 py-2.5 bg-white rounded-xl shadow-xl border flex items-center gap-2 text-[11px] font-bold">📺 Cable TV</div></div>
          </div>
        </div>
      </section>

      {/* ICON ROW */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-6 -mt-6 relative z-20 grid grid-cols-2 md:grid-cols-6 gap-3">
        {[{i:"📱",t:"Airtime",d:"Buy airtime for all networks",c:"bg-[#6366f1]"},{i:"📶",t:"Data",d:"Affordable data plans",c:"bg-[#0ea5e9]"},{i:"📺",t:"Cable TV",d:"DStv, GOtv, Startimes",c:"bg-[#8b5cf6]"},{i:"🧾",t:"Airtime to Cash",d:"Convert airtime to cash",c:"bg-[#f59e0b]"},{i:"⚡",t:"Electricity",d:"Pay electricity bills",c:"bg-[#10b981]"},{i:"🎓",t:"Exam Pins",d:"WAEC, NECO, JAMB",c:"bg-[#3b82f6]"}].map((s,k)=>(
          <div key={k} className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm"><div className={`w-9 h-9 mx-auto rounded-lg ${s.c} text-white flex items-center justify-center`}>{s.i}</div><p className="font-black text-[12px] mt-3">{s.t}</p><p className="text-[10px] text-slate-500 mt-1">{s.d}</p></div>
        ))}
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-6 py-16 text-center">
        <p className="text-[#00A54F] text-[11px] font-black tracking-widest">WHY CHOOSE GTSERVIZ?</p>
        <h2 className="text-[26px] font-black mt-2 leading-tight">We make digital transactions simple,<br/> fast, and reliable.</h2>
        <p className="text-[12px] text-slate-500 mt-2">Join thousands of happy customers who trust us every day.</p>
        <div className="grid md:grid-cols-4 gap-4 mt-8 text-left">{[{t:"Cheap Rates",d:"Get the best prices for all services."},{t:"Instant Recharge",d:"Enjoy lightning-fast delivery."},{t:"100% Secure",d:"Your data and funds are protected."},{t:"24/7 Support",d:"We're always here to help."}].map((f,i)=>(<div key={i} className="bg-white border rounded-xl p-5"><div className="w-8 h-8 rounded-full bg-[#e6f6ec] flex items-center justify-center text-[#00A54F] text-sm">✓</div><p className="font-black text-[13px] mt-4">{f.t}</p><p className="text-[11px] text-slate-500 mt-1">{f.d}</p></div>))}</div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#d9f5e9] py-8">
        <div className="max-w-[1240px] mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-6 items-center"><div><p className="text-[#065F36] text-[11px] font-black tracking-widest">JOIN 500,000+ HAPPY CUSTOMERS</p><h3 className="text-[18px] font-black mt-2 leading-tight">From students to businesses,<br/> GTSERVIZ is trusted for everyday top-ups.</h3></div><div className="bg-white rounded-xl p-5 text-[12px] leading-relaxed shadow-sm"><p className="text-slate-600">“GTSERVIZ is simply the best. Fast, reliable and easy to use.”</p><p className="font-black mt-3">— Chidera O.</p></div></div>
      </section>

      {/* POPULAR SERVICES */}
      <section id="services" className="max-w-[1240px] mx-auto px-5 md:px-6 py-16">
        <p className="text-center text-[#00A54F] text-[11px] font-black tracking-widest">POPULAR SERVICES</p>
        <h2 className="text-center text-[22px] font-black mt-2">Quick and easy access to your favorites</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-8">{[{t:"Airtime",d:"Buy airtime for all networks"},{t:"Data",d:"Affordable data plans"},{t:"Cable TV",d:"DStv, GOtv, Startimes"},{t:"Airtime to Cash",d:"Convert airtime to cash"},{t:"Electricity",d:"Pay electricity bills"},{t:"Exam Pins",d:"WAEC, NECO, JAMB"},{t:"Bulk SMS",d:"Send SMS at scale"},{t:"Data Pins & Vouchers",d:"Pins for all networks"}].map((s,i)=>(<div key={i} className="bg-white border rounded-xl p-5"><div className="w-9 h-9 rounded-lg bg-[#e6f6ec] text-[#00A54F] flex items-center justify-center font-black">•</div><p className="font-black text-[13px] mt-3">{s.t}</p><p className="text-[11px] text-slate-500 mt-1">{s.d}</p><Link href="/signup" className="inline-flex mt-4 text-[#00A54F] text-[11px] font-black">Buy Now →</Link></div>))}</div>
      </section>

      {/* PRICING - DIFFERENT SECTION */}
      <section id="pricing" className="max-w-[1240px] mx-auto px-5 md:px-6 py-16 bg-[#eef5f0] rounded-[24px]">
        <p className="text-center text-[#00A54F] text-[11px] font-black tracking-widest">AFFORDABLE PRICING</p>
        <h2 className="text-center text-[26px] font-black mt-2">Best rates for all services</h2>
        <p className="text-center text-[12px] text-slate-500 mt-2">Start with as low as ₦100. No hidden charges.</p>
        <div className="grid md:grid-cols-3 gap-5 mt-10 max-w-[1000px] mx-auto">
          <div className="bg-white border rounded-2xl p-6"><h3 className="font-black">MTN Data</h3><p className="text-[28px] font-black mt-2 text-[#065F36]">₦275<span className="text-[12px] text-slate-500">/1GB</span></p><ul className="mt-5 space-y-2 text-[12px]"><li>✓ 30 Days Validity</li><li>✓ 4G Support</li><li>✓ Instant Delivery</li></ul><Link href="/signup" className="block mt-6 py-3 rounded-full bg-[#e6f6ec] text-[#065F36] font-black text-center text-[12px]">Buy Now</Link></div>
          <div className="bg-[#061e14] text-white border border-[#00A54F]/30 rounded-2xl p-6 relative shadow-xl md:scale-[1.05]"><span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#00A54F] rounded-full text-[10px] font-black">MOST POPULAR</span><h3 className="font-black">Airtel Data</h3><p className="text-[28px] font-black mt-2 text-[#00FF88]">₦280<span className="text-[12px] text-white/60">/1GB</span></p><ul className="mt-5 space-y-2 text-[12px] text-white/70"><li>✓ 30 Days Validity</li><li>✓ Hotspot Allowed</li><li>✓ Instant Delivery</li></ul><Link href="/signup" className="block mt-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-center text-[12px]">Buy Now</Link></div>
          <div className="bg-white border rounded-2xl p-6"><h3 className="font-black">Glo Data</h3><p className="text-[28px] font-black mt-2 text-[#065F36]">₦270<span className="text-[12px] text-slate-500">/1GB</span></p><ul className="mt-5 space-y-2 text-[12px]"><li>✓ 30 Days Validity</li><li>✓ 5G Support</li><li>✓ Instant Delivery</li></ul><Link href="/signup" className="block mt-6 py-3 rounded-full bg-[#e6f6ec] text-[#065F36] font-black text-center text-[12px]">Buy Now</Link></div>
        </div>
      </section>

      {/* STORE - DIFFERENT SECTION */}
      <section id="store" className="bg-white border-y py-16 mt-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-6">
          <div className="flex justify-between items-end"><div><p className="text-[#00A54F] text-[11px] font-black tracking-widest">GTSERVIZ STORE</p><h2 className="text-[24px] font-black mt-1">Digital Products Marketplace</h2></div><Link href="#" className="hidden md:block text-[12px] font-black text-[#00A54F]">View All →</Link></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[{t:"MTN 1GB SME",p:"₦275",s:"1 Month"},{t:"DSTV Compact",p:"₦10,500",s:"1 Month"},{t:"JAMB PIN",p:"₦4,200",s:"Instant"},{t:"Electric Token",p:"From ₦1,000",s:"All Disco"}].map((item,i)=>(
              <div key={i} className="border rounded-xl p-4 hover:shadow-lg transition bg-[#f8faf8]"><div className="h-24 bg-white rounded-lg border flex items-center justify-center text-[24px]">📦</div><p className="font-black text-[13px] mt-3">{item.t}</p><p className="text-[11px] text-slate-500">{item.s}</p><div className="flex justify-between items-center mt-3"><span className="font-black text-[#065F36] text-[13px]">{item.p}</span><span className="px-3 py-1 bg-[#00A54F] text-white rounded-full text-[10px] font-bold">Buy</span></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG - DIFFERENT SECTION */}
      <section id="blog" className="max-w-[1240px] mx-auto px-5 md:px-6 py-16">
        <div className="flex justify-between items-end"><div><p className="text-[#00A54F] text-[11px] font-black tracking-widest">LATEST FROM BLOG</p><h2 className="text-[24px] font-black mt-1">Tips, News & Updates</h2></div><Link href="#" className="hidden md:block text-[12px] font-black text-[#00A54F]">Read All →</Link></div>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[{t:"How to start VTU business in 2026",d:"Learn how to make ₦5k daily...",date:"Oct 2, 2026"},{t:"Cheapest data plans this month",d:"MTN, Airtel, Glo comparison...",date:"Oct 1, 2026"},{t:"GTServiz API for developers",d:"Integrate VTU in 5 minutes...",date:"Sep 28, 2026"}].map((b,i)=>(
            <div key={i} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"><div className="h-36 bg-gradient-to-br from-[#e6f6ec] to-[#d9f5e9] flex items-center justify-center text-[32px]">📝</div><div className="p-5"><p className="text-[10px] text-slate-500 font-bold">{b.date}</p><h4 className="font-black text-[14px] mt-2 leading-tight">{b.t}</h4><p className="text-[12px] text-slate-500 mt-2">{b.d}</p><Link href="#" className="inline-flex mt-4 text-[#00A54F] text-[11px] font-black">Read More →</Link></div></div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-6 pb-10">
        <div className="bg-gradient-to-r from-[#061e14] to-[#00A54F] rounded-2xl p-8 md:p-10 flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10"><p className="text-[#7cffb0] text-[10px] font-black tracking-widest">READY TO GET STARTED?</p><h3 className="text-white text-[22px] font-black leading-tight mt-2">Get instant access to all your<br/> digital services.</h3><Link href="/signup" className="inline-flex mt-5 px-5 py-2.5 bg-white rounded-full text-[#065F36] text-[12px] font-black">Sign Up Now →</Link></div>
          <div className="hidden md:block w-[160px] h-[200px] bg-white rounded-[16px] border-4 border-[#061e14] shadow-2xl rotate-6 p-3"><p className="font-black text-[10px] text-[#065F36]">GTSERVIZ</p><div className="bg-[#e6f6ec] rounded-lg p-2 mt-3 text-[12px] font-black text-[#065F36]">N2,450.00</div></div>
        </div>
      </section>

      {/* API */}
      <section className="py-14 text-center"><p className="text-[#00A54F] text-[11px] font-black tracking-widest">BUILT FOR GROWTH</p><h2 className="text-[22px] font-black mt-2">Grow your business with GTSERVIZ API</h2><p className="text-[12px] text-slate-500 mt-2">Integrate airtime, data, cable TV and electricity into your platform.</p><Link href="#" className="inline-flex mt-4 px-6 py-3 bg-[#00A54F] rounded-full text-white text-[12px] font-black">Explore Reseller API →</Link></section>

      {/* FOOTER - EXACT FROM YOUR PHOTO */}
      <footer className="bg-[#0b1f35] text-white/70 pt-14 pb-6">
        <div className="max-w-[1240px] mx-auto px-5 md:px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-white rounded-full flex items-center justify-center overflow-hidden"><Image src="/logo.png" alt="GTServiz" width={28} height={28}/></div><span className="text-white font-black text-[18px] tracking-widest">GTSERVIZ</span></div>
            <p className="text-[12px] mt-3 text-white/60 leading-relaxed">Your trusted digital service partner. Fast, affordable and secure.</p>
            <div className="flex gap-3 mt-5">
              <div className="px-3 py-2 bg-black border border-white/20 rounded-lg flex items-center gap-2"><span className="text-white">▶</span><div className="leading-none"><p className="text-[8px] text-white/70">GET IT ON</p><p className="text-[11px] text-white font-bold">Google Play</p><p className="text-[8px] text-[#00A54F]">Coming Soon</p></div></div>
              <div className="px-3 py-2 bg-black border border-white/20 rounded-lg flex items-center gap-2"><span className="text-white">●</span><div className="leading-none"><p className="text-[8px] text-white/70">Download on the</p><p className="text-[11px] text-white font-bold">App Store</p><p className="text-[8px] text-[#00A54F]">Coming Soon</p></div></div>
            </div>
          </div>
          <div><h4 className="text-white font-bold text-[13px] mb-4">Quick Links</h4><ul className="space-y-3 text-[12px]"><li><Link href="#" className="hover:text-white">Home</Link></li><li><Link href="#services" className="hover:text-white">Services</Link></li><li><Link href="#pricing" className="hover:text-white">API</Link></li><li><Link href="#blog" className="hover:text-white">Blog</Link></li></ul></div>
          <div><h4 className="text-white font-bold text-[13px] mb-4">Support</h4><ul className="space-y-3 text-[12px]"><li>Help Center</li><li>Contact Us</li><li>Terms & Conditions</li><li>Privacy Policy</li></ul></div>
          <div><h4 className="text-white font-bold text-[13px] mb-4">Follow Us</h4><div className="flex gap-3 text-[14px]"><span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">◎</span><span>f</span><span>𝕏</span><span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">◎</span></div><p className="text-[11px] mt-8 text-white/50">© 2026 GTSERVIZ. All rights reserved.</p><p className="text-[11px] mt-1 text-white/50">07012222025 • support@gtserviz.com • www.gtserviz.com</p></div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP - REAL SVG + PULSE */}
      <a href="https://wa.me/2347012222025?text=Hello%20GTServiz%20I%20need%20help" target="_blank" className="fixed bottom-6 right-6 z-[999] w-[60px] h-[60px] flex items-center justify-center">
        <div className="absolute w-full h-full pulse-ring rounded-full"></div>
        <div className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition">
          <svg viewBox="0 0 32 32" className="w-[30px] h-[30px] fill-white"><path d="M16 2.9c-7.18 0-13 5.82-13 13 0 2.29.6 4.53 1.74 6.51L3 29l6.69-1.76A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 2.9 16 2.9zm0 23.39a10.39 10.39 0 01-5.3-1.45l-.38-.23-3.97 1.04 1.06-3.87-.25-.4A10.35 10.35 0 015.61 16c0-5.74 4.67-10.41 10.39-10.41S26.39 10.26 26.39 16 21.72 26.29 16 26.29zm5.7-7.78c-.31-.16-1.85-.91-2.13-1.02-.29-.11-.5-.16-.7.16-.21.31-.81 1.02-.99 1.22-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.61-.51-.53-.7-.54h-.6c-.21 0-.55.08-.83.39-.29.31-1.09 1.07-1.09 2.6s1.12 3.02 1.27 3.23c.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36z"/></svg>
        </div>
      </a>
    </div>
  );
}
