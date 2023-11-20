import css from './HomePage.module.css';
import { Hero } from '../../components/Hero';
import { Catalog } from '../../components/Catalog';

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
    </>
  );
};

export default Home;
