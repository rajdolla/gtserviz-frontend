"use client";
import Link from "next/link";
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f2f7fb] pt-[80px]">
      <div className="max-w-[1240px] mx-auto px-5 text-center">
        <p className="text-[#00A54F] font-black text-[11px] tracking-widest">AFFORDABLE PRICING</p>
        <h1 className="text-[32px] font-black mt-2">Cheapest Rates in Nigeria</h1>
        <div className="grid md:grid-cols-3 gap-5 mt-10 max-w-[1000px] mx-auto text-left">
          <div className="bg-white border rounded-2xl p-6"><h3 className="font-black">MTN 1GB</h3><p className="text-[28px] font-black text-[#065F36]">₦275</p><p className="text-[12px] text-slate-500 mt-2">✓ 30 Days ✓ Instant</p><Link href="/signup" className="block mt-4 py-3 rounded-full bg-[#e6f6ec] text-center font-black text-[12px]">Buy Now</Link></div>
          <div className="bg-[#061e14] text-white rounded-2xl p-6 scale-105"><h3 className="font-black">Airtel 1GB</h3><p className="text-[28px] font-black text-[#00FF88]">₦280</p><p className="text-[12px] text-white/60 mt-2">✓ 30 Days ✓ Instant</p><Link href="/signup" className="block mt-4 py-3 rounded-full bg-[#00A54F] text-center font-black text-[12px]">Buy Now</Link></div>
          <div className="bg-white border rounded-2xl p-6"><h3 className="font-black">Glo 1GB</h3><p className="text-[28px] font-black text-[#065F36]">₦270</p><p className="text-[12px] text-slate-500 mt-2">✓ 30 Days ✓ Instant</p><Link href="/signup" className="block mt-4 py-3 rounded-full bg-[#e6f6ec] text-center font-black text-[12px]">Buy Now</Link></div>
        </div>
        <Link href="/" className="inline-block mt-10 text-[#00A54F] font-black">← Back Home</Link>
      </div>
    </div>
  );
}
