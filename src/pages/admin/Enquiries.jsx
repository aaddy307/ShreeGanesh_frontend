import { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import adminService from '../../services/adminService';
import Loader from '../../components/common/Loader';
import { Menu, Trash2, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deleting, setDeleting] = useState(null);

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const data = await adminService.getEnquiries();
      setEnquiries(data);
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;

    setDeleting(id);
    try {
      await adminService.deleteEnquiry(id);
      setEnquiries((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      alert('Failed to delete enquiry');
    } finally {
      setDeleting(null);
    }
  };

  // Pagination bounds
  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = enquiries.slice(startIndex, startIndex + itemsPerPage);

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

        <div className="max-w-[1000px] mx-auto space-y-8">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-5">
            <h1 className="font-headline text-3xl font-bold text-primary">B2B Enquiries Inbox</h1>
            <p className="text-gray-500 text-sm mt-1">Review wholesale accessory inquiries and customer quote requests.</p>
          </div>

          {/* Enquiries Grid/Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-16 flex justify-center">
                <Loader size="lg" />
              </div>
            ) : enquiries.length === 0 ? (
              <div className="p-16 text-center text-gray-400 font-medium">
                No inquiries received yet.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {paginatedItems.map((enq) => (
                  <div key={enq._id} className="p-6 hover:bg-gray-50/30 transition-colors flex flex-col md:flex-row justify-between gap-6 items-start">
                    <div className="space-y-3 flex-1">
                      
                      {/* Sub-Header */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-bold text-primary text-base">{enq.name}</span>
                        {enq.category && (
                          <span className="bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold px-2 py-0.5 rounded">
                            {enq.category}
                          </span>
                        )}
                        <span className="text-gray-400 text-xs flex items-center gap-1 font-semibold ml-auto md:ml-0">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(enq.createdAt).toLocaleDateString(undefined, {
                            month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
                          })}
                        </span>
                      </div>

                      {/* Contact Info Row */}
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                          <a href={`tel:${enq.phone}`} className="hover:underline">{enq.phone}</a>
                        </span>
                        {enq.email && (
                          <span className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                            <a href={`mailto:${enq.email}`} className="hover:underline">{enq.email}</a>
                          </span>
                        )}
                      </div>

                      {/* Message Block */}
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-150 text-sm text-gray-700 leading-relaxed flex items-start gap-3">
                        <MessageSquare className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                        <span>{enq.message}</span>
                      </div>

                    </div>

                    {/* Action Block */}
                    <div className="self-end md:self-start">
                      <button
                        onClick={() => handleDelete(enq._id)}
                        disabled={deleting === enq._id}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-bold transition-all disabled:opacity-50"
                        title="Delete Enquiry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        {deleting === enq._id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-between items-center pt-4">
              <span className="text-xs text-gray-400 font-bold">
                Page {page} of {totalPages}
              </span>
              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-9 h-9 rounded-lg font-bold text-xs transition-all ${
                      page === pageNum
                        ? 'bg-[#2563EB] text-white shadow-sm'
                        : 'border border-gray-200 text-gray-500 hover:bg-gray-50 bg-white'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Enquiries;
