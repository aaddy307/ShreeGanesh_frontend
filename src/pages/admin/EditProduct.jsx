import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import ProductForm from '../../components/admin/ProductForm';
import productService from '../../services/productService';
import Loader from '../../components/common/Loader';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    setError('');

    try {
      await productService.updateProduct(id, formData);
      navigate('/admin/products/manage');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update product');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 p-8 flex items-center justify-center">
          <Loader size="lg" />
        </div>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 p-4 md:p-8">
          <div className="text-center py-12">
            <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">{error}</h2>
            <Link to="/admin/products/manage" className="text-secondary hover:underline">
              Back to Manage Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
            <Link
              to="/admin/products/manage"
              className="text-gray-500 hover:text-secondary text-sm md:text-base"
            >
              ← Back
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Edit Product</h1>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 md:px-4 py-3 rounded-lg mb-4 md:mb-6">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <ProductForm onSubmit={handleSubmit} initialData={product} loading={submitting} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;