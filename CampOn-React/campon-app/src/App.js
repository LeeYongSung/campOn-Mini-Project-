import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CampMain from './containers/camp/CampMain';
import CampProducts from './containers/camp/CampProducts';
import UserLoginCon from './containers/user/UserLoginCon';
import UserJoinCon from './containers/user/UserJoinCon';
import UserUpdateCon from './containers/user/UserUpdateCon';
import UserMypageCon from './containers/user/UserMypageCon';
import AdminProductAddCon from './containers/admin/AdminProductAddCon';
import Index from './pages/Index';
import AdminProductList from './containers/admin/AdminProductList';
import ProductIndexContainer from './containers/product/ProductIndexContainer';
import ProductListContainer from './containers/product/ProductListContainer';
import CampProduct from './containers/camp/CampProduct';
import CampDetail from './containers/camp/CampDetail';
import Favorites from './containers/camp/Favorites';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* 캠프온 메인 (추후 캠프 index랑 연결) */}
        <Route path="/" element={<Index />} />

        {/* 상품 */}
        <Route path="/product" element={<ProductIndexContainer />} />
        <Route path="/productList" element={<ProductListContainer />} />

        {/* 캠핑 */}
        <Route path="/api/camp/index" element={<CampMain />} />
        <Route path="/api/camp/campproducts/:campTypeNo" element={<CampProducts />} />
        <Route path="/api/camp/campproduct/:no" element={<CampProduct />} />
        <Route path="/api/camp/campdetail/:no" element={<CampDetail />} />
        <Route path="/api/camp/favorites" element={<Favorites />} />

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
