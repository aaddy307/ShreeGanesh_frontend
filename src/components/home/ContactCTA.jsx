const ContactCTA = () => {
  const brands = [
    'boAt', 'Realme', 'Belkin', 'Anker', 'Samsung', 'Vivo', 'Oppo', 'Mi', 'Portronics', 'Syska'
  ];

  return (
    <section className="bg-white py-12 border-b border-outline-variant/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop mb-8">
        <h4 className="text-center font-headline text-sm font-bold text-outline uppercase tracking-[0.2em]">
          Popular Brands We Stock
        </h4>
      </div>
      <div className="marquee relative">
        <div className="marquee-content flex items-center gap-16 md:gap-24">
          {/* Double list for seamless marquee loop */}
          {[...brands, ...brands].map((brand, idx) => (
            <span
              key={idx}
              className="text-4xl font-black text-outline-variant grayscale hover:grayscale-0 transition-all cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;