"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://gtserviz-backend.onrender.com/api/services")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => setServices([]));
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-black text-blue-600">GTserviz</h1>
        <div className="flex gap-3">
          <Link href="/login" className="px-4 py-2 border rounded-full">Login</Link>
          <Link href="/signup" className="px-6 py-2 bg-blue-600 text-white rounded-full">Sign Up</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-blue-50">
        <h2 className="text-5xl font-bold mb-4">Your Plug for Home Services</h2>
        <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-8">
          Book Plumbing, Electrical, Cleaning and more in seconds. Fast, reliable, affordable — all in one place.
        </p>
        <Link href="#services" className="px-8 py-3 bg-black text-white rounded-full text-lg">Book a Service</Link>
        <p className="mt-4 text-sm text-zinc-500">Trusted by 1,200+ customers in Lagos</p>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.length === 0 ? (
            <p>Loading services...</p>
          ) : (
            services.map((s: any) => (
              <div key={s._id || s.name} className="border p-6 rounded-2xl hover:shadow-lg transition">
                <h4 className="text-xl font-semibold">{s.name}</h4>
                <p className="text-zinc-500 text-sm mt-2">{s.description || "Professional home service at your doorstep"}</p>
                <p className="mt-4 font-bold text-blue-600">₦{s.price || s.amount}</p>
                <button className="mt-4 w-full py-2 bg-black text-white rounded-full">Book Now</button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-zinc-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div><h4 className="font-bold text-lg">1. Choose Service</h4><p className="text-zinc-400 mt-2">Pick what you need</p></div>
          <div><h4 className="font-bold text-lg">2. Book Instantly</h4><p className="text-zinc-400 mt-2">Confirm in 3 seconds</p></div>
          <div><h4 className="font-bold text-lg">3. We Deliver</h4><p className="text-zinc-400 mt-2">Pro arrives at your home</p></div>
        </div>
      </section>

      <footer className="text-center py-8 text-zinc-500 text-sm">© 2026 GTserviz • Built like Plug.ng</footer>
    </div>
  );
}
