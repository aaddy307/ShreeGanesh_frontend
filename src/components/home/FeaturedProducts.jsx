import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../../services/productService';
import { formatPrice, getImageUrl } from '../../utils/helpers';
import Loader from '../common/Loader';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts(1, 4, '', '', '', true); // Fetch top 4 products for featured section
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface-bright py-section-padding">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-2">Featured Products</h2>
            <p className="text-outline">Top picks for mobile retailers and consumers</p>
          </div>
          <Link
            to="/products"
            className="text-[#2563EB] font-body text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl overflow-hidden border border-outline-variant/30 shadow-[0_4px_12px_rgba(11,31,75,0.1)] hover:shadow-[0_8px_20px_rgba(11,31,75,0.15)] transition-all group"
            >
              <div className="relative aspect-square overflow-hidden bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={getImageUrl(product.image)}
                  alt={product.name}
                />
                {product.isNewProduct && (
                  <div className="absolute top-3 left-3 bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded text-xs font-bold">
                    New
                  </div>
                )}
              </div>
              <div className="p-5 space-y-3 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-xs text-outline-variant uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-headline text-lg font-bold text-primary truncate">
                    {product.name}
                  </h3>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#2563EB] font-bold text-lg">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <Link
                  to={`/products/${product._id}`}
                  className="w-full border border-primary text-primary py-2.5 rounded-lg font-body text-sm font-semibold hover:bg-primary hover:text-white transition-all text-center block mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;