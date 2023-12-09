import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
