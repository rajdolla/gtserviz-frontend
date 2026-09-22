"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gtserviz-backend.onrender.com/api/services")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">GTserviz - Services</h1>
      
      {loading ? (
        <p className="text-center">Loading services from backend...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service: any) => (
            <div key={service._id || service.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-zinc-600 mt-2">{service.description}</p>
              <p className="text-green-600 font-bold mt-2">${service.price}</p>
            </div>
          ))}
        </div>
      )}
      
      <p className="text-center mt-8 text-sm text-zinc-500">
        Backend: https://gtserviz-backend.onrender.com - Status: Live ✅
      </p>
    </div>
  );
}
