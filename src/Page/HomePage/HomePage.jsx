import { Hero } from '../../components/Hero';
import { Catalog } from '../../components/Catalog';
import { OurWorks } from '../../components/OurWorks/OurWorks';
import { Guarantees } from '../../components/Guarantees/Guarantees';

const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <OurWorks />
      <Guarantees />
    </>
  );
};

export default Home;
