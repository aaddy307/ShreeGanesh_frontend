import { useEffect, useState } from 'react';
import { BUSINESS_INFO } from '../../utils/constants';
import { MapPin, Phone, MessageCircle, MessageSquare, PhoneCall, Map, Clock, AlertCircle } from 'lucide-react';

const Contact = () => {
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
            Contact Us
          </h1>
          <p className={`text-gray-300 text-lg transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="container-custom -mt-12 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className={`bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${loaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-navy text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600">{BUSINESS_INFO.address}</p>
          </div>

          <div className={`bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${loaded ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-navy text-lg mb-2">Call Us</h3>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-600 hover:text-accent font-semibold">
              {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className={`bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${loaded ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-navy text-lg mb-2">WhatsApp</h3>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-semibold hover:text-green-600"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full"></span>
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products? Want to place an order? 
              Chat with us directly on WhatsApp - the fastest way to reach us!
            </p>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi! I'm interested in your products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-xl font-semibold hover:bg-navy/90 transition-all hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 text-navy py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all hover:scale-105"
                >
                  <Map className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full"></span>
              Store Hours
            </h2>
            <div className="space-y-4">
              {[
                { day: 'Monday - Saturday', time: '9:00 AM - 9:00 PM', highlight: true },
                { day: 'Sunday', time: '10:00 AM - 2:00 PM', highlight: false },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-4 rounded-xl ${item.highlight ? 'bg-accent/10 border border-accent/20' : 'bg-gray-50'}`}
                >
                  <span className={`font-semibold ${item.highlight ? 'text-navy' : 'text-gray-700'}`}>
                    {item.day}
                  </span>
                  <span className={`font-bold ${item.highlight ? 'text-accent' : 'text-gray-600'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-sm text-yellow-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold">Note:</span> Store hours may vary during festivals and holidays.
              </p>
            </div>
          </div>
        </div>

        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-2xl font-bold text-navy p-8 pb-0 flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full"></span>
            Find Us on Map
          </h2>
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.0651025207058!2d73.20474026251243!3d19.212054286108685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793f737ff75e7%3A0xba11a03ecbabcd41!2sShree%20Ganesh%20ice%20cream%20parlour!5e0!3m2!1sen!2sin!4v1779009096746!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-b-2xl"
              title="Business Location"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
