import api from './api';

const adminService = {
  // Categories API
  getCategories: async () => {
    const { data } = await api.get('/categories');
    return data;
  },
  createCategory: async (categoryName) => {
    const { data } = await api.post('/categories', { name: categoryName });
    return data;
  },
  deleteCategory: async (id) => {
    const { data } = await api.delete(`/categories/${id}`);
    return data;
  },

  // Brands API
  getBrands: async () => {
    const { data } = await api.get('/brands');
    return data;
  },
  createBrand: async (brandName) => {
    const { data } = await api.post('/brands', { name: brandName });
    return data;
  },
  deleteBrand: async (id) => {
    const { data } = await api.delete(`/brands/${id}`);
    return data;
  },

  // Enquiries API
  getEnquiries: async () => {
    const { data } = await api.get('/enquiries');
    return data;
  },
  createEnquiry: async (enquiryData) => {
    const { data } = await api.post('/enquiries', enquiryData);
    return data;
  },
  deleteEnquiry: async (id) => {
    const { data } = await api.delete(`/enquiries/${id}`);
    return data;
  },

  // Contact Info API
  getContact: async () => {
    const { data } = await api.get('/contact');
    return data;
  },
  updateContact: async (contactData) => {
    const { data } = await api.put('/contact', contactData);
    return data;
  },
};

export default adminService;
