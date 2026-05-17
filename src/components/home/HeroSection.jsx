import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-navy via-primary to-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-custom relative py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Your One-Stop Shop for Mobile & Electronic Accessories
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-200 mb-8 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Quality chargers, earphones, earbuds, power banks, smart watches, speakers, and more.
            Both branded and local products at affordable prices.
          </p>
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/products" className="btn-primary hover:scale-105 transition-transform">
              Shop Now
            </Link>
            <Link to="/contact" className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;