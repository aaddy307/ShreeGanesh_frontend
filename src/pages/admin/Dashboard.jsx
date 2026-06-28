import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import productService from '../../services/productService';
import adminService from '../../services/adminService';
import { 
  Package, 
  Menu, 
  ArrowLeft, 
  MessageSquare, 
  Clock, 
  Layers,
  Tag,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    products: 0,
    enquiries: 0,
    brands: 0,
    categories: 0
  });
  const [recentEnquiries, setRecentEnquiries] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const prodData = await productService.getProductCount();
        const enqData = await adminService.getEnquiries();
        const brandData = await adminService.getBrands();
        const catData = await adminService.getCategories();
        
        setStats({
          products: prodData.count || 0,
          enquiries: enqData.length || 0,
          brands: brandData.length || 0,
          categories: catData.length || 0
        });

        // Set recent 5 enquiries
        if (enqData && Array.isArray(enqData)) {
          setRecentEnquiries(enqData.slice(0, 5));
        }
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const analyticsStats = [
    { 
      label: 'Total Products', 
      value: loading ? '...' : stats.products, 
      icon: Package, 
      color: 'bg-blue-50 text-[#2563EB]',
      desc: 'Active items in B2B catalog',
      path: '/admin/products/manage'
    },
    { 
      label: 'Total Enquiries', 
      value: loading ? '...' : stats.enquiries, 
      icon: MessageSquare, 
      color: 'bg-green-50 text-green-600',
      desc: 'Inquiries via website forms',
      path: '/admin/enquiries'
    },
    { 
      label: 'Total Brands', 
      value: loading ? '...' : stats.brands, 
      icon: Tag, 
      color: 'bg-purple-50 text-purple-600',
      desc: 'Configured partner labels',
      path: '/admin/brands'
    },
    { 
      label: 'Total Categories', 
      value: loading ? '...' : stats.categories, 
      icon: Layers, 
      color: 'bg-orange-50 text-orange-600',
      desc: 'Registered product groupings',
      path: '/admin/categories'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-body">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-grow p-6 lg:p-10 min-w-0">
        {/* Toggle Menu for Mobile */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h1 className="text-xl font-headline font-bold text-primary">Admin Panel</h1>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="bg-primary text-white p-2.5 rounded-lg shadow-md"
            aria-label="Open Sidebar Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5">
            <div>
              <h1 className="font-headline text-3xl font-bold text-primary">Dashboard Analytics</h1>
              <p className="text-gray-500 text-sm mt-1">Real-time store catalog metrics and retail customer activity.</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Website
              </Link>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsStats.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#2563EB]/40 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <span className="font-headline text-2xl font-bold text-primary block">
                    {item.value}
                  </span>
                  <div className={`p-3 rounded-lg ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-bold text-primary group-hover:text-[#2563EB] transition-colors">{item.label}</h3>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Enquiries Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#2563EB]" />
                <h2 className="font-headline text-lg font-bold text-primary">Recent 5 Enquiries</h2>
              </div>
              <Link to="/admin/enquiries" className="text-xs font-bold text-[#2563EB] hover:underline">
                View Inbox
              </Link>
            </div>

            {loading ? (
              <div className="p-8 flex justify-center">
                <span className="text-sm text-gray-400">Loading enquiries...</span>
              </div>
            ) : recentEnquiries.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No recent customer enquiries found.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {recentEnquiries.map((enq) => (
                  <div key={enq._id} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row justify-between gap-4 items-start">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-primary">{enq.name}</span>
                        {enq.category && (
                          <span className="bg-[#2563EB]/10 text-[#2563EB] text-[10px] font-bold px-2 py-0.5 rounded">
                            {enq.category}
                          </span>
                        )}
                        <span className="text-gray-400 text-xs flex items-center gap-1 font-semibold ml-auto md:ml-0">
                          <Calendar className="w-3 h-3" />
                          {new Date(enq.createdAt).toLocaleDateString(undefined, {
                            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs text-gray-500 font-semibold">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                          {enq.phone}
                        </span>
                        {enq.email && (
                          <span className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                            {enq.email}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-650 bg-gray-50/50 p-2.5 rounded-lg border border-gray-100 mt-1 italic">
                        "{enq.message}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
