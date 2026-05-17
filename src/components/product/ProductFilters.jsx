import { CATEGORIES } from '../../utils/constants';

const ProductFilters = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-secondary text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:text-secondary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilters;