"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-3.5">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="GTServiz"
              width={40}
              height={40}
              className="rounded-full bg-white ring-1 ring-zinc-100 group-hover:ring-[#00A54F]/40 transition"
            />
            <span className="text-[19px] font-black tracking-tight text-[#065F36]">
              GTServiz
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-semibold text-zinc-700">
            <Link href="/" className="hover:text-[#00A54F] transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#00A54F] transition-colors">
                Services
                <span className="text-[10px] opacity-70">▾</span>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50 rounded-2xl p-1.5 w-56">
                  <Link
                    href="#services"
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#f6fdf8] text-zinc-800 transition"
                  >
                    <span>📱</span> Airtime & Data
                  </Link>
                  <Link
                    href="#services"
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#f6fdf8] text-zinc-800 transition"
                  >
                    <span>📺</span> TV Subscription
                  </Link>
                  <Link
                    href="#services"
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#f6fdf8] text-zinc-800 transition"
                  >
                    <span>💡</span> Power Bill Payment
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#pricing" className="hover:text-[#00A54F] transition-colors">
              Pricing
            </Link>
            <Link
              href="#agent"
              className="text-[#E31E24] hover:text-[#c41a1f] transition-colors"
            >
              Become a Reseller
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-full border border-zinc-200 text-sm font-bold text-zinc-700 hover:bg-zinc-50 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2.5 rounded-full bg-[#00A54F] text-white text-sm font-bold shadow-lg shadow-[#00A54F]/25 hover:bg-[#059669] hover:shadow-[#00A54F]/35 transition"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-xl text-zinc-700 hover:bg-zinc-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-5 py-5 flex flex-col gap-1 animate-in slide-in-from-top-2">
            <Link href="/" className="py-3 font-bold text-zinc-800" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#services" className="py-3 font-bold text-zinc-800" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="#agent" className="py-3 font-bold text-[#E31E24]" onClick={() => setOpen(false)}>
              Become a Reseller
            </Link>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/login"
                className="py-3.5 rounded-full border border-zinc-200 text-center font-bold text-zinc-700"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="py-3.5 rounded-full bg-[#00A54F] text-white text-center font-bold"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left content */}
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-[#E31E24] font-bold text-sm md:text-base tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
                Become a
              </p>

              <h1 className="mt-3 text-[42px] sm:text-5xl md:text-[68px] font-black leading-[0.92] tracking-tight">
                <span className="inline-block bg-[#00A54F] text-white px-3.5 py-1 rounded-lg -rotate-1 shadow-sm">
                  DATA
                </span>
                <br />
                <span className="inline-block bg-[#00A54F] text-white px-3.5 py-1 rounded-lg -rotate-1 mt-2 shadow-sm">
                  RESELLER
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-zinc-600 font-medium leading-snug">
                and Earn Passive Income Daily
                <br className="hidden sm:block" />
                using your mobile phone.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: "📱", label: "Airtime VTU\n& Data", color: "bg-[#FF8C1A]" },
                  { icon: "📺", label: "TV\nSubscription", color: "bg-[#FF8C1A]" },
                  { icon: "💡", label: "Power Bill\nPayment", color: "bg-[#FF8C1A]" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center text-lg shadow-sm`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-[13px] font-bold leading-tight whitespace-pre-line text-zinc-800">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-10">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#065F36] text-white rounded-full font-bold text-[15px] shadow-lg shadow-[#065F36]/20 hover:bg-[#047857] hover:shadow-[#065F36]/30 transition"
                >
                  Start Selling
                  <span className="text-lg">→</span>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center px-7 py-3.5 bg-zinc-100 text-zinc-800 rounded-full font-bold text-[15px] hover:bg-zinc-200 transition"
                >
                  View Prices
                </Link>
              </div>
            </div>

            {/* Right visual card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A54F]/10 via-transparent to-[#E31E24]/5 rounded-[32px] blur-2xl" />
              <div className="relative bg-zinc-50/80 backdrop-blur rounded-[28px] p-6 sm:p-7 border border-zinc-100 shadow-xl shadow-zinc-200/40">
                {/* Network logos */}
                <div className="grid grid-cols-2 gap-3 max-w-[280px] mx-auto">
                  <div className="bg-[#ffcc00] rounded-2xl py-4 font-black text-center text-[15px] tracking-wide shadow-sm">
                    MTN
                  </div>
                  <div className="bg-[#00A54F] text-white rounded-2xl py-4 font-bold text-center text-[15px] tracking-wide shadow-sm">
                    glo
                  </div>
                  <div className="bg-[#E31E24] text-white rounded-2xl py-4 font-bold text-center text-[15px] tracking-wide shadow-sm">
                    airtel
                  </div>
                  <div className="bg-zinc-900 text-[#c4ff00] rounded-2xl py-4 font-black text-center text-[15px] tracking-wide shadow-sm">
                    9mobile
                  </div>
                </div>

                {/* Quick top-up mock */}
                <div className="mt-6 p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Quick Top-up
                  </p>
                  <div className="mt-3.5 flex gap-2.5">
                    <div className="h-11 flex-1 bg-zinc-100 rounded-full" />
                    <div className="h-11 w-24 bg-[#00A54F] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm">
                      Buy
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-zinc-400 text-center">
                    Instant delivery • All networks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Red accent bar + contact strip */}
        <div className="h-1.5 w-full bg-[#E31E24]" />
        <div className="bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-black text-[#E31E24] text-base sm:text-lg">
            <a href="tel:07012222025" className="flex items-center gap-2 hover:opacity-80 transition">
              📞 0701 222 2025
            </a>
            <a
              href="https://www.gtserviz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              🌐 www.gtserviz.com
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-zinc-50/70 py-16 md:py-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">
              Everything you need to sell
            </h2>
            <p className="mt-2 text-zinc-500 text-sm md:text-base">
              Instant services at the best rates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { title: "Airtime VTU", desc: "Instant top-up", icon: "📱" },
              { title: "Data Bundles", desc: "Cheap & fast", icon: "📶" },
              { title: "Cable TV", desc: "DSTV / GOtv", icon: "📺" },
              { title: "Electricity", desc: "All DisCos", icon: "💡" },
            ].map((s) => (
              <div
                key={s.title}
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-zinc-100 hover:border-[#00A54F]/40 hover:shadow-lg hover:shadow-[#00A54F]/5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-full bg-[#FF8C1A]/15 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-bold mt-4 text-[15px] sm:text-base text-zinc-900">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* FOOTER - Like AimToGet.com */}
<footer className="bg-[#0a0a0a] text-zinc-300 pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

      {/* Brand */}
      <div className="col-span-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="GT" width={40} height={40} className="rounded-full bg-white"/>
          <span className="text-white font-black text-[20px]">GTServiz</span>
        </div>
        <p className="text-sm text-zinc-400 mt-4 leading-relaxed max-w-[300px]">
          Fastest and easiest way to buy airtime, data, pay TV & electricity bills. Accept payments for your business today.
        </p>
        <div className="flex gap-3 mt-6">
          <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A54F] transition">𝕏</a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A54F] transition">f</a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A54F] transition">IG</a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A54F] transition">▶</a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-bold mb-4">Services</h4>
        <ul className="space-y-3 text-sm text-zinc-400">
          <li><Link href="#" className="hover:text-white">Airtime VTU</Link></li>
          <li><Link href="#" className="hover:text-white">Data Bundles</Link></li>
          <li><Link href="#" className="hover:text-white">Cable TV Subscription</Link></li>
          <li><Link href="#" className="hover:text-white">Electricity Bills</Link></li>
          <li><Link href="#" className="hover:text-white">Education Pins</Link></li>
          <li><Link href="#" className="hover:text-white">Airtime to Cash</Link></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-bold mb-4">Company</h4>
        <ul className="space-y-3 text-sm text-zinc-400">
          <li><Link href="#" className="hover:text-white">About Us</Link></li>
          <li><Link href="#" className="hover:text-white">Become an Agent</Link></li>
          <li><Link href="#" className="hover:text-white">Pricing / Data Plans</Link></li>
          <li><Link href="#" className="hover:text-white">API Documentation</Link></li>
          <li><Link href="#" className="hover:text-white">Our Blog</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-white font-bold mb-4">Support</h4>
        <ul className="space-y-3 text-sm text-zinc-400">
          <li><Link href="#" className="hover:text-white">Help Center</Link></li>
          <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
          <li className="pt-2 text-white font-bold">07012222025</li>
          <li className="text-[#00A54F]">support@gtserviz.com</li>
          <li className="text-sm mt-2">Mon - Sun, 8am - 10pm</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-[12px] text-zinc-500">
      <p>© 2026 GTServiz Technology Limited. All rights reserved. • RC: 1531451</p>
      <div className="flex gap-6">
        <Link href="#" className="hover:text-white">Privacy Policy</Link>
        <Link href="#" className="hover:text-white">Terms of Service</Link>
        <Link href="#" className="hover:text-white">Fees</Link>
      </div>
    </div>
  </div>
</footer>
  );
}
