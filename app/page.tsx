"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f7fb] text-[#0f2440]">
      {/* HEADER - GTServiz colors */}
      <header className="sticky top-0 z-50 bg-[#061e14] border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="GTServiz" width={32} height={32} />
            </div>
            <span className="text-white font-black text-[18px] tracking-widest">GTSERVIZ</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-white/60">
            <Link href="#" className="text-[#00A54F] font-bold border-b-2 border-[#00A54F] py-5">Home</Link>
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Store</Link>
            <Link href="#">Blog</Link>
            <Link href="#">API</Link>
            <Link href="#">Become a Reseller</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:flex text-white text-[13px] font-semibold">🔒 Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[12px] font-black hover:bg-[#009645] transition">Create Account</Link>
            <button onClick={()=>setOpen(!open)} className="lg:hidden text-white">☰</button>
          </div>
        </div>
        {open && <div className="lg:hidden bg-[#061e14] px-6 py-5 flex flex-col gap-4 text-white text-sm border-t border-white/10"><Link href="#">Services</Link><Link href="#">API</Link><Link href="#">Contact</Link></div>}
      </header>

      {/* HERO */}
      <section className="bg-[#061e14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_at_70%_0%,rgba(0,165,79,0.25),transparent)]" />
        <div className="max-w-[1240px] mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00A54F]/50 text-[#00A54F] text-[10px] font-black tracking-widest">● FAST, CHEAP & SECURE</div>
            <h1 className="text-white text-[36px] md:text-[48px] font-black leading-[1.05] mt-5">Fast, Cheap & Secure<br/> Airtime, Data, Cable TV<br/> and <span className="text-[#00A54F]">More!</span></h1>
            <p className="text-white/60 text-[13px] mt-4 max-w-[420px] leading-relaxed">Top up your phone, pay your bills, buy data and enjoy other digital services — all in one place. GTSERVIZ makes it easy, fast and affordable.</p>
            <div className="flex gap-3 mt-7">
              <Link href="/signup" className="px-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get Started Now →</Link>
              <Link href="#services" className="px-6 py-3 rounded-full border border-white/30 text-white text-[13px] font-bold">Explore Services</Link>
            </div>
          </div>
          <div className="relative h-[380px] hidden md:block">
            <div className="absolute right-0 top-[10%] space-y-3">
              <div className="px-4 py-2.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold"><span className="w-7 h-7 bg-[#00A54F] rounded-lg flex items-center justify-center">📱</span> Airtime</div>
              <div className="px-4 py-2.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-6"><span className="w-7 h-7 bg-[#0ea5e9] rounded-lg flex items-center justify-center">📶</span> Data</div>
              <div className="px-4 py-2.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-4"><span className="w-7 h-7 bg-[#8b5cf6] rounded-lg flex items-center justify-center">📺</span> Cable TV</div>
              <div className="px-4 py-2.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-8"><span className="w-7 h-7 bg-[#f59e0b] rounded-lg flex items-center justify-center">⚡</span> Electricity</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + OTHER SECTIONS (kept same as SubPlug but with GT green) */}
      <section id="services" className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-center text-[#00A54F] text-[11px] font-black tracking-widest">POPULAR SERVICES</p>
        <h2 className="text-center text-[22px] font-black mt-2">Quick and easy access to your favorites</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[
            {t:"Airtime", d:"Buy airtime for all networks"},
            {t:"Data", d:"Affordable data plans"},
            {t:"Cable TV", d:"DStv, GOtv, Startimes"},
            {t:"Airtime to Cash", d:"Convert airtime to cash"},
            {t:"Electricity", d:"Pay electricity bills"},
            {t:"Exam Pins", d:"WAEC, NECO, JAMB"},
            {t:"Bulk SMS", d:"Send SMS at scale"},
            {t:"Data Pins & Vouchers", d:"Pins for all networks"},
          ].map((s,i)=>(
            <div key={i} className="bg-white border rounded-xl p-5 hover:shadow-lg transition">
              <div className="w-9 h-9 rounded-lg bg-[#e6f6ec] text-[#00A54F] flex items-center justify-center font-black">•</div>
              <p className="font-black text-[13px] mt-3">{s.t}</p>
              <p className="text-[11px] text-slate-500 mt-1">{s.d}</p>
              <Link href="/signup" className="inline-flex mt-4 text-[#00A54F] text-[11px] font-black">Buy Now →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1240px] mx-auto px-6 pb-10">
        <div className="bg-gradient-to-r from-[#061e14] to-[#00A54F] rounded-2xl p-8 md:p-10 flex justify-between items-center">
          <div>
            <p className="text-[#7cffb0] text-[10px] font-black tracking-widest">READY TO GET STARTED?</p>
            <h3 className="text-white text-[22px] font-black leading-tight mt-2">Get instant access to all your<br/> digital services.</h3>
            <Link href="/signup" className="inline-flex mt-5 px-5 py-2.5 bg-white rounded-full text-[#065F36] text-[12px] font-black">Sign Up Now →</Link>
          </div>
          <div className="hidden md:block w-[150px] h-[180px] bg-white rounded-[16px] border-4 border-[#061e14] shadow-2xl rotate-6 p-3">
            <p className="font-black text-[10px] text-[#065F36]">GTSERVIZ</p>
            <div className="bg-[#e6f6ec] rounded-lg p-2 mt-3 text-[12px] font-black text-[#065F36]">N2,450.00</div>
          </div>
        </div>
      </section>

      {/* FOOTER - EXACT FROM YOUR PHOTO BUT GTSERVIZ BRANDED */}
      <footer className="bg-[#0b1f35] text-white/70 pt-14 pb-6">
        <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Brand + Apps */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="GTServiz" width={28} height={28} />
              </div>
              <span className="text-white font-black text-[18px] tracking-widest">GTSERVIZ</span>
            </div>
            <p className="text-[12px] mt-3 text-white/60 leading-relaxed">Your trusted digital service partner. Fast, affordable and secure.</p>
            <div className="flex gap-3 mt-5">
              <div className="px-3 py-2 bg-black border border-white/20 rounded-lg flex items-center gap-2">
                <span className="text-white text-[16px]">▶</span>
                <div className="leading-none"><p className="text-[8px] text-white/70">GET IT ON</p><p className="text-[11px] text-white font-bold">Google Play</p><p className="text-[8px] text-[#00A54F]">Coming Soon</p></div>
              </div>
              <div className="px-3 py-2 bg-black border border-white/20 rounded-lg flex items-center gap-2">
                <span className="text-white text-[16px]">●</span>
                <div className="leading-none"><p className="text-[8px] text-white/70">Download on the</p><p className="text-[11px] text-white font-bold">App Store</p><p className="text-[8px] text-[#00A54F]">Coming Soon</p></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-[13px] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-[12px]">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#" className="hover:text-white">API</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[13px] mb-4">Support</h4>
            <ul className="space-y-3 text-[12px]">
              <li><Link href="#" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[13px] mb-4">Follow Us</h4>
            <div className="flex gap-3 text-[14px]">
              <Link href="#" className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0b1f35]">◎</Link>
              <Link href="#" className="w-6 h-6 flex items-center justify-center hover:text-white">f</Link>
              <Link href="#" className="w-6 h-6 flex items-center justify-center hover:text-white">𝕏</Link>
              <Link href="#" className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0b1f35]">◎</Link>
            </div>
            <p className="text-[11px] mt-8 text-white/50">© 2026 GTSERVIZ. All rights reserved.</p>
            <p className="text-[11px] mt-1 text-white/50">07012222025 • support@gtserviz.com</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <Link href="https://wa.me/2347012222025?text=Hello%20GTServiz%20I%20need%20help" target="_blank" className="fixed bottom-6 right-6 z-[999] w-[56px] h-[56px] bg-[#25D366] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 transition">
        <span className="text-white text-[28px]">💬</span>
      </Link>
    </div>
  );
}
