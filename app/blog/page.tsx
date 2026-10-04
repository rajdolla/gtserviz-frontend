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
      </header>

      <section className="pt-[120px] pb-10 max-w-[1280px] mx-auto px-6">
        <p className="text-[#00A54F] text-[10px] font-black tracking-widest">GTSERVIZ INSIGHTS</p>
        <h1 className="text-[36px] font-black text-[#061e14] leading-[1.1] mt-2">Guides, Updates & VTU<br/>Business Tips</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((p,i)=>(
            <div key={i} className="bg-white rounded-2xl border p-5">
              <span className="text-[10px] font-black px-2 py-1 rounded-full bg-[#e6f6ec] text-[#00A54F]">{p.cat}</span>
              <h3 className="font-bold text-[14px] text-[#061e14] mt-3">{p.title}</h3>
              <p className="text-[11px] text-slate-400 mt-3">{p.date} • {p.read}</p>
              <Link href="#" className="inline-block mt-4 text-[11px] font-bold text-[#00A54F]">Read Article →</Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
