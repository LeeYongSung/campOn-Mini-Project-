import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CategoryProvider } from './apis/CategoryContext';
import { category } from './apis/product';
import AdminProductAddCon from './containers/admin/AdminProductAddCon';
import AdminProductList from './containers/admin/AdminProductList';
import CampBoardMainCon from './containers/board/CampBoardMainCon';
import CampBoardReadCon from './containers/board/CampBoardReadCon';
import CampDetail from './containers/camp/CampDetail';
import CampMain from './containers/camp/CampMain';
import CampProduct from './containers/camp/CampProduct';
import CampProducts from './containers/camp/CampProducts';
import Favorites from './containers/camp/Favorites';
import ProductIndexContainer from './containers/product/ProductIndexContainer';
import ProductListContainer from './containers/product/ProductListContainer';
import UserJoinCon from './containers/user/UserJoinCon';
import UserLoginCon from './containers/user/UserLoginCon';
import UserMypageCon from './containers/user/UserMypageCon';
import UserUpdateCon from './containers/user/UserUpdateCon';
import Index from './pages/Index';
// import { category } from './apis/product';
// import { CategoryProvider } from './apis/CategoryContext';
// import CampProduct from './containers/camp/CampProduct';
// import CampDetail from './containers/camp/CampDetail';
// import Favorites from './containers/camp/Favorites';
import Reservate from './containers/camp/Reservate';
import Complete from './containers/camp/Complete';
import Reservation from './containers/camp/Reservation';
import Schedule from './containers/camp/Schedule';

function App() {
  return (
    <CategoryProvider>
      <BrowserRouter>
        <Routes>
          {/* 캠프온 메인 (추후 캠프 index랑 연결) */}
          <Route path="/" element={<Index />} />

          {/* 상품 */}
          <Route path="/product" element={<ProductIndexContainer />} />
          <Route path="/productList" params={category} element={<ProductListContainer />} />

          {/* 캠핑 */}
          <Route path="/api/camp/indpex" element={<CampMain />} />
          <Route path="/api/camp/campproducts/:campTypeNo" element={<CampProducts />} />
          <Route path="/api/camp/campproduct/:no" element={<CampProduct />} />
          <Route path="/api/camp/campdetail/:no" element={<CampDetail />} />
          <Route path="/api/camp/favorites" element={<Favorites />} />
          <Route path="/api/camp/reservate/:no" element={<Reservate />} />
          <Route path="/api/camp/complete" element={<Complete />} />
          <Route path="/api/camp/reservation" element={<Reservation />} />
          <Route path="/api/camp/schedule" element={<Schedule />} />

          {/* 유저 */}
          <Route path="/user/login" element={<UserLoginCon />} />
          <Route path="/user/join" element={<UserJoinCon />} />
          <Route path="/user/update" element={<UserUpdateCon />} />
          <Route path="/user/mypage" element={<UserMypageCon />} />

          {/* 관리자 */}
          <Route path="/admin/productlist" element={<AdminProductList />} />
          <Route path="/admin/productadd" element={<AdminProductAddCon />} />

          {/* 게시판 */}
          <Route path="/board/index" element={<CampBoardMainCon />} />
          <Route path="/board/crread" element={<CampBoardReadCon />} />
        </Routes>
      </BrowserRouter>
    </CategoryProvider>
  );
}

export default App;
