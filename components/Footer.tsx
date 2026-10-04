export default function Footer() {
  return (
    <footer className="bg-[#061e14] text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-black tracking-[0.15em] text-[14px]">GTSERVIZ</h3>
          <p className="text-[13px] text-white/50 mt-4 max-w-[280px]">Fast, cheap & secure VTU platform. Trusted by 50k+ users.</p>
        </div>
        <div><h4 className="font-bold text-[13px]">Product</h4><ul className="mt-4 space-y-2 text-[13px] text-white/50"><li><a href="/store">Store</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/api">API Docs</a></li></ul></div>
        <div><h4 className="font-bold text-[13px]">Company</h4><ul className="mt-4 space-y-2 text-[13px] text-white/50"><li><a href="/blog">Blog</a></li><li><a href="/reseller">Become a Reseller</a></li></ul></div>
        <div><a href="/signup" className="inline-block px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Sign up free →</a></div>
      </div>
      <div className="border-t border-white/5"><div className="max-w-[1280px] mx-auto px-6 py-5 text-[11px] text-white/30">© 2026 GTSERVIZ. All rights reserved.</div></div>
    </footer>
  );
}
