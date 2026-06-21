import ProductCard from './ProductCard';
import { Search } from 'lucide-react';

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
    <div className="aspect-square bg-gray-200"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
    </div>
  </div>
);

const ProductGrid = ({ products, loading, columns = 4 }) => {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  if (loading) {
    return (
      <div className={`grid ${gridCols[columns] || gridCols[4]} gap-6`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
        <h3 className="text-xl font-bold text-navy mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your search or category</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols[columns] || gridCols[4]} gap-6`}>
      {products.map((product, index) => (
        <div
          key={product._id}
          className="animate-scaleIn"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
