import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../Page/HomePage/HomePage';
import { WoodenGlazing } from '../WoodenGlazing';
import { AluminumGlazing } from '../AluminumGlazing';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog/:catalogId" element={<WoodenGlazing />} />
      </Route>
    </Routes>
  );
}
