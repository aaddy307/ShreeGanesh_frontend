import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../utils/constants';
import api from '../../services/api';
import adminService from '../../services/adminService';

const Contact = () => {
  const [contact, setContact] = useState({
    phone: BUSINESS_INFO.phone,
    whatsapp: BUSINESS_INFO.whatsapp,
    email: BUSINESS_INFO.email || 'sales@shreeganesh.com',
    socialFacebook: '#',
    socialInstagram: '#',
    googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.0651025207058!2d73.20474026251243!3d19.212054286108685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793f737ff75e7%3A0xba11a03ecbabcd41!2sShree%20Ganesh%20ice%20cream%20parlour!5e0!3m2!1sen!2sin!4v1779009096746!5m2!1sen!2sin'
  });

  const [categories, setCategories] = useState([]);

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Select a category',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, sending, success

  useEffect(() => {
    // Fetch Contact Details
    api.get('/contact')
      .then(({ data }) => {
        if (data) {
          setContact({
            phone: data.phone || BUSINESS_INFO.phone,
            whatsapp: data.whatsapp || BUSINESS_INFO.whatsapp,
            email: data.email || BUSINESS_INFO.email || 'sales@shreeganesh.com',
            socialFacebook: data.socialFacebook || '#',
            socialInstagram: data.socialInstagram || '#',
            googleMapLink: data.googleMapLink || contact.googleMapLink
          });
        }
      })
      .catch(() => {});

    // Fetch Categories for Dropdown
    adminService.getCategories()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setCategories(data.map(c => c.name));
        }
      })
      .catch(() => {});
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    try {
      const payload = {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        category: formState.category !== 'Select a category' ? formState.category : '',
        message: formState.message
      };

      await adminService.createEnquiry(payload);
      setSubmitStatus('success');
      setFormState({
        name: '',
        phone: '',
        email: '',
        category: 'Select a category',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (err) {
      alert('Failed to send enquiry. Please try again.');
      setSubmitStatus('idle');
    }
  };

  const handleWhatsAppChat = () => {
    const waMessage = `Hi! I would like to make an inquiry.\nName: ${formState.name || 'Visitor'}\nPhone: ${formState.phone || 'N/A'}\nMessage: ${formState.message || 'I have a retail inquiry.'}`;
    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink, '_blank');
  };

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-margin-desktop py-section-padding font-body">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column: Contact Info Card */}
        <div className="md:col-span-5 space-y-stack-lg">
          <div className="bg-surface-container-lowest p-8 border-l-[6px] border-[#2563EB] shadow-sm">
            <h1 className="font-headline text-3xl font-bold text-primary mb-stack-lg">Get in Touch</h1>
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#2563EB] mt-1">location_on</span>
                <div>
                  <p className="font-headline text-sm font-bold text-primary">Office Address</p>
                  <p className="font-body text-sm text-on-surface-variant">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#2563EB] mt-1">call</span>
                <div>
                  <p className="font-headline text-sm font-bold text-primary">Phone Support</p>
                  <p className="font-body text-sm text-on-surface-variant">{contact.phone}</p>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#2563EB] mt-1">chat</span>
                <div>
                  <p className="font-headline text-sm font-bold text-primary">WhatsApp Business</p>
                  <p className="font-body text-sm text-on-surface-variant">+{contact.whatsapp}</p>
                </div>
              </div>
              {/* Email */}
              {contact.email && (
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#2563EB] mt-1">mail</span>
                  <div>
                    <p className="font-headline text-sm font-bold text-primary">Email Inquiries</p>
                    <p className="font-body text-sm text-on-surface-variant">{contact.email}</p>
                  </div>
                </div>
              )}
              {/* Hours */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#2563EB] mt-1">schedule</span>
                <div>
                  <p className="font-headline text-sm font-bold text-primary">Business Hours</p>
                  <p className="font-body text-sm text-on-surface-variant">Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Store Visit Block */}
            <div className="mt-8 bg-primary p-6 rounded-lg">
              <p className="text-white font-headline text-sm font-bold mb-2">Visit Our Store</p>
              <p className="text-gray-300 font-body text-sm">
                Stop by our retail shop in Ambernath to view all accessories in person, try them out, and get instant recommendations.
              </p>
            </div>
          </div>

          {/* Actual Embedded Google Map */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
            <iframe
              src={contact.googleMapLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Business Location Map"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="md:col-span-7">
          <div className="bg-white p-8 md:p-12 rounded-[16px] border border-[#E8ECF4] shadow-custom">
            <h2 className="font-headline text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-outline">Full Name</label>
                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-outline">Phone Number</label>
                  <input
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm"
                    placeholder="+91 00000 00000"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-body text-sm font-semibold text-outline">Email Address</label>
                <input
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <label className="font-body text-sm font-semibold text-outline">Product Inquiry</label>
                <select
                  name="category"
                  value={formState.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white font-body text-sm"
                >
                  <option>Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-body text-sm font-semibold text-outline">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none font-body text-sm"
                  placeholder="How can we help you?"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                disabled={submitStatus === 'sending'}
                className="w-full bg-[#2563EB] text-white py-4 rounded-lg font-headline font-semibold hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                type="submit"
              >
                {submitStatus === 'sending' && (
                  <>
                    <span className="material-symbols-outlined animate-spin">sync</span> Sending...
                  </>
                )}
                {submitStatus === 'success' && (
                  <>
                    <span className="material-symbols-outlined">check_circle</span> Message Sent!
                  </>
                )}
                {submitStatus === 'idle' && (
                  <>
                    Send Message <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-outline font-body text-xs uppercase tracking-widest">
                    OR
                  </span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppChat}
                className="w-full bg-[#25D366] text-white py-4 rounded-lg font-headline font-semibold hover:brightness-90 transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                type="button"
              >
                Chat on WhatsApp
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
