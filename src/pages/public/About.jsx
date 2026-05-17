import { BUSINESS_INFO, WHY_CHOOSE_US } from '../../utils/constants';

const About = () => {
  return (
    <main className="py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center mb-8">About Us</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Welcome to Shree Ganesh Enterprises</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Shree Ganesh Enterprises is a trusted electronics and mobile accessories shop located in Ambernath, Maharashtra.
              We have been serving our customers with the best quality products at affordable prices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our owner, {BUSINESS_INFO.owner}, started this business with a vision to provide genuine electronic accessories
              to everyone. We offer both branded and local products to cater to all your needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide quality electronic accessories at the best possible prices while ensuring
              excellent customer service. We strive to be your one-stop destination for all mobile and electronic needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Store Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                <p className="text-gray-600">{BUSINESS_INFO.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Contact</h3>
                <p className="text-gray-600 mb-1">Phone: {BUSINESS_INFO.phone}</p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  WhatsApp: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;