import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Products from '../pages/public/Products';
import ProductDetails from '../pages/public/ProductDetails';
import Contact from '../pages/public/Contact';
import NotFound from '../pages/public/NotFound';

import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
import AddProduct from '../pages/admin/AddProduct';
import EditProduct from '../pages/admin/EditProduct';
import ManageProducts from '../pages/admin/ManageProducts';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      } />
      <Route path="/admin/products/add" element={
        <AdminRoute>
          <AddProduct />
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;