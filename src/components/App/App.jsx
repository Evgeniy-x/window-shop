import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../../Page/Home/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}
