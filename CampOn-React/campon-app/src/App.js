import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminProductList from './containers/AdminProductList';
import CampMain from './camp/containers/CampMain';
import CampProducts from './camp/containers/CampProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/productlist" element={<AdminProductList />} />

        {/* 캠핑 */}
        <Route path="/api/camp/index" element={<CampMain />} />
        <Route path="/api/camp/campproducts" element={<CampProducts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
