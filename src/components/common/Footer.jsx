import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../utils/constants';
import api from '../../services/api';

const Footer = () => {
  const [contact, setContact] = useState({
    phone: BUSINESS_INFO.phone,
    whatsapp: BUSINESS_INFO.whatsapp,
    email: BUSINESS_INFO.email || 'sales@shreeganesh.com',
    socialFacebook: '#',
    socialInstagram: '#'
  });

  useEffect(() => {
    api.get('/contact')
      .then(({ data }) => {
        if (data) {
          setContact({
            phone: data.phone || BUSINESS_INFO.phone,
            whatsapp: data.whatsapp || BUSINESS_INFO.whatsapp,
            email: data.email || BUSINESS_INFO.email || 'sales@shreeganesh.com',
            socialFacebook: data.socialFacebook || '#',
            socialInstagram: data.socialInstagram || '#'
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="bg-primary text-surface-container-lowest border-t border-outline-variant w-full pt-16 pb-8 font-body">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop">
        <div className="space-y-6">
          <span className="font-headline text-2xl font-bold text-surface-container-lowest block">
            {BUSINESS_INFO.name}
          </span>
          <p className="text-outline-variant text-sm leading-relaxed">
            Your premium shop for high-quality mobile accessories in Ambernath. Best rates and customer service, always.
          </p>
          <div className="flex gap-4">
            {contact.socialFacebook && contact.socialFacebook !== '#' && (
              <a href={contact.socialFacebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-[#1877F2] transition-all text-outline-variant hover:text-white" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
            )}
            {contact.socialInstagram && contact.socialInstagram !== '#' && (
              <a href={contact.socialInstagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-[#E1306C] transition-all text-outline-variant hover:text-white" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            )}
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center hover:bg-[#25D366] transition-all text-outline-variant hover:text-white" title="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l112.5-29.5c32.9 18 70.1 27.5 108.1 27.5h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-64.8-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-headline text-lg font-bold text-surface-container-lowest">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-outline-variant hover:text-surface-container-lowest transition-colors text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-outline-variant hover:text-surface-container-lowest transition-colors text-sm">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-outline-variant hover:text-surface-container-lowest transition-colors text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline text-lg font-bold text-surface-container-lowest">Product Categories</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/products?category=Chargers" className="text-outline-variant hover:text-surface-container-lowest transition-colors text-sm">
                Chargers
              </Link>
            </li>
            <li>
              <Link to="/products?category=Earphones" className="text-outline-variant hover:text-surface-container-lowest transition-colors text-sm">
                Audio Accessories
              </Link>
            </li>
            <li>
              <Link to="/products?category=Power%20Banks" className="text-outline-variant hover:text-surface-container-lowest transition-colors text-sm">
                Power Banks
              </Link>
            </li>
            <li>
              <Link to="/products?category=Cables" className="text-outline-variant hover:text-surface-container-lowest transition-colors text-sm">
                Cables & Data
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline text-lg font-bold text-surface-container-lowest">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-outline-variant text-sm">
              <span className="material-symbols-outlined text-[#2563EB] text-[20px] shrink-0 mt-0.5">location_on</span>
              <span>{BUSINESS_INFO.address || "Andheri East, Mumbai, Maharashtra"}</span>
            </li>
            <li className="flex items-center gap-3 text-outline-variant text-sm">
              <span className="material-symbols-outlined text-[#2563EB] text-[20px] shrink-0">call</span>
              <a href={`tel:${contact.phone}`} className="hover:text-surface-container-lowest transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-outline-variant text-sm">
              <span className="material-symbols-outlined text-[#2563EB] text-[20px] shrink-0">mail</span>
              <a href={`mailto:${contact.email}`} className="hover:text-surface-container-lowest transition-colors">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/10 px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-outline-variant">
        <p>
          &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
