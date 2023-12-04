import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminProductList from './container/AdminProductList';
import CampMain from './camp/containers/CampMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/productlist" element={<AdminProductList />} />

        {/* 캠핑 */}
        <Route path="/api/camp/index" element={<CampMain />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
