import css from './HomePage.module.css';
import { Hero } from '../../components/Hero';
import { Catalog } from '../../components/Catalog';
import { OurWorks } from '../../components/OurWorks/OurWorks';

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <OurWorks />
    </>
  );
};

export default Home;
