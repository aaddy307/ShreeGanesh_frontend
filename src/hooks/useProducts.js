import { useState, useEffect } from 'react';
import productService from '../services/productService';

const useProducts = (page = 1, category = '', search = '') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProducts(page, 12, category, search);
        setProducts(data.products);
        setPagination({
          page: data.page,
          pages: data.pages,
          total: data.total,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, category, search]);

  return { products, loading, error, pagination };
};

export default useProducts;