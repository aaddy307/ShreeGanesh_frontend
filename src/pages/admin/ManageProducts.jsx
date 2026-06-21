import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import ProductTable from '../../components/admin/ProductTable';
import productService from '../../services/productService';
import Loader from '../../components/common/Loader';
import { Menu } from 'lucide-react';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productService.getProducts(1, 100);
      setProducts(data.products);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }

    setDeleting(id);
    try {
      await productService.deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert('Failed to delete product');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 p-4 md:p-8 w-full">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-20 right-4 z-30 bg-navy text-white p-2 rounded-lg shadow-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Manage Products</h1>
            <Link
              to="/admin/products/add"
              className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm md:text-base"
            >
              Add Product
            </Link>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 md:px-4 py-3 rounded-lg mb-4 md:mb-6">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {loading ? (
              <div className="p-8 flex justify-center">
                <Loader size="lg" />
              </div>
            ) : (
              <ProductTable products={products} onDelete={handleDelete} deleting={deleting} />
            )}
          </div>

          {products.length > 0 && (
            <div className="mt-4 text-sm text-gray-500">
              Total: {products.length} products
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
