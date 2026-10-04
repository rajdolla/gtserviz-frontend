"use client";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
export default function BlogPage(){
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar active="Blog" />
      <section className="pt-[120px] max-w-[1280px] mx-auto px-6"><h1 className="text-[36px] font-black">Blog</h1><div className="grid md:grid-cols-3 gap-6 mt-8">{[1,2,3].map(i=><div key={i} className="bg-white border rounded-2xl p-6"><h3 className="font-bold text-[14px]">How to Start VTU Business in 2026</h3><p className="text-[11px] text-slate-400 mt-3">Sep 2026 • 5 min read</p></div>)}</div></section>
      <div className="mt-16"><Footer /></div>
    </div>
  );
}
     
