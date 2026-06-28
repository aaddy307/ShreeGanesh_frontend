import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="bg-primary py-section-padding text-white">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl md:text-4xl silver-text font-bold mb-4">
            How to Shop With Us
          </h2>
          <p className="text-surface-variant max-w-2xl mx-auto font-body">
            Getting your favorite premium mobile accessories from Shree Ganesh is simple and convenient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Divider lines for desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-white/10"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-white/10"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-white/10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-4 px-4 group">
            <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-[32px]">search</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#2563EB] font-bold">Step 1</span>
            <h3 className="font-headline text-xl font-bold">Explore Catalog</h3>
            <p className="text-surface-variant font-body text-sm">
              Browse our premium collection of chargers, earphones, covers, and smart watches online.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-4 px-4 group">
            <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-[32px]">chat</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#2563EB] font-bold">Step 2</span>
            <h3 className="font-headline text-xl font-bold">WhatsApp Query</h3>
            <p className="text-surface-variant font-body text-sm">
              Instantly ask questions, check colors, or verify product availability directly on WhatsApp.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-4 px-4 group">
            <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-[32px]">local_shipping</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#2563EB] font-bold">Step 3</span>
            <h3 className="font-headline text-xl font-bold">Home Delivery</h3>
            <p className="text-surface-variant font-body text-sm">
              Place your retail order and get your items delivered quickly to your home or office.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center space-y-4 px-4 group">
            <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-[32px]">storefront</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#2563EB] font-bold">Step 4</span>
            <h3 className="font-headline text-xl font-bold">Store Pickup</h3>
            <p className="text-surface-variant font-body text-sm">
              Visit our retail shop in Ambernath to test, buy, and get immediate setup support.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="bg-[#2563EB] text-white px-10 py-4 rounded-lg font-headline text-lg font-semibold inline-flex items-center gap-2 hover:scale-105 transition-all shadow-xl"
          >
            Start Shopping Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
