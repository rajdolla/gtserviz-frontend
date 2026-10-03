"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f7fb] text-[#0f2440]">
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
       .pulse-ring::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #25D366;
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
       .phone-shadow {
          box-shadow: 0 25px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset;
        }
      `}</style>

      {/* HEADER */}
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
            <Link href="#">Pricing</Link><Link href="#">API</Link><Link href="#">Become a Reseller</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:flex text-white text-[13px] font-semibold">🔒 Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[12px] font-black hover:bg-[#009645]">Create Account</Link>
            <button onClick={()=>setOpen(!open)} className="lg:hidden text-white">☰</button>
          </div>
        </div>
      </header>

      {/* HERO WITH PHONE MOCKUP DASHBOARD */}
      <section className="bg-[#061e14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_at_70%_0%,rgba(0,165,79,0.25),transparent)]" />
        <div className="max-w-[1240px] mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00A54F]/50 text-[#00A54F] text-[10px] font-black tracking-widest">● FAST, CHEAP & SECURE</div>
            <h1 className="text-white text-[36px] md:text-[48px] font-black leading-[1.05] mt-5">Fast, Cheap & Secure<br/> Airtime, Data, Cable TV<br/> and <span className="text-[#00A54F]">More!</span></h1>
            <p className="text-white/60 text-[13px] mt-4 max-w-[420px]">Top up your phone, pay your bills, buy data and enjoy other digital services — all in one place. GTSERVIZ makes it easy, fast and affordable.</p>
            <div className="flex gap-3 mt-7">
              <Link href="/signup" className="px-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get Started Now →</Link>
              <Link href="#services" className="px-6 py-3 rounded-full border border-white/30 text-white text-[13px] font-bold">Explore Services</Link>
            </div>
          </div>

          {/* PHONE MOCKUP - Dashboard like SubPlug */}
          <div className="relative flex justify-center md:justify-end">
            {/* floating service chips */}
            <div className="absolute right-0 md:right-10 top-[5%] z-20 flex flex-col gap-3">
              <div className="px-4 py-2.5 bg-[#123a22]/90 backdrop-blur border border-[#00A54F]/30 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold shadow-lg">📱 Airtime</div>
              <div className="px-4 py-2.5 bg-[#123a22]/90 backdrop-blur border border-[#00A54F]/30 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-6 shadow-lg">📶 Data</div>
              <div className="px-4 py-2.5 bg-[#123a22]/90 backdrop-blur border border-[#00A54F]/30 rounded-xl flex items-center gap-2 text-white text-[11px] font-bold ml-3 shadow-lg">📺 Cable TV</div>
            </div>

            {/* Phone */}
            <div className="relative w-[280px] h-[540px] bg-[#0e0e0e] rounded-[36px] p-2 phone-shadow border-[6px] border-[#1a1a1a] rotate-3">
              <div className="w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col">
                {/* notch */}
                <div className="h-6 bg-white flex justify-center items-center"><div className="w-20 h-3 bg-black rounded-full"/></div>
                {/* header */}
                <div className="px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#00A54F] rounded-full flex items-center justify-center"><Image src="/logo.png" alt="logo" width={16} height={16} className="rounded-full"/></div><span className="font-black text-[11px] text-[#065F36]">GTSERVIZ</span></div>
                  <div className="w-6 h-6 bg-slate-100 rounded-full"/>
                </div>
                {/* balance card */}
                <div className="mx-3 mt-2 bg-gradient-to-br from-[#e6f6ec] to-[#f0fdf4] border border-[#b8e6c5] rounded-xl p-3">
                  <p className="text-[10px] text-[#065F36]/60 font-bold">WALLET BALANCE</p>
                  <p className="text-[20px] font-black text-[#065F36] mt-1">₦2,450.00</p>
                  <div className="flex gap-2 mt-3">
                    <div className="flex-1 bg-[#00A54F] text-white text-[10px] font-black py-2 rounded-full text-center">Fund</div>
                    <div className="flex-1 bg-white border text-[#065F36] text-[10px] font-black py-2 rounded-full text-center">History</div>
                  </div>
                </div>
                {/* services grid */}
                <div className="grid grid-cols-3 gap-2 p-3">
                  {[
                    {l:"Airtime", e:"📱"}, {l:"Data", e:"📶"}, {l:"TV", e:"📺"},
                    {l:"Electric", e:"💡"}, {l:"Exam", e:"🎓"}, {l:"To Cash", e:"💸"},
                  ].map((s,i)=>(
                    <div key={i} className="bg-slate-50 rounded-xl p-2 text-center border border-slate-100">
                      <div className="text-[16px]">{s.e}</div><p className="text-[8px] font-black mt-1 text-slate-700">{s.l}</p>
                    </div>
                  ))}
                </div>
                {/* transactions */}
                <div className="px-3 mt-1">
                  <p className="text-[10px] font-black">Recent Transactions</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between items-center text-[10px]"><span>MTN 1GB</span><span className="font-black text-[#00A54F]">-₦275</span></div>
                    <div className="flex justify-between items-center text-[10px]"><span>Airtel Airtime</span><span className="font-black text-[#00A54F]">-₦1,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section id="services" className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-center text-[#00A54F] text-[11px] font-black tracking-widest">POPULAR SERVICES</p>
        <h2 className="text-center text-[22px] font-black mt-2">Quick and easy access to your favorites</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {["Airtime","Data","Cable TV","Airtime to Cash","Electricity","Exam Pins","Bulk SMS","Data Pins & Vouchers"].map((t,i)=>(
            <div key={i} className="bg-white border rounded-xl p-5"><div className="w-9 h-9 rounded-lg bg-[#e6f6ec] text-[#00A54F] flex items-center justify-center font-black">•</div><p className="font-black text-[13px] mt-3">{t}</p><Link href="/signup" className="inline-flex mt-3 text-[#00A54F] text-[11px] font-black">Buy Now →</Link></div>
          ))}
        </div>
      </section>

      {/* FOOTER - From your photo */}
      <footer className="bg-[#0b1f35] text-white/70 pt-14 pb-6">
        <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5"><div className="w-7 h-7 bg-white rounded-full flex items-center justify-center overflow-hidden"><Image src="/logo.png" alt="logo" width={28} height={28}/></div><span className="text-white font-black text-[18px]">GTSERVIZ</span></div>
            <p className="text-[12px] mt-3 text-white/60">Your trusted digital service partner. Fast, affordable and secure.</p>
            <div className="flex gap-3 mt-5"><div className="px-3 py-2 bg-black border border-white/20 rounded-lg flex gap-2 items-center"><span>▶</span><div className="leading-none"><p className="text-[8px]">GET IT ON</p><p className="text-[11px] text-white font-bold">Google Play</p><p className="text-[8px] text-[#00A54F]">Coming Soon</p></div></div><div className="px-3 py-2 bg-black border border-white/20 rounded-lg flex gap-2 items-center"><span>●</span><div className="leading-none"><p className="text-[8px]">Download on the</p><p className="text-[11px] text-white font-bold">App Store</p><p className="text-[8px] text-[#00A54F]">Coming Soon</p></div></div></div>
          </div>
          <div><h4 className="text-white font-bold text-[13px] mb-4">Quick Links</h4><ul className="space-y-3 text-[12px]"><li>Home</li><li>Services</li><li>API</li><li>Blog</li></ul></div>
          <div><h4 className="text-white font-bold text-[13px] mb-4">Support</h4><ul className="space-y-3 text-[12px]"><li>Help Center</li><li>Contact Us</li><li>Terms & Conditions</li><li>Privacy Policy</li></ul></div>
          <div><h4 className="text-white font-bold text-[13px] mb-4">Follow Us</h4><div className="flex gap-3"><span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">◎</span><span>f</span><span>𝕏</span><span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">◎</span></div><p className="text-[11px] mt-8 text-white/50">© 2026 GTSERVIZ. All rights reserved.</p></div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP - REAL SVG + PULSE */}
      <Link href="https://wa.me/2347012222025?text=Hello%20GTServiz%20I%20need%20help" target="_blank" className="fixed bottom-6 right-6 z-[999] w-[60px] h-[60px] flex items-center justify-center">
        <div className="absolute w-full h-full pulse-ring rounded-full"></div>
        <div className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition">
          <svg viewBox="0 0 32 32" className="w-[32px] h-[32px] fill-white">
            <path d="M16.001 2.993c-7.18 0-13 5.82-13 13 0 2.293.6 4.536 1.738 6.512L2.993 29.007l6.693-1.756A12.93 12.93 0 0016 28.993c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.39a10.39 10.39 0 01-5.3-1.454l-.38-.226-3.97 1.042 1.06-3.87-.248-.397A10.35 10.35 0 015.61 15.993c0-5.74 4.67-10.41 10.39-10.41 5.72 0 10.39 4.67 10.39 10.41 0 5.74-4.67 10.39-10.39 10.39zm5.7-7.78c-.312-.156-1.847-.91-2.133-1.015-.286-.105-.494-.156-.702.156-.208.312-.807 1.015-.99 1.223-.182.208-.365.234-.677.078-.312-.156-1.317-.485-2.51-1.548-.928-.828-1.554-1.85-1.736-2.162-.182-.312-.02-.48.137-.636.14-.14.312-.365.468-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.702-1.69-.962-2.314-.253-.61-.51-.527-.702-.537l-.598-.01c-.208 0-.546.078-.832.39-.286.312-1.092 1.067-1.092 2.603s1.118 3.02 1.274 3.228c.156.208 2.2 3.36 5.33 4.71.745.322 1.326.514 1.78.658.748.238 1.428.204 1.966.124.6-.09 1.847-.755 2.107-1.485.26-.73.26-1.356.182-1.485-.078-.13-.286-.208-.598-.364z"/>
          </svg>
        </div>
      </Link>
    </div>
  );
}
