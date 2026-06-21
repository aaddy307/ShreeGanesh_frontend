import { Link } from 'react-router-dom';
import { formatPrice, getImageUrl } from '../../utils/helpers';
import { BUSINESS_INFO } from '../../utils/constants';
import { MessageCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const message = `Hi! I'm interested in buying:\n\n*${product.name}*\nPrice: ₹${product.price}\nCategory: ${product.category}`;
    const waLink = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <Link
      to={`/products/${product._id}`}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-accent">{formatPrice(product.price)}</p>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            Free delivery
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
