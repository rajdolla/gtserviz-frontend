"use client";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function PricingPage(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar active="Pricing" />
      <section className="pt-[120px] pb-16 bg-[#061e14] text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-[#00ff88] text-[11px] font-black tracking-widest">PRICING</p>
          <h1 className="text-[42px] font-black text-white mt-3 leading-[1.05]">Simple, Transparent<br/>Pricing for Everyone</h1>
          <p className="text-white/60 text-[14px] mt-4 max-w-[500px] mx-auto">No hidden fees. Cheapest VTU rates in Nigeria. Earn as you sell.</p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-[24px] p-8">
            <h3 className="font-black text-[16px]">Regular User</h3>
            <p className="text-slate-500 text-[13px] mt-2">For personal use</p>
            <p className="text-[36px] font-black mt-6">Free</p>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-600">
              <li>✓ 2% Airtime discount</li>
              <li>✓ Cheap data bundles</li>
              <li>✓ Instant delivery</li>
              <li>✓ 24/7 support</li>
            </ul>
            <Link href="/signup" className="mt-8 block text-center py-3 rounded-full border border-[#061e14] font-bold text-[13px]">Get Started Free</Link>
          </div>

          <div className="border-2 border-[#00A54F] rounded-[24px] p-8 bg-[#f6fdf8] relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#00A54F] text-white text-[10px] font-black">MOST POPULAR</span>
            <h3 className="font-black text-[16px]">Pro Reseller</h3>
            <p className="text-slate-500 text-[13px] mt-2">For VTU business owners</p>
            <p className="text-[36px] font-black mt-6">₦10,000</p>
            <p className="text-[11px] text-slate-400">one-time fee</p>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-600">
              <li>✓ Own VTU website + app</li>
              <li>✓ Set your own prices</li>
              <li>✓ API access</li>
              <li>✓ Up to 20% profit margin</li>
              <li>✓ Automated wallet system</li>
            </ul>
            <Link href="/signup" className="mt-8 block text-center py-3 rounded-full bg-[#00A54F] text-white font-bold text-[13px]">Become a Reseller →</Link>
          </div>

          <div className="border rounded-[24px] p-8">
            <h3 className="font-black text-[16px]">Enterprise</h3>
            <p className="text-slate-500 text-[13px] mt-2">For large businesses</p>
            <p className="text-[36px] font-black mt-6">Custom</p>
            <ul className="mt-6 space-y-3 text-[13px] text-slate-600">
              <li>✓ Everything in Pro</li>
              <li>✓ White-label solution</li>
              <li>✓ Dedicated support</li>
              <li>✓ Custom integrations</li>
            </ul>
            <Link href="/contact" className="mt-8 block text-center py-3 rounded-full border border-[#061e14] font-bold text-[13px]">Contact Sales</Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp */}
      <a href="https://wa.me/2349012345678" target="_blank" className="fixed bottom-6 right-6 z-[999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)]">💬</a>
    </div>
  );
}
