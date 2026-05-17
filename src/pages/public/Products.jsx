import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../../components/product/ProductGrid';
import ProductFilters from '../../components/product/ProductFilters';
import SearchBar from '../../components/common/SearchBar';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

  const { products, loading, pagination } = useProducts(page, category, search);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
    if (newCategory && newCategory !== 'All') {
      setSearchParams({ category: newCategory });
    } else {
      setSearchParams({});
    }
  };

  const handleSearch = (query) => {
    setSearch(query);
    setPage(1);
  };

  return (
    <main className="py-12">
      <div className="container-custom">
        <h1 className={`section-title text-center mb-4 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Our Products
        </h1>
        <p className={`section-subtitle text-center transition-all duration-500 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Browse our wide range of electronic accessories
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-1/4">
            <div className={`bg-white rounded-xl shadow-md p-6 sticky top-24 transition-all duration-500 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h3 className="font-semibold text-primary mb-4">Categories</h3>
              <ProductFilters
                selectedCategory={category}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>

          <div className={`lg:w-3/4 transition-all duration-500 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mb-6">
              <SearchBar onSearch={handleSearch} placeholder="Search products..." />
            </div>

            <ProductGrid products={products} loading={loading} columns={3} />

            {pagination.pages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                      pagination.page === pageNum
                        ? 'bg-secondary text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;