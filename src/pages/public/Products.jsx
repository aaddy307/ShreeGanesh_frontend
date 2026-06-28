import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../../components/product/ProductGrid';
import useProducts from '../../hooks/useProducts';
import adminService from '../../services/adminService';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [brand, setBrand] = useState(searchParams.get('brand') || 'All');
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const { products, loading, pagination } = useProducts(page, category, search, brand, sort);

  useEffect(() => {
    const cat = searchParams.get('category');
    const br = searchParams.get('brand');
    const sr = searchParams.get('sort');
    setCategory(cat || 'All');
    setBrand(br || 'All');
    setSort(sr || 'newest');
  }, [searchParams]);

  useEffect(() => {
    adminService.getCategories()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setCategories(data.map(c => c.name));
        }
      })
      .catch(() => {});

    adminService.getBrands()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setBrands(data.map(b => b.name));
        }
      })
      .catch(() => {});
  }, []);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
    const newParams = {};
    if (newCategory && newCategory !== 'All') newParams.category = newCategory;
    if (brand && brand !== 'All') newParams.brand = brand;
    if (sort && sort !== 'newest') newParams.sort = sort;
    setSearchParams(newParams);
  };

  const handleBrandChange = (newBrand) => {
    setBrand(newBrand);
    setPage(1);
    const newParams = {};
    if (category && category !== 'All') newParams.category = category;
    if (newBrand && newBrand !== 'All') newParams.brand = newBrand;
    if (sort && sort !== 'newest') newParams.sort = sort;
    setSearchParams(newParams);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setPage(1);
    const newParams = {};
    if (category && category !== 'All') newParams.category = category;
    if (brand && brand !== 'All') newParams.brand = brand;
    if (newSort && newSort !== 'newest') newParams.sort = newSort;
    setSearchParams(newParams);
  };

  const handleSearch = (query) => {
    setSearch(query);
    setPage(1);
  };

  const handleClearAll = () => {
    setCategory('All');
    setBrand('All');
    setSort('newest');
    setSearch('');
    setPage(1);
    setSearchParams({});
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 md:px-12 py-16 min-h-screen">
      
      {/* Search and Filters Header Block */}
      <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-md mb-8 space-y-4">
        <h1 className="font-headline text-2xl font-bold text-primary">Browse Our Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* 1st: Search Box */}
          <div className="md:col-span-4 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products, category, or brand..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm"
            />
            <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400 text-[20px]">
              search
            </span>
          </div>

          {/* 2nd: Category Dropdown */}
          <div className="md:col-span-3">
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white font-body text-sm"
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* 3rd: Brand Dropdown */}
          <div className="md:col-span-3">
            <select
              value={brand}
              onChange={(e) => handleBrandChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white font-body text-sm"
            >
              <option value="All">All Brands</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* 4th: Sort Dropdown */}
          <div className="md:col-span-2">
            <select
              value={sort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#C0C8D8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white font-body text-sm"
            >
              <option value="newest">Newly Added</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Clear and Stats Info */}
        <div className="flex flex-wrap items-center justify-between pt-2 border-t border-outline-variant text-sm font-semibold">
          <p className="text-on-surface-variant font-body">
            Showing <span className="font-bold text-primary">{products.length}</span> products
          </p>
          <button
            onClick={handleClearAll}
            className="text-[#2563EB] hover:underline"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid products={products} loading={loading} columns={3} />

      {/* Pagination */}
      {!loading && pagination.pages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-primary hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous Page"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${
                page === pageNum
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'border border-outline-variant text-primary hover:bg-surface-container-high'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            disabled={page === pagination.pages}
            onClick={() => setPage((prev) => Math.min(prev + 1, pagination.pages))}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-primary hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next Page"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </main>
  );
};

export default Products;
