import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';
import axios from 'axios';
import { history } from '../..';

const initialState = {
    arrSinhVien:[]
}

const sinhVienReducer = createSlice({
  name: 'sinhVienReducer',
  initialState,
  reducers: {
    setApiSinhVienAction: (state,action) =>{
        state.arrSinhVien = action.payload
    }
  }
});

export const {setApiSinhVienAction} = sinhVienReducer.actions

export default sinhVienReducer.reducer

/// -------------- action async (action thunk) ----------
export const layDanhSachSinhVienActionAsync = () => {
    return async (dispatch) =>{
        //Xử lý logic gọi api
        const res = await axios({
            url: 'https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
            method:'GET'
        })
        //Sau khi có dữ liệu từ api dùng dispatch đưa lên redux
        const action = setApiSinhVienAction(res.data);
        dispatch(action)
    }
}


export const themSinhVienActionAsync = (dataSinhVien) => {
    return async (dispatch)=>{
        const res = await axios({
            url:'https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
            method:'POST',
            data: dataSinhVien
        });
        //Sau khi thêm dữ liệu thành công chuyển hướng về trang danh sách sinh viên
        history.push('/danh-sach-sinh-vien')
        //Sau khi thêm thành công 
        //Gọi lại api lay danh sach sinh vien
        const actionThunk = layDanhSachSinhVienActionAsync()
        dispatch(actionThunk)
    }
}


export const xoaSinhVienApiActionAsync = (maSinhVien) => {

    return async dispatch => {
        const res = await axios({
            url:`https://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
            method:'DELETE'
        });

        //Sau khi xoá để load lại danh sách sinh viên thì chỉ cần dispatch lại actionThunk layDanhSachSinhVien
        const actionThunk = layDanhSachSinhVienActionAsync()
        dispatch(actionThunk)
    }
}