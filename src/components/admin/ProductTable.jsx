import { Link } from 'react-router-dom';
import { formatPrice, getImageUrl } from '../../utils/helpers';

const ProductTable = ({ products, onDelete, deleting }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile: Card view */}
      <div className="md:hidden divide-y divide-gray-200">
        {products.map((product) => (
          <div key={product._id} className="p-4">
            <div className="flex gap-4">
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="font-semibold text-accent mt-1">{formatPrice(product.price)}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <Link
                to={`/admin/products/edit/${product._id}`}
                className="flex-1 px-3 py-2 text-sm bg-secondary text-white rounded text-center hover:bg-blue-600 transition-colors"
              >
                Edit
              </Link>
              <button
                onClick={() => onDelete(product._id)}
                disabled={deleting === product._id}
                className="flex-1 px-3 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {deleting === product._id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Table view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Image</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Category</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <img
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="px-4 py-4">
                  <span className="font-medium text-gray-900">{product.name}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-600">{product.category}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="font-semibold text-accent">{formatPrice(product.price)}</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Link
                      to={`/admin/products/edit/${product._id}`}
                      className="px-3 py-1 text-sm bg-secondary text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onDelete(product._id)}
                      disabled={deleting === product._id}
                      className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50"
                    >
                      {deleting === product._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;