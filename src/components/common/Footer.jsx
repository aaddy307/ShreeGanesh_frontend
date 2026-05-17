import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-navy text-gray-300 mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-xl text-white">
                SG
              </div>
              <span className="text-xl font-bold text-white">Shree Ganesh Enterprises</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted destination for mobile and electronic accessories.
              Quality products at affordable prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/admin/login" className="hover:text-accent transition-colors text-orange-400">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-accent transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shree Ganesh Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;