import api from './api';

const productService = {
  getProducts: async (page = 1, limit = 12, category = '', search = '', brand = '', isFeatured = false, sort = '') => {
    const params = new URLSearchParams();
    params.append('page', page);
    params.append('limit', limit);
    if (category && category !== 'All') params.append('category', category);
    if (brand && brand !== 'All') params.append('brand', brand);
    if (search) params.append('search', search);
    if (isFeatured) params.append('isFeatured', 'true');
    if (sort) params.append('sort', sort);

    const { data } = await api.get(`/products?${params}`);
    return data;
  },

  getProductById: async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },

  createProduct: async (productData) => {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('category', productData.category);
    formData.append('price', productData.price);
    formData.append('originalPrice', productData.originalPrice || 0);
    formData.append('brand', productData.brand || '');
    formData.append('isFeatured', productData.isFeatured === true ? 'true' : 'false');
    formData.append('description', productData.description);
    formData.append('image', productData.image);

    const { data } = await api.post('/products', formData);
    return data;
  },

  updateProduct: async (id, productData) => {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('category', productData.category);
    formData.append('price', productData.price);
    formData.append('originalPrice', productData.originalPrice !== undefined ? productData.originalPrice : 0);
    formData.append('brand', productData.brand || '');
    formData.append('isFeatured', productData.isFeatured === true ? 'true' : 'false');
    formData.append('description', productData.description);
    if (productData.image) {
      formData.append('image', productData.image);
    }

    const { data } = await api.put(`/products/${id}`, formData);
    return data;
  },

  deleteProduct: async (id) => {
    const { data } = await api.delete(`/products/${id}`);
    return data;
  },

  getProductCount: async () => {
    const { data } = await api.get('/products/count');
    return data;
  },
};

export default productService;