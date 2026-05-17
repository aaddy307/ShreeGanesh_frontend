import HeroSection from '../../components/home/HeroSection';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import Categories from '../../components/home/Categories';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import ContactCTA from '../../components/home/ContactCTA';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <ContactCTA />
    </main>
  );
};

export default Home;