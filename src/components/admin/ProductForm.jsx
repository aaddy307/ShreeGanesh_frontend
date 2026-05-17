import { useState } from 'react';
import { CATEGORIES } from '../../utils/constants';
import Loader from '../common/Loader';

const ProductForm = ({ onSubmit, initialData = null, loading = false }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    category: initialData?.category || '',
    price: initialData?.price || '',
    description: initialData?.description || '',
    image: null,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!initialData && !formData.image) newErrors.image = 'Product image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      if (errors.image) {
        setErrors((prev) => ({ ...prev, image: '' }));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
          placeholder="Enter product name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category *
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
        >
          <option value="">Select category</option>
          {CATEGORIES.filter(c => c !== 'All').map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price (₹) *
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.price ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
          placeholder="Enter price"
          min="0"
          step="0.01"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
          placeholder="Enter product description"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Image {initialData ? '(Optional)' : '*'}
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={`w-full px-4 py-3 rounded-lg border ${errors.image ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-secondary`}
        />
        {initialData && initialData.image && (
          <p className="text-sm text-gray-500 mt-2">Current image will be kept if no new image is uploaded</p>
        )}
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader size="sm" />
            Processing...
          </span>
        ) : (
          initialData ? 'Update Product' : 'Add Product'
        )}
      </button>
    </form>
  );
};

export default ProductForm;