import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import AdminProductList from './containers/AdminProductList';
import ProductIndexContainer from './containers/product/ProductIndexContainer';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<ProductIndexContainer />} />
        <Route path="/admin/productlist" element={<AdminProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
