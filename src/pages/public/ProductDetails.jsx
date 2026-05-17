import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productService from '../../services/productService';
import ProductDetailsCard from '../../components/product/ProductDetailsCard';
import Loader from '../../components/common/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <Loader size="lg" />;
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{error}</h2>
        <Link to="/products" className="text-secondary hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="py-12">
      <div className="container-custom">
        <div className="mb-6">
          <Link to="/products" className="text-gray-600 hover:text-secondary">
            ← Back to Products
          </Link>
        </div>
        <ProductDetailsCard product={product} />
      </div>
    </main>
  );
};

export default ProductDetails;