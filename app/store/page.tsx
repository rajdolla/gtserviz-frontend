"use client";
import Link from "next/link";
export default function StorePage() {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <div className="max-w-[1240px] mx-auto px-5">
        <p className="text-[#00A54F] font-black text-[11px]">GTSERVIZ STORE</p>
        <h1 className="text-[28px] font-black">Digital Marketplace</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[{t:"MTN 1GB SME",p:"₦275"},{t:"DSTV Compact",p:"₦10,500"},{t:"JAMB PIN",p:"₦4,200"},{t:"Electric Token",p:"From ₦1k"}].map((i,k)=><div key={k} className="border rounded-xl p-4 bg-[#f8faf8]"><div className="h-24 bg-white border rounded-lg flex items-center justify-center">📦</div><p className="font-black text-[13px] mt-3">{i.t}</p><p className="font-black text-[#065F36] mt-2">{i.p}</p></div>)}
        </div>
        <Link href="/" className="inline-block mt-10 text-[#00A54F] font-black">← Back Home</Link>
      </div>
    </div>
  );
}
