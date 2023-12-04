import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
