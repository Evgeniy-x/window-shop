import css from './HomePage.module.css';
import { Hero } from '../../components/Hero';
import { Catalog } from '../../components/Catalog';
import { OurWorks } from '../../components/OurWorks/OurWorks';
import { Guarantees } from '../../components/Guarantees/Guarantees';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <OurWorks />
      <Guarantees />
      <Footer />
    </>
  );
};

export default Home;
