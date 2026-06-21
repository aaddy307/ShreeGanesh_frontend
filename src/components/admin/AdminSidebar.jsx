import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { LayoutDashboard, Plus, Package, X, Menu } from 'lucide-react';

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Add Product', path: '/admin/products/add', icon: Plus },
    { name: 'Manage Products', path: '/admin/products/manage', icon: Package },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-navy text-white transform transition-transform duration-300 lg:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:w-64 lg:min-h-screen p-6 flex flex-col`}>
        <div className="flex items-center justify-between mb-8 lg:block">
          <div>
            <h2 className="text-xl font-bold">Admin Panel</h2>
            <p className="text-gray-400 text-sm">Shree Ganesh Enterprises</p>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Logged in as:</p>
          <p className="font-medium mb-4 truncate">{user?.name}</p>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
