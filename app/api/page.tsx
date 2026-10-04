"use client";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
export default function ApiPage(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar active="API" />
      <section className="pt-[120px] bg-[#061e14] pb-16"><div className="max-w-[1280px] mx-auto px-6"><h1 className="text-[40px] font-black text-white">API Docs</h1><p className="text-white/60 mt-3">Integrate VTU in 10 minutes</p><Link href="/signup" className="inline-block mt-6 px-6 py-3 rounded-full bg-[#00A54F] text-white font-black">Get API Key →</Link></div></section>
      <div className="max-w-[1280px] mx-auto px-6 py-10"><div className="bg-[#0f172a] rounded-2xl p-6 text-white font-mono text-[12px]">POST /api/v1/data {`{ "network": "MTN", "phone": "080...", "plan": "1GB" }`}</div></div>
      <Footer />
    </div>
  );
}
