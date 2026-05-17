import { formatPrice, getImageUrl, getWhatsAppLink, getCallLink } from '../../utils/helpers';
import WhatsAppButton from '../common/WhatsAppButton';

const ProductDetailsCard = ({ product }) => {
  const whatsappMessage = `Hi, I'm interested in "${product.name}" (${formatPrice(product.price)}). Please share more details.`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square bg-gray-100">
          <img
            src={getImageUrl(product.image)}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-sm text-secondary font-medium mb-2">
            {product.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-accent mb-6">
            {formatPrice(product.price)}
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppButton message={whatsappMessage} size="lg" />
            <a
              href={getCallLink()}
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;