import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../utils/constants';
import { useEffect, useState } from 'react';

const ContactCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-navy text-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Have Questions?
          </h2>
          <p className={`text-gray-300 mb-8 text-lg transition-all duration-500 delay-100 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Get in touch with us for any queries about our products
          </p>
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-500 delay-200 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all hover:scale-105"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;