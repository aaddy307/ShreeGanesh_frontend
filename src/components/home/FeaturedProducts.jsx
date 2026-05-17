import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../../services/productService';
import { formatPrice, getImageUrl } from '../../utils/helpers';
import Loader from '../common/Loader';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts(1, 8);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className={`section-title text-center transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          Featured Products
        </h2>
        <p className={`section-subtitle text-center transition-all duration-500 delay-100 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          Explore our top-rated products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product._id} 
              className={`card group transition-all duration-500 hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={getImageUrl(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-secondary font-medium mb-1">{product.category}</p>
                <h3 className="font-semibold text-primary mb-2 truncate">{product.name}</h3>
                <p className="text-accent font-bold text-lg">{formatPrice(product.price)}</p>
                <Link
                  to={`/products/${product._id}`}
                  className="mt-3 block text-center text-sm text-secondary font-medium hover:text-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-500 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/products" className="btn-secondary hover:scale-105 transition-transform">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;