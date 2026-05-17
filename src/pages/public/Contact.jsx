import { useState } from 'react';
import { BUSINESS_INFO } from '../../utils/constants';
import { validateContactForm } from '../../utils/validations';
import Loader from '../../components/common/Loader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);

    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    setSubmitted(true);
    setSending(false);
  };

  return (
    <main className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Message Ready!</h3>
                <p className="text-gray-600 mb-4">
                  Your message has been prepared. You can send it via WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
                    placeholder="Enter your message"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50"
                >
                  {sending ? <Loader size="sm" /> : 'Send via WhatsApp'}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Business Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-700">Address</h3>
                    <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold text-gray-700">Phone</h3>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-600 hover:text-secondary">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-semibold text-gray-700">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-secondary"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Find Us on Map</h2>
              <div className="aspect-video bg-gray-100 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d73.2!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3M1KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Business Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;