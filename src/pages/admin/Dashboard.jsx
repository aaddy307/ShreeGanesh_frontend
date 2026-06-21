import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import productService from '../../services/productService';
import { Package, Plus, List, Menu, ArrowLeft } from 'lucide-react';

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const data = await productService.getProductCount();
        setProductCount(data.count);
      } catch (error) {
        console.error('Error fetching count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 p-4 md:p-8">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-20 right-4 z-30 bg-navy text-white p-2 rounded-lg shadow-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Products</p>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {loading ? '...' : productCount}
                  </p>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center text-accent">
                  <Package className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-primary mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/admin/products/add"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 border-2 border-gray-200 rounded-lg hover:border-accent hover:bg-orange-50 transition-colors"
              >
                <Plus className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-primary text-sm md:text-base">Add New Product</p>
                  <p className="text-sm text-gray-500 hidden sm:block">Add a new product to your catalog</p>
                </div>
              </Link>
              <Link
                to="/admin/products/manage"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 border-2 border-gray-200 rounded-lg hover:border-secondary hover:bg-blue-50 transition-colors"
              >
                <List className="w-6 h-6 text-secondary" />
                <div>
                  <p className="font-semibold text-primary text-sm md:text-base">Manage Products</p>
                  <p className="text-sm text-gray-500 hidden sm:block">View, edit, or delete products</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary hover:underline text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
