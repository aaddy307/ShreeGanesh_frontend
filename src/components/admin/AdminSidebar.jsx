import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
  LayoutDashboard,
  Package,
  Layers,
  Tag,
  MessageSquare,
  Contact,
  X,
  Menu
} from 'lucide-react';

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Manage Products', path: '/admin/products/manage', icon: Package },
    { name: 'Categories', path: '/admin/categories', icon: Layers },
    { name: 'Brands', path: '/admin/brands', icon: Tag },
    { name: 'Enquiry List', path: '/admin/enquiries', icon: MessageSquare },
    { name: 'Edit Contact', path: '/admin/contact', icon: Contact },
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

      <div className="fixed lg:sticky lg:top-0 lg:h-screen inset-y-0 left-0 z-50 w-64 bg-primary text-white transform transition-transform duration-300 sm:translate-x-0 -translate-x-full lg:translate-x-0 p-6 flex flex-col shrink-0">
        <div className="flex items-center justify-between mb-8 lg:block">
          <div>
            <h2 className="text-xl font-headline font-bold">Admin Panel</h2>
            <p className="text-gray-400 text-sm">Shree Ganesh Enterprises</p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-semibold ${isActive(item.path)
                  ? 'bg-[#2563EB] text-white'
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
          <p className="font-medium mb-4 truncate text-white">{user?.name}</p>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-bold text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
