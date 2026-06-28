import { Routes, Route } from 'react-router-dom';
import AdminRoute from './AdminRoute';

import Home from '../pages/public/Home';
import Products from '../pages/public/Products';
import ProductDetails from '../pages/public/ProductDetails';
import Contact from '../pages/public/Contact';
import NotFound from '../pages/public/NotFound';

import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
import EditProduct from '../pages/admin/EditProduct';
import ManageProducts from '../pages/admin/ManageProducts';
import CategoryManage from '../pages/admin/CategoryManage';
import BrandManage from '../pages/admin/BrandManage';
import Enquiries from '../pages/admin/Enquiries';
import EditContact from '../pages/admin/EditContact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      } />
      <Route path="/admin/products/edit/:id" element={
        <AdminRoute>
          <EditProduct />
        </AdminRoute>
      } />
      <Route path="/admin/products/manage" element={
        <AdminRoute>
          <ManageProducts />
        </AdminRoute>
      } />
      <Route path="/admin/categories" element={
        <AdminRoute>
          <CategoryManage />
        </AdminRoute>
      } />
      <Route path="/admin/brands" element={
        <AdminRoute>
          <BrandManage />
        </AdminRoute>
      } />
      <Route path="/admin/enquiries" element={
        <AdminRoute>
          <Enquiries />
        </AdminRoute>
      } />
      <Route path="/admin/contact" element={
        <AdminRoute>
          <EditContact />
        </AdminRoute>
      } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;