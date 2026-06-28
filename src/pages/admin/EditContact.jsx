import { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import adminService from '../../services/adminService';
import Loader from '../../components/common/Loader';
import { Menu, Save, Phone, Mail, Link2, MapPin } from 'lucide-react';

const EditContact = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Form Fields
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [socialFacebook, setSocialFacebook] = useState('');
  const [socialInstagram, setSocialInstagram] = useState('');
  const [googleMapLink, setGoogleMapLink] = useState('');

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    setLoading(true);
    try {
      const data = await adminService.getContact();
      setPhone(data.phone || '');
      setWhatsapp(data.whatsapp || '');
      setEmail(data.email || '');
      setSocialFacebook(data.socialFacebook || '');
      setSocialInstagram(data.socialInstagram || '');
      setGoogleMapLink(data.googleMapLink || '');
    } catch (err) {
      console.error('Failed to load contact info:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const payload = {
        phone,
        whatsapp,
        email,
        socialFacebook,
        socialInstagram,
        googleMapLink
      };
      await adminService.updateContact(payload);
      setMessage('Contact details updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      alert('Failed to update contact info');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-body">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-grow p-6 lg:p-10 min-w-0">
        
        {/* Toggle Menu for Mobile */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h1 className="text-xl font-headline font-bold text-primary">Admin Panel</h1>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="bg-primary text-white p-2.5 rounded-lg shadow-md"
            aria-label="Open Sidebar Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-[700px] mx-auto space-y-8">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-5">
            <h1 className="font-headline text-3xl font-bold text-primary">Edit Contact Details</h1>
            <p className="text-gray-500 text-sm mt-1">Configure retail business contact streams, socials, and maps shown on public pages.</p>
          </div>

          {loading ? (
            <div className="p-16 flex justify-center">
              <Loader size="lg" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-6">
              
              {message && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-bold">
                  {message}
                </div>
              )}

              {/* Grid: Phone & Whatsapp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide mb-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                    Call Number
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide mb-1.5">
                    <span className="material-symbols-outlined text-[16px] text-green-600">chat</span>
                    WhatsApp Link/Number
                  </label>
                  <input
                    type="text"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="e.g. 918149678734"
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Provide number without spaces/symbols for WhatsApp API compatibility.</p>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide mb-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  Sales Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sales@shreeganesh.com"
                  className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]"
                />
              </div>

              {/* Grid: Social Medias */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-gray-100 pt-5">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide mb-1.5">
                    <Link2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    Facebook Page Link
                  </label>
                  <input
                    type="url"
                    value={socialFacebook}
                    onChange={(e) => setSocialFacebook(e.target.value)}
                    placeholder="https://facebook.com/yourpage"
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide mb-1.5">
                    <Link2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    Instagram Profile Link
                  </label>
                  <input
                    type="url"
                    value={socialInstagram}
                    onChange={(e) => setSocialInstagram(e.target.value)}
                    placeholder="https://instagram.com/yourprofile"
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]"
                  />
                </div>
              </div>

              {/* Google Map Link */}
              <div className="border-t border-gray-100 pt-5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                  Google Maps Embed URL
                </label>
                <textarea
                  rows="3"
                  value={googleMapLink}
                  onChange={(e) => setGoogleMapLink(e.target.value)}
                  placeholder="Paste the google maps embed src url..."
                  className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]"
                />
                <p className="text-[10px] text-gray-400 mt-1">Copy the link inside the `src` attribute from Google Maps `Share &gt; Embed Map` HTML code.</p>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md text-sm disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {submitting ? 'Saving Details...' : 'Save Configuration'}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default EditContact;
