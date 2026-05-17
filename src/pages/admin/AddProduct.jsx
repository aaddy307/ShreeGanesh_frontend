import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import ProductForm from '../../components/admin/ProductForm';
import productService from '../../services/productService';

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');

    try {
      await productService.createProduct(formData);
      navigate('/admin/products/manage');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 p-4 md:p-8">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-20 right-4 z-30 bg-navy text-white p-2 rounded-lg shadow-lg"
        >
          ☰
        </button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">Add New Product</h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 md:px-4 py-3 rounded-lg mb-4 md:mb-6">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <ProductForm onSubmit={handleSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;