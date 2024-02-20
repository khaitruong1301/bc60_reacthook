import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import ChangeNumber from './Pages/UseStateDemo/ChangeNumber';
import FormUser from './Pages/UseStateDemo/FormUser';
import UseEffectBasic from './Pages/UseEffectDemo/UseEffectBasic';
import UseEffect_DidMount from './Pages/UseEffectDemo/UseEffect_DidMount';
import Detail from './Pages/Detail';
import UseEffect_Unmount from './Pages/UseEffectDemo/UseEffect_Unmount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate />}>
        <Route path='use-state-demo1' element={<ChangeNumber />}></Route>
        <Route path='use-state-demo2' element={<FormUser />}></Route>
        <Route path='use-effect-basic' element={<UseEffectBasic />}></Route>
        <Route path='use-effect-didmount' element={<UseEffect_DidMount />}></Route>
        <Route path='use-effect-unmount' element={<UseEffect_Unmount />}></Route>
        
        <Route path='detail'>
          <Route path=':id' element={<Detail />}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

