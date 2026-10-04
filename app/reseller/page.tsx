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
      </header>

      <section className="pt-[100px] bg-[#061e14] text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex px-3 py-1 rounded-full bg-[#00A54F]/15 border border-[#00A54F]/30 text-[#00ff88] text-[10px] font-black">EARN DAILY • 0% SETUP FEE</div>
            <h1 className="text-[38px] md:text-[52px] font-black leading-[1.05] mt-4">Become a <span className="text-[#00ff88]">GTSERVIZ</span><br/>Reseller Today</h1>
            <p className="text-white/60 text-[14px] mt-4 max-w-[500px]">Launch your own VTU business with our reseller platform.</p>
            <div className="flex gap-3 mt-6">
              <Link href="/signup" className="px-7 py-3.5 rounded-full bg-[#00A54F] text-white font-black text-[13px]">Create Reseller Account →</Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-[#061e14]">
            <h3 className="font-black">Why Resellers Choose Us</h3>
            <p className="text-[12px] mt-3">✔ Your own website + app ✔ Set your prices ✔ Instant payouts</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
