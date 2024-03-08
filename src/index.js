import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import ChangeNumber from './Pages/UseStateDemo/ChangeNumber';
import FormUser from './Pages/UseStateDemo/FormUser';
import UseEffectBasic from './Pages/UseEffectDemo/UseEffectBasic';
import UseEffect_DidMount from './Pages/UseEffectDemo/UseEffect_DidMount';
import Detail from './Pages/Detail';
import UseEffect_Unmount from './Pages/UseEffectDemo/UseEffect_Unmount';
import HookUseCallBack from './Pages/UseCallBackDemo/HookUseCallBack';
import UseMemoDemo from './Pages/UseMemoDemo/UseMemoDemo';
import UseRefDom from './Pages/UseRefDemo/UseRefDom';
import UseRefDemo from './Pages/UseRefDemo/UseRefDemo';
//Cấu hình redux
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ChangeNumberRedux from './Pages/ReduxDemo/ChangeNumberRedux';
import FakeBookApp from './Pages/ReduxDemo/FakeBookApp';
import Login from './Pages/Login';
import ForgotPass from './Pages/ForgotPass';
import Profile from './Pages/Profile';
import UseParamDemo from './Pages/UseParamDemo';
import Search from './Pages/Search';
import CustomHookDemo from './Pages/CustomHookDemo';
//Cấu hình chuyển hướng trang khi xử lý không phải là function component
import {createBrowserHistory} from 'history'
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ThemSinhVien from './Pages/QuanLySinhVien/ThemSinhVien';
import ThongTinSinhVien from './Pages/QuanLySinhVien/ThongTinSinhVien';
import DanhSachSinhVien from './Pages/QuanLySinhVien/DanhSachSinhVien';
import DemoModalHoc from './Pages/DemoModalHoc';
import Register from './Pages/Register';
import DemoContainerComponent from './Pages/DemoContainerComponent';
import HomeMobile from './Pages/HomeMobile.jsx';
import ReponsiveItem from './Templates/ReponsiveItem.jsx'
export const history =  createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route element={<ReponsiveItem component={<Home />} mobileComponent={<HomeMobile />} />} index ></Route>
          <Route path='product-list' element={<ProductList />}  ></Route>
          <Route path='use-state-demo1' element={<ChangeNumber />}></Route>
          <Route path='use-state-demo2' element={<FormUser />}></Route>
          <Route path='use-effect-basic' element={<UseEffectBasic />}></Route>
          <Route path='use-effect-didmount' element={<UseEffect_DidMount />}></Route>
          <Route path='use-effect-unmount' element={<UseEffect_Unmount />}></Route>
          <Route path='use-callback-demo' element={<HookUseCallBack />}></Route>
          <Route path='use-memo-demo' element={<UseMemoDemo />}></Route>
          <Route path='use-ref-dom' element={<UseRefDom />}></Route>
          <Route path='use-ref-demo' element={<UseRefDemo />}></Route>
          <Route path='use-redux-change-number' element={<ChangeNumberRedux />}></Route>
          <Route path='use-redux-fake-book-app' element={<FakeBookApp />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='forgot-pass' element={<ForgotPass />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='custom-hook-demo' element={<CustomHookDemo />}></Route>
          <Route path='them-sinh-vien' element={<ThemSinhVien />}></Route>
          
          <Route path='danh-sach-sinh-vien' element={<DanhSachSinhVien />}></Route>
          <Route path='thong-tin-sinh-vien'>
            <Route path=':maSinhVien'  element={<ThongTinSinhVien />}></Route>
          </Route>
          <Route path='useparam-demo'>
            <Route path=':thamSo' element={<UseParamDemo />}></Route>
          </Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='hoc-modal' element={<DemoModalHoc />}></Route>
          <Route path='container-modal' element={<DemoContainerComponent />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </Provider>
  </HistoryRouter>
);

