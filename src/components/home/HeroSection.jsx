import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../utils/constants';

const HeroSection = () => {
  return (
    <header className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-40"></div>
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 silver-badge rounded-full font-body text-xs font-bold shadow-lg">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            Trusted Partner · Ambernath & Mumbai
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extrabold">
            Premium Mobile <span className="silver-text">Accessories</span>
          </h1>
          <p className="text-on-primary-container font-body text-lg md:text-xl">
            Cases · Chargers · Cables · Earphones · Screen Guards &amp; More
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/products"
              className="bg-[#2563EB] text-white px-8 py-4 rounded-lg font-body text-sm font-semibold hover:translate-y-[-2px] transition-all shadow-lg text-center"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-body text-sm font-semibold hover:bg-white hover:text-primary transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="rounded-2xl overflow-hidden border-4 border-outline-variant/20 shadow-2xl">
            <img
              className="w-full h-auto object-cover"
              alt="A professional B2B showcase of high-end mobile accessories including phone cases, chargers, cables, and earbuds."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPU6iUWDVemFyNTKO8p4FsdSwPGieiYxQxgMWLv_iPutXQ_1kOhtF0kP2AR0Q_Zzp_c1e7tCDeNtViqUHjU1eonLkiIcNZBIhRpGUG6ga6HAODjYy4fXLT_fS_NsKNtaA8IfH51d3f1Pxvh9ViZu9EGcXxbkXSDjKS1wNLIE-gNBfkp37PKWgNPo6k_0a8kVdurvnVb3AV1NTM0manQO58P3zj10Pm2zJNlyjuDxUwrs6bNoTdIsYWKdxUzmByjAIdhr5aMdjZo_I"
            />
          </div>
        </div>
      </div>
      {/* Bottom Stats Bar */}
      <div className="bg-surface-container-highest border-t border-outline-variant py-8">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-headline text-2xl md:text-3xl font-bold text-[#000926]">500+</div>
            <div className="font-body text-xs text-[#000926]/75 uppercase tracking-wider font-bold mt-1">Products</div>
          </div>
          <div>
            <div className="font-headline text-2xl md:text-3xl font-bold text-[#000926]">1000+</div>
            <div className="font-body text-xs text-[#000926]/75 uppercase tracking-wider font-bold mt-1">Happy Customers</div>
          </div>
          <div>
            <div className="font-headline text-2xl md:text-3xl font-bold text-[#000926]">50+</div>
            <div className="font-body text-xs text-[#000926]/75 uppercase tracking-wider font-bold mt-1">Brands</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
