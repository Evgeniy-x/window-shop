import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader/AppHeader';

const Layout = () => {
  return (
    <>
      <AppHeader />
      <main style={{ textAlign: 'center' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
