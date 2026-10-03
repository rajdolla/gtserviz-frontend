"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ApiPage(){
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar active="API" />
      <section className="relative bg-[#061e14] pt-[72px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <p className="text-[#00ff88] text-[10px] font-black tracking-widest">FAST • SECURE • RELIABLE</p>
            <h1 className="text-white text-[38px] md:text-[48px] font-black leading-[1.05] mt-3">Power Your Business with<br/><span className="text-[#00ff88]">GTSERVIZ API</span></h1>
            <p className="text-white/60 text-[13.5px] mt-4 max-w-[520px] leading-[1.7]">Integrate VTU and digital services into your platform, app, or website. Secure, reliable, and high-performing APIs for resellers across Nigeria.</p>
            <div className="flex gap-3 mt-7">
              <Link href="/signup" className="px-6 py-3 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Get API Access →</Link>
              <Link href="#docs" className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[13px]">View Documentation</Link>
            </div>
          </div>
          <div className="hidden lg:block"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700" alt="api" className="rounded-[20px] border border-white/10 h-[380px] w-full object-cover" /></div>
        </div>
      </section>
      <section id="docs" className="max-w-[1280px] mx-auto px-6 py-12 grid lg:grid-cols-[1fr_1.6fr] gap-8">
        <div><h2 className="font-black text-[20px] text-[#061e14]">Start Selling Digital Services with Our API</h2><div className="mt-4 bg-[#0a1e14] rounded-xl p-4"><pre className="text-[10px] text-[#7cffb0]">{`curl -X POST https://api.gtserviz.com/v1/data/purchase \\\n-H "Authorization: Bearer YOUR_API_KEY" \\\n-d '{"network":"MTN","phone":"08012345678"}'`}</pre></div></div>
        <div className="bg-white rounded-xl border p-4"><h4 className="font-black text-[12px]">API Endpoints Include</h4><div className="mt-3 space-y-2 text-[11px] text-slate-600"><p>• Airtime Purchase</p><p>• Data Purchase</p><p>• Cable TV</p><p>• Electricity</p><p>• Transaction Status</p><p>• Wallet Balance</p></div></div>
      </section>
    </div>
  );
}
