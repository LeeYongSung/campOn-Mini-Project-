import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminProductList from './containers/AdminProductList';
import CampMain from './camp/containers/CampMain';
import CampProducts from './camp/containers/CampProducts';
import AdminProductList from './container/AdminProductList';
import UserLoginCon from './container/UserLoginCon';
import UserJoinCon from './container/UserJoinCon';
import UserUpdateCon from './container/UserUpdateCon';
import UserMypageCon from './container/UserMypageCon';
import AdminProductAddCon from './container/AdminProductAddCon';
import Index from './pages/Index';
import AdminProductList from './containers/AdminProductList';
import ProductIndexContainer from './containers/product/ProductIndexContainer';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* 캠프온 메인 (추후 캠프 index랑 연결) */}
        <Route path="/" element={<Index />} />

        {/* 상품 */}
        <Route path="/product" element={<ProductIndexContainer />} />

        {/* 캠핑 */}
        <Route path="/api/camp/index" element={<CampMain />} />
        <Route path="/api/camp/campproducts" element={<CampProducts />} />

        {/* 유저 */}
        <Route path="/user/login" element={<UserLoginCon />} />
        <Route path="/user/join" element={<UserJoinCon />} />
        <Route path="/user/update" element={<UserUpdateCon />} />
        <Route path="/user/mypage" element={<UserMypageCon />} />

        {/* 관리자 */}
        <Route path="/admin/productlist" element={<AdminProductList />} />
        <Route path="/admin/productadd" element={<AdminProductAddCon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
