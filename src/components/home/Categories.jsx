import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Mobile Covers', icon: 'smartphone' },
    { name: 'Chargers', icon: 'charger' },
    { name: 'Power Banks', icon: 'battery_charging_full' },
    { name: 'Earphones', icon: 'headphones' },
    { name: 'Screen Protectors', icon: 'screen_lock_portrait' },
    { name: 'Cables', icon: 'cable' },
  ];

  return (
    <section className="bg-white py-section-padding">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary mb-2">Shop by Category</h2>
          <div className="w-20 h-1 bg-[#2563EB] mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="group bg-white border border-[#E8ECF4] border-t-4 border-t-primary p-6 text-center hover:shadow-xl hover:translate-y-[-4px] transition-all cursor-pointer block"
            >
              <span className="material-symbols-outlined text-[#2563EB] text-[40px] mb-4">
                {category.icon}
              </span>
              <h3 className="font-body text-sm font-semibold text-primary group-hover:text-[#2563EB] transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
