import ProductCard from './ProductCard';
import Loader from '../common/Loader';

const ProductGrid = ({ products, loading, columns = 4 }) => {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols[columns] || gridCols[4]} gap-6`}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;