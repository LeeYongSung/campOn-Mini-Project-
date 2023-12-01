import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminProductList from './container/AdminProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/productlist" element={<AdminProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
