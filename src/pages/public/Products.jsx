import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../../components/product/ProductGrid';
import ProductFilters from '../../components/product/ProductFilters';
import SearchBar from '../../components/common/SearchBar';
import useProducts from '../../hooks/useProducts';
import { Gift } from 'lucide-react';

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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-navy via-navy to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom py-16 relative z-10">
          <h1 className={`text-4xl md:text-5xl font-bold text-white text-center mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Products
          </h1>
          <p className={`text-gray-300 text-center text-lg transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Discover premium mobile accessories at unbeatable prices
          </p>
          <div className={`flex justify-center mt-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Gift className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Free delivery on orders above ₹500</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom -mt-8 relative z-20">
        <div className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-8">
                <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full"></span>
                  Categories
                </h3>
                <ProductFilters
                  selectedCategory={category}
                  onCategoryChange={handleCategoryChange}
                />
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="mb-6">
                <SearchBar onSearch={handleSearch} placeholder="Search products..." />
              </div>

              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  {loading ? 'Loading...' : `${products.length} products found`}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-secondary focus:border-transparent">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>

              <ProductGrid products={products} loading={loading} columns={3} />

              {pagination.pages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-10 h-10 rounded-full font-medium transition-all hover:scale-110 ${
                        pagination.page === pageNum
                          ? 'bg-navy text-white shadow-lg'
                          : 'bg-white text-gray-700 border border-gray-300 hover:border-navy hover:bg-navy hover:text-white'
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
      </div>
    </main>
  );
};

export default Products;
