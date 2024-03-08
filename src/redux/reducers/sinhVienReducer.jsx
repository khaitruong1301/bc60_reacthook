import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';
import axios from 'axios';
import { history } from '../..';

const initialState = {
    arrSinhVien:[],
    loading:false 
}

const sinhVienReducer = createSlice({
  name: 'sinhVienReducer',
  initialState,
  reducers: {
    setApiSinhVienAction: (state,action) =>{
        state.arrSinhVien = action.payload
    },
    setLoadingAction: (state,action) => {
        state.loading = action.payload
    }
  },
  extraReducers: (builder) => {
    //Trạng thái api: 
    // pending (lúc gọi và chờ server xử lý)
    // fullfill: api đã xử lý thành công
    //reject : api đã xử lý thất bại
    builder.addCase(xoaSinhVienAsyncThunk.pending, (state,action)=>{
        state.loading = true
    });

    builder.addCase(xoaSinhVienAsyncThunk.fulfilled,(state,action) => {
        state.loading = false
    })

    builder.addCase(xoaSinhVienAsyncThunk.rejected,(state,action) => {
        state.loading = false
    })
  }
});

export const {setApiSinhVienAction,setLoadingAction} = sinhVienReducer.actions

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
    return async (dispatch,getState) => {

        //Thay đổi state loading hiển thị
        dispatch(setLoadingAction(true))
        //xử lý api
        const res = await axios({
            url:`https://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
            method:'DELETE'
        });

        //Sau khi xử lý api tắt loading
        dispatch(setLoadingAction(false))
        //Sau khi xoá để load lại danh sách sinh viên thì chỉ cần dispatch lại actionThunk layDanhSachSinhVien
        const actionThunk = layDanhSachSinhVienActionAsync()
        dispatch(actionThunk)
    }
}


// Thực hiện chức năng xoá sử dụng actionAsyncThunk
export const xoaSinhVienAsyncThunk = createAsyncThunk('sinhVienReducer/xoaSinhVien',async (maSinhVien,{dispatch,getState})=> {
    console.log(getState());
    //Xử lý api 
    const res = await axios({
        url:`https://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
        method:'DELETE'
    });
    //gọi lại logic action lấy danh sách sinh viên sau khi xử lý xong việc xoá
    const actionLayDanhSachSinhVien = layDanhSachSinhVienActionAsync()
    dispatch(actionLayDanhSachSinhVien)
    return true;
})