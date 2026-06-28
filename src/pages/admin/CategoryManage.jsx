import { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import adminService from '../../services/adminService';
import Loader from '../../components/common/Loader';
import { Menu, Plus, Trash2, Search, X } from 'lucide-react';

const CategoryManage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Add category state
  const [newCatName, setNewCatName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const data = await adminService.getCategories();
      setCategories(data);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    setSubmitting(true);
    try {
      const created = await adminService.createCategory(newCatName.trim());
      setCategories((prev) => [...prev, created].sort((a, b) => a.name.localeCompare(b.name)));
      setNewCatName('');
    } catch (err) {
      alert(err.response?.data?.message || 'Category already exists or failed to save');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      await adminService.deleteCategory(id);
      setCategories((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      alert('Failed to delete category');
    }
  };

  // Search filter
  const filtered = categories.filter((c) => 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination bounds
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

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

        <div className="max-w-[800px] mx-auto space-y-8">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-5">
            <h1 className="font-headline text-3xl font-bold text-primary">Category Management</h1>
            <p className="text-gray-500 text-sm mt-1">Configure and manage product categories for Shree Ganesh catalog.</p>
          </div>

          {/* Grid Layout: Add Form & Categories List */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Add category form */}
            <div className="md:col-span-5 bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-4">
              <h2 className="font-headline text-lg font-bold text-primary">Add Category</h2>
              <form onSubmit={handleAddCategory} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wide mb-1.5">
                    Category Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                    placeholder="e.g. Smart Watches"
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 bg-[#2563EB] text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-md disabled:opacity-50"
                >
                  {submitting ? 'Saving...' : 'Add Category'}
                </button>
              </form>
            </div>

            {/* Right: Categories Table */}
            <div className="md:col-span-7 space-y-4">
              {/* Search Bar */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-2">
                <span className="text-gray-400">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search categories..."
                  className="w-full border-0 focus:ring-0 text-sm p-1"
                />
              </div>

              {/* Data Table */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {loading ? (
                  <div className="p-12 flex justify-center">
                    <Loader size="lg" />
                  </div>
                ) : paginatedItems.length === 0 ? (
                  <div className="p-12 text-center text-gray-400">
                    No categories found.
                  </div>
                ) : (
                  <table className="w-full text-left border-collapse text-sm">
                    <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-3">Category Name</th>
                        <th className="px-6 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      {paginatedItems.map((cat) => (
                        <tr key={cat._id} className="hover:bg-gray-50/20 transition-colors">
                          <td className="px-6 py-3.5 font-bold text-primary">{cat.name}</td>
                          <td className="px-6 py-3.5 text-right">
                            <button
                              onClick={() => handleDelete(cat._id)}
                              className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition-all"
                              title="Delete Category"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Pagination */}
              {!loading && totalPages > 1 && (
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xs text-gray-400">
                    Page {page} of {totalPages}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-8 h-8 rounded-lg font-bold text-xs ${
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
      </div>
    </div>
  );
};

export default CategoryManage;
