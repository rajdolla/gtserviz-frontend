"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* HEADER / MENU */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-black"><span className="text-blue-600">GT</span>serviz</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <Link href="#" className="hover:text-blue-600">Home</Link>
            <div className="relative group">
              <button className="hover:text-blue-600 flex items-center gap-1">Services ▾</button>
              <div className="absolute hidden group-hover:block bg-white border shadow-xl rounded-2xl p-3 w-56 top-8 -left-10">
                <Link href="#services" className="block p-2 hover:bg-zinc-50 rounded-lg">📱 Buy Airtime</Link>
                <Link href="#services" className="block p-2 hover:bg-zinc-50 rounded-lg">📶 Buy Data</Link>
                <Link href="#services" className="block p-2 hover:bg-zinc-50 rounded-lg">📺 Cable TV</Link>
                <Link href="#services" className="block p-2 hover:bg-zinc-50 rounded-lg">💡 Electricity</Link>
                <Link href="#services" className="block p-2 hover:bg-zinc-50 rounded-lg">🎓 Education Pins</Link>
              </div>
            </div>
            <Link href="#pricing" className="hover:text-blue-600">Pricing</Link>
            <Link href="#agent" className="hover:text-blue-600">Become an Agent</Link>
            <Link href="#faq" className="hover:text-blue-600">Support</Link>
          </nav>

          <div className="hidden md:flex gap-3">
            <Link href="/login" className="px-5 py-2.5 rounded-full border font-semibold">Login</Link>
            <Link href="/signup" className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold">Get Started</Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4">
            <Link href="#">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#agent">Become an Agent</Link>
            <Link href="#faq">Support</Link>
            <Link href="/login" className="mt-4 px-6 py-3 border rounded-full text-center">Login</Link>
            <Link href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-full text-center">Get Started</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold">NIGERIA'S #1 VTU PLATFORM</span>
          <h2 className="text-5xl md:text-6xl font-black mt-6 leading-[1.1]">Everything<br/>Data & Bills,<br/><span className="text-blue-600">In One Tap.</span></h2>
          <p className="text-zinc-500 mt-5 text-lg">Buy airtime, data, pay DSTV, electricity in 5 seconds. Cheapest, fastest, automated.</p>
          <div className="flex gap-3 mt-8">
            <Link href="/signup" className="px-8 py-4 bg-black text-white rounded-full font-bold">Start Buying →</Link>
            <div className="flex items-center gap-2 text-sm text-zinc-500"><span className="text-green-600">●</span> 2,341 users online</div>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-[32px] p-4 shadow-2xl">
          <div className="bg-white rounded-[24px] p-5">
            <p className="text-xs text-zinc-400">Quick Buy</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {["Airtime","Data","Cable","Electric","WAEC","Smile"].map(i => (
                <div key={i} className="bg-zinc-50 rounded-xl p-4 text-center text-sm font-semibold">{i}</div>
              ))}
            </div>
            <div className="mt-6 bg-blue-600 text-white rounded-xl p-4 text-center font-bold">Pay ₦3,000</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-zinc-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center">All Your Bills In One Place</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              {t:"Airtime VTU", d:"Instant top-up"}, {t:"Mobile Data", d:"MTN, Glo, Airtel"}, {t:"Cable TV", d:"DSTV, GOTV"}, {t:"Electricity", d:"All DisCos"},
              {t:"Education", d:"WAEC, JAMB"}, {t:"Airtime to Cash", d:"2% fee"}, {t:"Bulk SMS", d:"Business"}, {t:"Data Card", d:"Print pins"}
            ].map(s => (
              <div key={s.t} className="bg-white p-6 rounded-2xl border hover:shadow-lg transition">
                <h4 className="font-bold">{s.t}</h4><p className="text-sm text-zinc-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agent" className="py-16 px-6 text-center bg-black text-white">
        <h3 className="text-3xl font-bold">Become an Agent & Earn Daily</h3>
        <p className="text-zinc-400 mt-3">Resell our services and earn commission on every sale</p>
        <Link href="/signup" className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-full font-bold">Join as Agent</Link>
      </section>

      <footer className="py-10 text-center text-zinc-400 text-sm">© 2026 GTserviz • Built for Nigeria</footer>
    </div>
  );
}
