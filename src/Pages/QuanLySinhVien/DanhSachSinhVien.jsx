import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { layDanhSachSinhVienActionAsync, xoaSinhVienApiActionAsync, xoaSinhVienAsyncThunk } from '../../redux/reducers/sinhVienReducer'
import ThemSinhVien from './ThemSinhVien'
import Loading_API from './Loading_API'
const DanhSachSinhVien = () => {
    const {arrSinhVien} = useSelector(state => state.sinhVienReducer)
    console.log(arrSinhVien)
    
    const dispatch = useDispatch()

    const layDanhSachSinhVienApi = async () => {
        const actionThunk = layDanhSachSinhVienActionAsync();
        dispatch(actionThunk)
    }

    useEffect(()=> {
        layDanhSachSinhVienApi()
    },[])



  return (
    <div className='container'>
        <h3>Danh sách sinh viên</h3>
        <NavLink to="/them-sinh-vien" className={'me-2 my-2 btn btn-success'}>Thêm sinh viên</NavLink>

        <ThemSinhVien />


        <table className='table'>
            <thead>
                <tr>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th></th>             
                </tr>
            </thead>
            <tbody>
                {arrSinhVien.map((sv)=>{
                    return <tr key={sv.maSinhVien}>
                    <td>{sv.maSinhVien}</td>
                    <td>{sv.tenSinhVien}</td>
                    <td>{sv.email}</td>
                    <td>{sv.soDienThoai}</td>
                    <td>
                        <NavLink to={`/thong-tin-sinh-vien/${sv.maSinhVien}`} className={'btn btn-primary mx-2'}>Sửa</NavLink>
                        <button className={'btn btn-danger mx-2 '} onClick={()=>{
                            //Cách 1:
                            // const actionThunk = xoaSinhVienApiActionAsync(sv.maSinhVien);
                            // dispatch(actionThunk)
                            //cách 2: dùng async thunk
                            const action = xoaSinhVienAsyncThunk(sv.maSinhVien)
                            dispatch(action)
                        }}> Xoá 
                        
                        <Loading_API />
                        
                        </button>
                    </td>
                </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}

export default DanhSachSinhVien