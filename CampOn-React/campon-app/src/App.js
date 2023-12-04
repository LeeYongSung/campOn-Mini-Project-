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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/productlist" element={<AdminProductList />} />

        {/* 캠핑 */}
        <Route path="/api/camp/index" element={<CampMain />} />
        <Route path="/api/camp/campproducts" element={<CampProducts />} />
        <Route path="/user/login" element={<UserLoginCon />} />
        <Route path="/user/join" element={<UserJoinCon />} />
        <Route path="/user/update" element={<UserUpdateCon />} />
        <Route path="/user/mypage" element={<UserMypageCon />} />
        <Route path="/admin/productadd" element={<AdminProductAddCon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
