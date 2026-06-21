import { WHY_CHOOSE_US } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { CheckCircle, DollarSign, Target, MessageCircle } from 'lucide-react';

const iconMap = {
  '✅': CheckCircle,
  '💰': DollarSign,
  '🎯': Target,
  '💬': MessageCircle,
};

const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className={`section-title text-center transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          Why Choose Us
        </h2>
        <p className={`section-subtitle text-center transition-all duration-500 delay-100 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          What makes us different
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || CheckCircle;
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-4 text-accent">
                  <IconComponent className="w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
