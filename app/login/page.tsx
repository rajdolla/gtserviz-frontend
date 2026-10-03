"use client";
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f7fb]">
      <div className="bg-white border rounded-2xl p-8 w-[380px]">
        <h1 className="text-[22px] font-black">Login to GTSERVIZ</h1>
        <input className="w-full mt-4 border rounded-full px-4 py-3 text-sm" placeholder="Email" />
        <input className="w-full mt-3 border rounded-full px-4 py-3 text-sm" placeholder="Password" type="password" />
        <button className="w-full mt-4 bg-[#00A54F] text-white py-3 rounded-full font-black">Login</button>
      </div>
    </div>
  );
}
