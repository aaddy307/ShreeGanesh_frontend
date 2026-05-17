import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '../../utils/constants';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-navy via-primary to-secondary py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            About Us
          </h1>
          <p className={`text-gray-300 text-lg transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Know more about Shree Ganesh Enterprises
          </p>
        </div>
      </div>

      <div className="container-custom -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span>🏪</span>
                <span>Established in Ambernath</span>
              </div>
              
              <h2 className={`text-3xl md:text-4xl font-bold text-navy mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Your Trusted Destination for{' '}
                <span className="text-accent">Mobile Accessories</span>
              </h2>
              
              <p className={`text-gray-600 text-lg leading-relaxed mb-6 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="font-semibold text-navy">Shree Ganesh Enterprises</span> is a premier electronics and mobile 
                accessories shop serving the community of <span className="font-semibold">Ambernath, Maharashtra</span>. 
                With years of experience, we've become the go-to destination for quality mobile accessories.
              </p>
              
              <p className={`text-gray-600 text-lg leading-relaxed mb-8 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Our founder, <span className="font-semibold text-navy">{BUSINESS_INFO.owner}</span>, started this business 
                with a simple vision: provide genuine electronic accessories at prices that everyone can afford. 
                Whether you're looking for <span className="text-accent font-semibold">branded products</span> or{' '}
                <span className="text-accent font-semibold">budget-friendly options</span>, we've got you covered!
              </p>
              
              <div className={`transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all hover:scale-105"
                >
                  <span>Explore Products</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-navy to-primary rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: '📱', label: 'Mobile Covers', value: '200+' },
                    { icon: '🔌', label: 'Chargers', value: '50+' },
                    { icon: '🎧', label: 'Earphones', value: '80+' },
                    { icon: '🔋', label: 'Power Banks', value: '30+' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <p className="text-2xl font-bold">{item.value}</p>
                      <p className="text-gray-300 text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best shopping experience for all our customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 ${loaded ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-navy to-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
              <p className="text-gray-300 text-lg mb-6">
                We'd love to serve you! Drop by our store or reach out to us online.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300 text-sm">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                    💬
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4">🕐 Store Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Saturday: 9:00 AM - 11:00 PM</p>
                <p>Sunday: 9:00 AM - 11:00 PM</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  *Hours may vary during holidays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;