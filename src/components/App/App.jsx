import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../Page/HomePage/HomePage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
