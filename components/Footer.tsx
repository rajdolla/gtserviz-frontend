export default function Footer() {
  return (
    <footer className="bg-[#061e14] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold">GTserviz</h3>
          <p className="text-sm text-white/60 mt-3">
            Tools to grow your business. Built for resellers, agencies and creators.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>API</li>
            <li>Store</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Blog</li>
            <li>Reseller</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get Started</h4>
          <a href="/signup" className="inline-block bg-[#00A54F] px-5 py-2 rounded-lg text-sm font-semibold">
            Sign up free
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
        © 2026 GTserviz. All rights reserved.
      </div>
    </footer>
  );
}
