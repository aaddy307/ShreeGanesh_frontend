import { Link } from 'react-router-dom';
import { FEATURED_CATEGORIES } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { Zap, Headphones, Music, Battery, Watch, Speaker } from 'lucide-react';

const iconMap = {
  '⚡': Zap,
  '🎧': Headphones,
  '🎵': Music,
  '🔋': Battery,
  '⌚': Watch,
  '🔊': Speaker,
};

const Categories = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className={`section-title text-center transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          Shop by Category
        </h2>
        <p className={`section-subtitle text-center transition-all duration-500 delay-100 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          Browse our wide range of products
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {FEATURED_CATEGORIES.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Package;
            return (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className={`group p-6 text-center rounded-xl border-2 border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 text-accent">
                  <IconComponent className="w-full h-full" />
                </div>
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
