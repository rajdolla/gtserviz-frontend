"use client";
import "./landing.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#00A54F] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white border shadow-sm">
              <Image src="/logo.png" alt="GTServiz" width={36} height={36} className="object-cover"/>
            </div>
            <span className="font-black text-[20px] tracking-tight text-[#065F36]">GTServiz</span>
          </Link>

          <nav className="hidden md:flex gap-8 text-[14px] font-bold">
            <Link href="#">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#agent" className="text-[#E31E24]">Become a Reseller</Link>
          </nav>

          <div className="hidden md:flex gap-2.5">
            <Link href="/login" className="px-6 py-2.5 rounded-full border border-zinc-200 font-bold text-sm hover:bg-zinc-50">Login</Link>
            <Link href="/signup" className="px-6 py-2.5 rounded-full bg-[#00A54F] text-white font-bold text-sm shadow-lg shadow-green-600/20 hover:bg-[#065F36] transition">Get Started</Link>
          </div>

          <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>☰</button>
        </div>
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4 font-bold">
            <Link href="#">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#agent" className="text-[#E31E24]">Become a Reseller</Link>
            <Link href="/login" className="mt-2 border rounded-full py-3 text-center">Login</Link>
            <Link href="/signup" className="bg-[#00A54F] text-white rounded-full py-3 text-center">Get Started</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="gt-hero">
        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="gt-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest">
              <span className="w-2 h-2 bg-[#E31E24] rounded-full animate-pulse" /> TRUSTED BY 12,000+ RESELLERS
            </div>
            <h1 className="text-[44px] md:text-[64px] font-[800] leading-[0.95] mt-6 tracking-tight">
              Sell data.<br/>Pay bills.<br/><span className="text-[#00A54F]">Earn daily.</span>
            </h1>
            <p className="text-zinc-500 text-[17px] mt-5 max-w-[440px] leading-relaxed">
              Join Nigerians earning from MTN, Glo, Airtel, 9mobile, DSTV, GOTV & electricity from one fast dashboard.
            </p>
            <div className="flex gap-3 mt-8">
              <Link href="/signup" className="gt-cta px-8 py-4 rounded-full text-white font-bold">Create Free Account →</Link>
              <Link href="#services" className="px-8 py-4 rounded-full bg-zinc-100 font-bold hover:bg-zinc-200 transition">See Pricing</Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[13px] font-medium text-zinc-500">
              <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px]">✓</span> No setup fee</span>
              <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px]">✓</span> Instant funding</span>
            </div>
          </div>

          <div id="services" className="grid grid-cols-2 gap-4">
            <div className="gt-card p-6"><div className="gt-icon gt-green">📱</div><h4 className="font-bold mt-5">Airtime</h4><p className="text-sm text-zinc-500 mt-1">3% discount</p></div>
            <div className="gt-card p-6 mt-6"><div className="gt-icon gt-dark">📶</div><h4 className="font-bold mt-5">Data</h4><p className="text-sm text-zinc-500 mt-1">From ₦275/GB</p></div>
            <div className="gt-card p-6"><div className="gt-icon gt-black">📺</div><h4 className="font-bold mt-5">TV</h4><p className="text-sm text-zinc-500 mt-1">DSTV, GOTV</p></div>
            <div className="gt-card p-6 mt-6"><div className="gt-icon gt-red">💡</div><h4 className="font-bold mt-5">Power</h4><p className="text-sm text-zinc-500 mt-1">All DisCos</p></div>
          </div>
        </div>
        <div className="h-[6px] w-full bg-[#E31E24]" />
      </section>

      {/* FOOTER - AimToGet Style */}
      <footer className="bg-[#0a0a0a] text-zinc-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/logo.png" alt="GT" width={40} height={40}/>
                </div>
                <span className="text-white font-black text-[20px]">GTServiz</span>
              </div>
              <p className="text-sm text-zinc-400 mt-4 leading-relaxed max-w-[300px]">
                Fastest and easiest way to buy airtime, data, pay TV & electricity bills. The all-in-one payments app for resellers.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A54F] transition">𝕏</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A54F] transition">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A54F] transition">IG</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link href="#" className="hover:text-white">Airtime VTU</Link></li>
                <li><Link href="#" className="hover:text-white">Data Bundles</Link></li>
                <li><Link href="#" className="hover:text-white">Cable TV</Link></li>
                <li><Link href="#" className="hover:text-white">Electricity Bills</Link></li>
                <li><Link href="#" className="hover:text-white">Education Pins</Link></li>
                <li><Link href="#" className="hover:text-white">Airtime to Cash</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Become an Agent</Link></li>
                <li><Link href="#" className="hover:text-white">Data Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">API Docs</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                <li className="pt-2 text-white font-bold text-[15px]">📞 07012222025</li>
                <li className="text-[#00A54F] font-bold">support@gtserviz.com</li>
                <li className="text-xs">Mon - Sun, 8am - 10pm</li>
                <li className="pt-2 flex items-center gap-2">🌐 www.gtserviz.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-[12px] text-zinc-500">
            <p>© 2026 GTServiz Technology Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Fees</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
