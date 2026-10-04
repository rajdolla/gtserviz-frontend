"use client";
import Link from "next/link";
   import Footer from "../../components/Footer";
   import Navbar from "../../components/Navbar";
export default function ResellerPage(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar active="Become a Reseller" />
      <section className="pt-[120px] bg-[#061e14] py-16"><div className="max-w-[1280px] mx-auto px-6"><h1 className="text-[44px] font-black text-white leading-[1.05]">Become a <span className="text-[#00ff88]">Reseller</span></h1><p className="text-white/60 mt-4">Own VTU website + API</p><Link href="/signup" className="inline-block mt-6 px-7 py-3 rounded-full bg-[#00A54F] text-white font-black">Create Reseller Account →</Link></div></section>
      <Footer />
    </div>
  );
}
     
