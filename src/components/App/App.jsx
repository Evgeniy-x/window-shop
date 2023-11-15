import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import BusinessCard from '../BusinessCard/BusinessCard';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<BusinessCard />} />
    </Routes>
  );
}
