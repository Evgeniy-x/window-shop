import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../Page/HomePage/HomePage';
import CatalogesPage from '../../Page/CatalogesPage/CatalogesPage';
import { WoodenGlazing } from '../WoodenGlazing';
import { AluminumGlazing } from '../AluminumGlazing';
import { PlasticGlazing } from '../PlasticGlazing';
import { FrenchGlazing } from '../FrenchGlazing';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="wooden" element={<WoodenGlazing />} />
        <Route path="aluminum" element={<AluminumGlazing />} />
        <Route path="plastic" element={<PlasticGlazing />} />
        <Route path="french" element={<FrenchGlazing />} />
        <Route path="cataloges" element={<CatalogesPage />} />
      </Route>
    </Routes>
  );
}
