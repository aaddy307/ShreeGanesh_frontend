const ProductFilters = ({ categories = ['All'], selectedCategory, onCategoryChange }) => {
  return (
    <div className="mt-stack-sm space-y-3">
      {categories.map((category) => (
        <label key={category} className="flex items-center gap-3 cursor-pointer group py-1 select-none">
          <input
            type="checkbox"
            checked={selectedCategory === category}
            onChange={() => onCategoryChange(category)}
            className="w-4 h-4 rounded border-outline text-primary focus:ring-primary cursor-pointer"
          />
          <span className={`font-body text-sm text-on-surface-variant group-hover:text-primary ${
            selectedCategory === category ? 'font-semibold text-primary' : ''
          }`}>
            {category}
          </span>
        </label>
      ))}
    </div>
  );
};

export default ProductFilters;