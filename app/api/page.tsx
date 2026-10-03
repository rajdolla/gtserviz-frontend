"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ApiPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-[100] bg-[#061e14] border-b border-white/5 h-[68px]">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white rounded-full overflow-hidden flex items-center justify-center"><Image src="/logo.png" alt="GT" width={36} height={36} /></div>
            <span className="text-white font-black tracking-[0.15em] text-[15px]">GTSERVIZ</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] text-white/60 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/#services" className="hover:text-white">Services</Link>
            <Link href="/#pricing" className="hover:text-white">Pricing</Link>
            <Link href="/#store" className="hover:text-white">Store</Link>
            <Link href="/#blog" className="hover:text-white">Blog</Link>
            <Link href="/api" className="text-[#00ff88] font-bold border-b-2 border-[#00ff88] pb-1">API</Link>
            <Link href="#" className="hover:text-white">Become a Reseller</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-white/70 text-[13px]">🔒 Login</Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Create Account</Link>
          </div>
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white">{open?"✕":"☰"}</button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-[#061e14] pt-[68px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center relative">
          <div>
            <p className="text-[#00ff88] text-[10px] font-black tracking-widest">FAST • SECURE • RELIABLE</p>
            <h1 className="text-white text-[32px] md:text-[48px] font-black leading-[1.05] mt-3">Power Your Business with<br/><span className="text-[#00ff88]">GTSERVIZ API</span></h1>
            <p className="text-white/60 text-[13.5px] leading-[1.7] mt-4 max-w-[520px]">Integrate our VTU and digital services into your platform, app, or website. Get secure, reliable, and high-performing APIs designed for resellers, developers and businesses across Nigeria.</p>
            <div className="flex flex-wrap gap-4 mt-5 text-[11px] text-white/80">
              <span className="flex items-center gap-1.5"><span className="w-4 h-4 bg-[#00A54F] rounded-full flex items-center justify-center text-[8px] text-white">✓</span> Airtime & Data</span>
              <span className="flex items-center gap-1.5"><span className="w-4 h-4 bg-[#00A54F] rounded-full flex items-center justify-center text-[8px] text-white">✓</span> Cable TV</span>
              <span className="flex items-center gap-1.5"><span className="w-4 h-4 bg-[#00A54F] rounded-full flex items-center justify-center text-[8px] text-white">✓</span> Electricity</span>
              <span className="flex items-center gap-1.5"><span className="w-4 h-4 bg-[#00A54F] rounded-full flex items-center justify-center text-[8px] text-white">✓</span> More Services</span>
            </div>
            <div className="flex gap-3 mt-7">
              <Link href="/signup" className="px-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get API Access →</Link>
              <Link href="#docs" className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[13px]">📄 View Documentation</Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="rounded-[20px] overflow-hidden border border-white/10 h-[380px] bg-[#0a2e1a]">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700" alt="api" className="w-full h-full object-cover opacity-90" />
            </div>
            <div className="absolute -right-3 top-4 flex flex-col gap-2.5">
              <div className="bg-[#102a1e]/90 backdrop-blur border border-[#00A54F]/40 rounded-full pl-2 pr-4 py-2 flex items-center gap-2 text-white text-[11px] font-bold"><span className="w-7 h-7 bg-[#00A54F] rounded-full flex items-center justify-center">📱</span>Airtime</div>
              <div className="bg-[#102a1e]/90 backdrop-blur border border-white/10 rounded-full pl-2 pr-4 py-2 flex items-center gap-2 text-white text-[11px] font-bold"><span className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">📶</span>Data</div>
              <div className="bg-[#102a1e]/90 backdrop-blur border border-white/10 rounded-full pl-2 pr-4 py-2 flex items-center gap-2 text-white text-[11px] font-bold"><span className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center">📺</span>Cable TV</div>
              <div className="bg-[#102a1e]/90 backdrop-blur border border-white/10 rounded-full pl-2 pr-4 py-2 flex items-center gap-2 text-white text-[11px] font-bold"><span className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">⚡</span>Electricity</div>
              <div className="bg-[#102a1e]/90 backdrop-blur border border-white/10 rounded-full pl-2 pr-4 py-2 flex items-center gap-2 text-white text-[11px] font-bold"><span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">•••</span>More...</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-[#00A54F] text-[10px] font-black tracking-widest">WHY CHOOSE GTSERVIZ API?</p>
          <div className="flex flex-col lg:flex-row justify-between gap-6 mt-2">
            <h2 className="text-[#061e14] text-[22px] font-black leading-[1.2]">Built for Resellers, Designed<br/>for Growth</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1 lg:ml-10">
              {[
                {t:"Secure Integration", d:"Industry-standard security and encrypted endpoints.", icon:"🛡️"},
                {t:"High Uptime", d:"Reliable infrastructure with 99.9% availability.", icon:"⚡"},
                {t:"Developer Friendly", d:"Clean documentation and simple integration process.", icon:"</>"},
                {t:"Dedicated Support", d:"Get help when you need it from our expert team.", icon:"🎧"},
              ].map((f,i)=>(
                <div key={i}><div className="w-8 h-8 bg-[#e6f6ec] rounded-full flex items-center justify-center text-[14px]">{f.icon}</div><h4 className="font-black text-[12px] mt-2 text-[#061e14]">{f.t}</h4><p className="text-[11px] text-slate-500 mt-1 leading-[1.4]">{f.d}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED + CODE */}
      <section id="docs" className="bg-[#f8fafc] py-12">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1fr_1.6fr] gap-8 items-start">
          <div>
            <p className="text-[#00A54F] text-[10px] font-black">GET STARTED TODAY</p>
            <h2 className="text-[22px] font-black text-[#061e14] mt-1 leading-[1.2]">Start Selling Digital Services<br/>with Our API</h2>
            <p className="text-[12px] text-slate-500 mt-3 leading-[1.6]">Whether you're a developer, reseller or business owner, GTSERVIZ API makes it easy to offer airtime, data, cable TV, electricity and more — all from one powerful platform.</p>
            <div className="mt-4 space-y-2 text-[11.5px]">
              <p className="flex gap-2"><span className="text-[#00A54F]">✔</span> Multiple service endpoints</p>
              <p className="flex gap-2"><span className="text-[#00A54F]">✔</span> Real-time transaction status</p>
              <p className="flex gap-2"><span className="text-[#00A54F]">✔</span> Detailed documentation</p>
              <p className="flex gap-2"><span className="text-[#00A54F]">✔</span> Sandbox and production environments</p>
            </div>
            <Link href="/signup" className="inline-block mt-5 px-5 py-2.5 rounded-full bg-[#00A54F] text-white font-black text-[11px]">Apply for API Access →</Link>
          </div>

          <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-4">
            {/* Code Block */}
            <div className="bg-[#0a1e14] rounded-xl border border-[#00A54F]/20 p-4 overflow-hidden">
              <div className="flex gap-2 mb-3 text-[10px]">
                <span className="px-2 py-1 rounded bg-[#00A54F] text-white font-bold">POST</span>
                <span className="text-white/50">/api/v1/data/purchase</span>
                <span className="ml-auto flex gap-1"><span className="px-2 py-0.5 rounded bg-white/10 text-white/60">cURL</span><span className="px-2 py-0.5 rounded bg-white/5 text-white/40">JavaScript</span></span>
              </div>
              <pre className="text-[10px] text-[#7cffb0] leading-[1.6] overflow-x-auto">
{`curl -X POST https://api.gtserviz.com/v1/data/purchase \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "network": "MTN",
  "plan_id": "MTN-1GB-10",
  "phone": "08012345678"
}'`}
              </pre>
              <button className="mt-3 ml-auto block px-3 py-1.5 rounded bg-[#00A54F] text-white text-[10px] font-bold">Copy Code</button>
            </div>

            {/* Endpoints */}
            <div className="bg-white rounded-xl border p-4">
              <h4 className="font-black text-[12px] text-[#061e14]">API Endpoints Include</h4>
              <div className="mt-3 space-y-2.5 text-[11px] text-slate-600">
                <p>• Airtime Purchase</p><p>• Data Purchase</p><p>• Cable TV Subscription</p><p>• Electricity Bill Payment</p><p>• Verify Customer (Cable/Elec)</p><p>• Transaction Status</p><p>• Wallet Balance</p><p>• And More...</p>
              </div>
              <Link href="#" className="mt-4 inline-block text-[11px] text-[#00A54F] font-bold">View Full Documentation →</Link>

              <div className="mt-6 bg-[#061e14] rounded-xl p-4 text-white">
                <p className="text-[10px] text-white/60">Trusted by Thousands</p>
                <p className="font-black text-[13px] mt-1">Join a growing community of resellers</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex -space-x-2"><div className="w-6 h-6 rounded-full bg-white/20 border border-[#061e14]"/><div className="w-6 h-6 rounded-full bg-white/30 border border-[#061e14]"/><div className="w-6 h-6 rounded-full bg-white/40 border border-[#061e14]"/></div>
                  <div className="text-[10px]"><p className="font-black text-[#00ff88]">50K+ Happy Users</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 mt-8">
          <div className="bg-[#061e14] rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-white text-[12px]"><span className="text-white/60">Mobile Apps Coming Soon</span><span className="px-3 py-1.5 bg-white text-black rounded flex items-center gap-1 font-bold text-[10px]"> App Store</span><span className="px-3 py-1.5 bg-white/10 border border-white/20 text-white rounded font-bold text-[10px]">▶ Google Play</span></div>
            <div className="text-white/40 text-[11px]">© 2026 GTSERVIZ • api.gtserviz.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}
