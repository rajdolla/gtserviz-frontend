export default function Footer() {
  return (
    <footer className="bg-[#061e14] text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-black tracking-[0.15em] text-[14px]">GTSERVIZ</h3>
          <p className="text-[13px] text-white/50 mt-4 leading-[1.6] max-w-[280px]">
            Fast, cheap & secure VTU platform. Airtime, data, cable & electricity at best rates. Trusted by 50k+ users.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[13px]">Product</h4>
          <ul className="mt-4 space-y-3 text-[13px] text-white/50">
            <li><a href="/store" className="hover:text-white">Store</a></li>
            <li><a href="/api" className="hover:text-white">API Docs</a></li>
            <li><a href="/#services" className="hover:text-white">Services</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[13px]">Company</h4>
          <ul className="mt-4 space-y-3 text-[13px] text-white/50">
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/reseller" className="hover:text-white">Become a Reseller</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[13px]">Get Started</h4>
          <p className="text-[12px] text-white/40 mt-4">Create free account in 30 seconds</p>
          <a href="/signup" className="inline-block mt-4 px-5 py-2.5 rounded-full bg-[#00A54F] text-white text-[13px] font-black">Sign up free →</a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex justify-between text-[11px] text-white/30">
          <span>© 2026 GTSERVIZ. All rights reserved.</span>
          <span>Built with ❤️ in Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
