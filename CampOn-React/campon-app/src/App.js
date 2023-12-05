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
import AdminMemberListCon from './containers/admin/AdminMemberListCon';
import AdminProductUpdCon from './containers/admin/AdminProductUpdCon';
import AdminCampListCon from './containers/admin/AdminCampListCon';
import AdminCampAddCon from './containers/admin/AdminCampAddCon';
import AdminCampUpdCon from './containers/admin/AdminCampUpdCon';
import AdminCampDAddCon from './containers/admin/AdminCampDAddCon';
import AdminCampDUpdCon from './containers/admin/AdminCampDUpdCon';

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
        <Route path="/admin/productupdate/:productNo" element={<AdminProductUpdCon />} />
        <Route path="/admin/memberList" element={<AdminMemberListCon />} />
        <Route path="/admin/campproductlist" element={<AdminCampListCon />} />
        <Route path="/admin/campproductadd" element={<AdminCampAddCon />} />
        <Route path="/admin/campproductupdate" element={<AdminCampUpdCon />} />
        <Route path="/admin/campdetailinsert" element={<AdminCampDAddCon />} />
        <Route path="/admin/campdetailupdate" element={<AdminCampDUpdCon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
