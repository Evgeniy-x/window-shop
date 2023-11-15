import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}
