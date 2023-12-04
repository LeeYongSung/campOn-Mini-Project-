import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminProductList from './container/AdminProductList';
import UserLoginCon from './container/UserLoginCon';
import UserJoinCon from './container/UserJoinCon';
import UserUpdateCon from './container/UserUpdateCon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/productlist" element={<AdminProductList />} />
        <Route path="/user/login" element={<UserLoginCon />} />
        <Route path="/user/join" element={<UserJoinCon />} />
        <Route path="/user/update" element={<UserUpdateCon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
