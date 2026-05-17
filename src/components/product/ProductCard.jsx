import { Link } from 'react-router-dom';
import { formatPrice, getImageUrl } from '../../utils/helpers';

const ProductCard = ({ product }) => {
  return (
    <div className="card group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4">
        <p className="text-xs text-secondary font-medium mb-1">{product.category}</p>
        <h3 className="font-semibold text-primary mb-2 truncate group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-accent font-bold text-lg">{formatPrice(product.price)}</p>
        <Link
          to={`/products/${product._id}`}
          className="mt-3 block text-center text-sm text-secondary font-medium hover:text-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;