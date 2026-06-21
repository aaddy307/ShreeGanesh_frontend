import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BUSINESS_INFO } from '../../utils/constants';
import { ShoppingCart, MessageCircle, Package, Tag, Truck, Star } from 'lucide-react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const stats = [
    { icon: Package, label: '500+ Products', value: '' },
    { icon: Tag, label: '50+ Brands', value: '' },
    { icon: Truck, label: 'Free Delivery', value: 'Above ₹500' },
    { icon: Star, label: '4.9 Rating', value: '500+ Reviews' },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0f172a] to-[#1e3a5f]"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-8 transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white font-medium">Shop online or via WhatsApp</span>
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>

          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="text-white">Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-500 to-yellow-400">
              Ultimate
            </span>
            <br />
            <span className="text-white">Mobile Accessories Hub</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            From trendy <span className="text-accent font-semibold">mobile covers</span> to powerful 
            <span className="text-accent font-semibold"> chargers</span> & 
            <span className="text-accent font-semibold"> power banks</span> — 
            we've got everything you need!
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link 
              to="/products" 
              className="group relative bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-accent/40 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>Explore Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105"
              >
                <item.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <p className="text-white font-bold">{item.label}</p>
                {item.value && <p className="text-gray-400 text-sm">{item.value}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
