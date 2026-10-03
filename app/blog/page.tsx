"use client";
import Link from "next/link";
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f2f7fb] pt-[80px]">
      <div className="max-w-[1240px] mx-auto px-5">
        <p className="text-[#00A54F] font-black text-[11px]">GTSERVIZ BLOG</p>
        <h1 className="text-[28px] font-black">Tips, News & Updates</h1>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[{t:"How to start VTU business in 2026"},{t:"Cheapest data plans"},{t:"GTServiz API guide"}].map((b,i)=><div key={i} className="bg-white border rounded-xl overflow-hidden"><div className="h-36 bg-[#e6f6ec] flex items-center justify-center text-[32px]">📝</div><div className="p-5"><h4 className="font-black">{b.t}</h4><Link href="#" className="text-[#00A54F] text-[11px] font-black mt-3 inline-block">Read More →</Link></div></div>)}
        </div>
      </div>
    </div>
  );
}
