"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f7fb] text-[#0f2440] font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0a1930] border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="GTServiz" width={28} height={28} />
            </div>
            <span className="text-white font-black text-[18px] tracking-widest">GTSERVIZ</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-white/70">
            <Link href="#" className="text-[#10d68e] font-bold border-b-2 border-[#10d68e] pb-5 pt-5">Home</Link>
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Store</Link>
            <Link href="#">Blog</Link>
            <Link href="#">API</Link>
            <Link href="#">Become a Reseller</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:flex items-center gap-1.5 text-white text-[13px] font-semibold">🔒 Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#10d68e] text-[#0a1930] text-[12px] font-black hover:bg-white transition">Create Account</Link>
            <button onClick={()=>setOpen(!open)} className="lg:hidden text-white text-xl">☰</button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-[#0a1930] border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white text-sm">
            <Link href="#">Services</Link><Link href="#">Pricing</Link><Link href="#">Store</Link><Link href="#">API</Link><Link href="#">Become a Reseller</Link>
          </div>
        )}
      </header>

      {/* HERO - Exact as SubPlug */}
      <section className="bg-[#0a1930] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_at_70%_0%,rgba(16,214,142,0.25),transparent)]" />
        <div className="max-w-[1240px] mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10d68e]/50 text-[#10d68e] text-[10px] font-black tracking-widest">● FAST, CHEAP & SECURE</div>
            <h1 className="text-white text-[36px] md:text-[48px] font-black leading-[1.05] mt-5">
              Fast, Cheap & Secure<br/> Airtime, Data, Cable TV<br/> and <span className="text-[#10d68e]">More!</span>
            </h1>
            <p className="text-white/60 text-[13px] mt-4 max-w-[420px] leading-relaxed">Top up your phone, pay your bills, buy data and enjoy other digital services — all in one place. GTSERVIZ makes it easy, fast and affordable.</p>
            <div className="flex gap-3 mt-7">
              <Link href="/signup" className="px-6 py-3 rounded-full bg-[#10d68e] text-[#0a1930] font-black text-[13px] flex items-center gap-2">Get Started Now →</Link>
              <Link href="#services" className="px-6 py-3 rounded-full border border-white/30 text-white text-[13px] font-bold">Explore Services</Link>
            </div>
            <div className="flex gap-5 mt-6 text-[11px] text-white/70 font-bold">
              <span className="flex gap-1.5 items-center"><span className="w-4 h-4 bg-[#10d68e] rounded-full flex items-center justify-center text-[10px] text-[#0a1930]">✓</span> Instant Delivery</span>
              <span className="flex gap-1.5 items-center"><span className="w-4 h-4 bg-[#10d68e] rounded-full flex items-center justify-center text-[10px] text-[#0a1930]">✓</span> Secure Payments</span>
              <span className="flex gap-1.5 items-center"><span className="w-4 h-4 bg-[#10d68e] rounded-full flex items-center justify-center text-[10px] text-[#0a1930]">✓</span> 24/7 Support</span>
            </div>
          </div>

          {/* Right illustration - CSS version of SubPlug person + floating cards */}
          <div className="relative h-[420px] hidden md:block">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-[#10d68e]/20 rounded-full" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-[#10d68e]/10 rounded-full" />
            <div className="absolute left-[35%] top-[25%] w-[180px] h-[280px]">
              <div className="w-[110px] h-[110px] bg-[#1a1a1a] rounded-full mx-auto" />
              <div className="w-[160px] h-[160px] bg-[#10b07a] rounded-t-[80px] mx-auto -mt-4 relative">
                <div className="absolute -right-8 top-10 w-[64px] h-[84px] bg-[#0a1930] border-2 border-white/20 rounded-[12px] flex items-center justify-center"><span className="text-2xl">📱</span></div>
              </div>
              <div className="absolute -bottom-4 -left-2 px-3 py-2 bg-[#0a1930] border border-[#10d68e]/30 rounded-xl text-white text-[10px] flex gap-2 items-center"><span className="text-[#10d68e]">🛡️</span> Trusted by <b>500,000+</b> Users</div>
            </div>
            <div className="absolute right-0 top-[12%] space-y-3">
              <div className="px-4 py-2.5 bg-[#12305a] border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold"><span className="w-7 h-7 bg-[#3b82f6] rounded-lg flex items-center justify-center">📱</span> Airtime</div>
              <div className="px-4 py-2.5 bg-[#12305a] border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-6"><span className="w-7 h-7 bg-[#0ea5e9] rounded-lg flex items-center justify-center">📶</span> Data</div>
              <div className="px-4 py-2.5 bg-[#12305a] border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-4"><span className="w-7 h-7 bg-[#8b5cf6] rounded-lg flex items-center justify-center">📺</span> Cable TV</div>
              <div className="px-4 py-2.5 bg-[#12305a] border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-8"><span className="w-7 h-7 bg-[#f59e0b] rounded-lg flex items-center justify-center">⚡</span> Electricity</div>
              <div className="px-4 py-2.5 bg-[#12305a] border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-2"><span className="w-7 h-7 bg-[#10d68e] rounded-lg flex items-center justify-center">•••</span> More</div>
            </div>
          </div>
        </div>
      </section>

      {/* ICON ROW */}
      <section className="max-w-[1240px] mx-auto px-6 -mt-6 relative z-10 grid grid-cols-2 md:grid-cols-6 gap-3">
        {[
          {i:"📱", t:"Airtime", d:"Buy airtime for all networks", c:"bg-[#6366f1]"},
          {i:"📶", t:"Data", d:"Affordable data plans", c:"bg-[#0ea5e9]"},
          {i:"📺", t:"Cable TV", d:"DStv, GOtv, Startimes", c:"bg-[#8b5cf6]"},
          {i:"🧾", t:"Airtime to Cash", d:"Convert airtime to cash", c:"bg-[#f59e0b]"},
          {i:"⚡", t:"Electricity", d:"Pay electricity bills", c:"bg-[#10b981]"},
          {i:"🎓", t:"Exam Pins", d:"WAEC, NECO, JAMB", c:"bg-[#3b82f6]"},
        ].map((s,k)=>(
          <div key={k} className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm hover:shadow-md transition">
            <div className={`w-9 h-9 mx-auto rounded-lg ${s.c} text-white flex items-center justify-center`}>{s.i}</div>
            <p className="font-black text-[12px] mt-3">{s.t}</p>
            <p className="text-[10px] text-slate-500 mt-1">{s.d}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-[1240px] mx-auto px-6 py-16 text-center">
        <p className="text-[#10b981] text-[11px] font-black tracking-widest">WHY CHOOSE GTSERVIZ?</p>
        <h2 className="text-[26px] font-black mt-2 leading-tight">We make digital transactions simple,<br/> fast, and reliable.</h2>
        <p className="text-[12px] text-slate-500 mt-2">Join thousands of happy customers who trust us every day.</p>
        <div className="grid md:grid-cols-4 gap-4 mt-8 text-left">
          {[
            {t:"Cheap Rates", d:"Get the best prices for all services."},
            {t:"Instant Recharge", d:"Enjoy lightning-fast delivery."},
            {t:"100% Secure", d:"Your data and funds are protected."},
            {t:"24/7 Support", d:"We're always here to help."},
          ].map((f,i)=>(
            <div key={i} className="bg-white border rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#e6fbf3] flex items-center justify-center text-[#10b981] text-sm">✓</div>
              <p className="font-black text-[13px] mt-4">{f.t}</p>
              <p className="text-[11px] text-slate-500 mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL BAR */}
      <section className="bg-[#d9f5e9] py-8">
        <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-[#0e9f6e] text-[11px] font-black tracking-widest">JOIN 500,000+ HAPPY CUSTOMERS</p>
            <h3 className="text-[18px] font-black mt-2 leading-tight">From students to businesses,<br/> GTSERVIZ is trusted for everyday top-ups.</h3>
          </div>
          <div className="bg-white rounded-xl p-5 text-[12px] leading-relaxed shadow-sm">
            <p className="text-slate-600">“GTSERVIZ is simply the best. Fast, reliable and easy to use. I top up my data and airtime every week.”</p>
            <p className="font-black mt-3">— Chidera O.</p>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section id="services" className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-center text-[#10b981] text-[11px] font-black tracking-widest">POPULAR SERVICES</p>
        <h2 className="text-center text-[22px] font-black mt-2">Quick and easy access to your favorites</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[
            {i:"📱", t:"Airtime", d:"Buy airtime for all networks", c:"bg-[#6366f1]"},
            {i:"📶", t:"Data", d:"Affordable data plans", c:"bg-[#0ea5e9]"},
            {i:"📺", t:"Cable TV", d:"DStv, GOtv, Startimes", c:"bg-[#8b5cf6]"},
            {i:"🧾", t:"Airtime to Cash", d:"Convert airtime to cash", c:"bg-[#f59e0b]"},
            {i:"⚡", t:"Electricity", d:"Pay electricity bills", c:"bg-[#10b981]"},
            {i:"🎓", t:"Exam Pins", d:"WAEC, NECO, JAMB", c:"bg-[#3b82f6]"},
            {i:"💬", t:"Bulk SMS", d:"Send SMS at scale", c:"bg-[#ec4899]"},
            {i:"🎁", t:"Data Pins & Vouchers", d:"Pins for all networks", c:"bg-[#0f766e]"},
          ].map((s,i)=>(
            <div key={i} className="bg-white border rounded-xl p-5">
              <div className={`w-9 h-9 rounded-lg ${s.c} text-white flex items-center justify-center`}>{s.i}</div>
              <p className="font-black text-[13px] mt-3">{s.t}</p>
              <p className="text-[11px] text-slate-500 mt-1">{s.d}</p>
              <Link href="/signup" className="inline-flex items-center gap-1 mt-4 text-[#0e9f6e] text-[11px] font-black">Buy Now →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1240px] mx-auto px-6 pb-10">
        <div className="bg-gradient-to-r from-[#0a2a2a] to-[#0f8a5f] rounded-2xl p-8 md:p-10 flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-[#6ee7b7] text-[10px] font-black tracking-widest">READY TO GET STARTED?</p>
            <h3 className="text-white text-[22px] font-black leading-tight mt-2">Get instant access to all your<br/> digital services.</h3>
            <p className="text-white/70 text-[11px] mt-3">Create an account and enjoy a simpler way to pay.</p>
            <Link href="/signup" className="inline-flex mt-5 px-5 py-2.5 bg-[#10d68e] rounded-full text-[#0a1930] text-[12px] font-black">Sign Up Now →</Link>
          </div>
          <div className="hidden md:block w-[160px] h-[200px] bg-white rounded-[16px] border-4 border-[#0a1930] shadow-2xl rotate-6 p-3">
            <p className="font-black text-[10px]">GTSERVIZ</p>
            <div className="bg-[#e6fbf3] rounded-lg p-2 mt-3 text-[12px] font-black">N2,450.00</div>
            <div className="grid grid-cols-3 gap-2 mt-3"><div className="h-8 bg-slate-100 rounded-lg"/><div className="h-8 bg-slate-100 rounded-lg"/><div className="h-8 bg-slate-100 rounded-lg"/></div>
          </div>
        </div>
      </section>

      {/* API */}
      <section className="py-14 text-center">
        <p className="text-[#10b981] text-[11px] font-black tracking-widest">BUILT FOR GROWTH</p>
        <h2 className="text-[22px] font-black mt-2">Grow your business with GTSERVIZ API</h2>
        <p className="text-[12px] text-slate-500 mt-2">Integrate airtime, data, cable TV and electricity into your platform.</p>
        <Link href="#" className="inline-flex mt-4 px-6 py-3 bg-[#10d68e] rounded-full text-[#0a1930] text-[12px] font-black">Explore Reseller API →</Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1930] text-white/60 py-12">
        <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-4 gap-10 text-[13px]">
          <div><span className="text-white font-black">GTSERVIZ</span><p className="mt-3 text-[12px] leading-relaxed">Fast, cheap & secure VTU. 07012222025 • support@gtserviz.com</p></div>
          <div><p className="text-white font-black mb-3">Services</p><ul className="space-y-2"><li>Airtime</li><li>Data</li><li>Cable TV</li><li>Electricity</li></ul></div>
          <div><p className="text-white font-black mb-3">Company</p><ul className="space-y-2"><li>API</li><li>Become a Reseller</li><li>Blog</li></ul></div>
          <div><p className="text-white font-black mb-3">Contact</p><p>📞 07012222025</p><p>🌐 www.gtserviz.com</p></div>
        </div>
        <div className="max-w-[1240px] mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-[11px] flex justify-between"><p>© 2026 GTServiz. All rights reserved.</p><p>Privacy • Terms</p></div>
      </footer>
    </div>
  );
}
