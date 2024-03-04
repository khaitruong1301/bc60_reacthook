import React from 'react'
import {useFormik} from 'formik'
import { themSinhVienActionAsync } from '../../redux/reducers/sinhVienReducer'
import { useDispatch } from 'react-redux'
const ThemSinhVien = () => {
  const dispatch = useDispatch();
  const frmSV = useFormik({
    initialValues:{
      maSinhVien:'',
      tenSinhVien:'',
      email:'',
      soDienThoai:''
    },
    onSubmit: (values) => {
      console.log(values)
      //Gọi api = cách sử dụng dispatch action thunk 
      const actionThunk = themSinhVienActionAsync(values)
      dispatch(actionThunk)

    }
  })


  return (
    <form onSubmit={frmSV.handleSubmit} className='m-auto container w-100'>
        <h3>Thêm sinh viên</h3>
        <div className='form-group'>
            <p>Mã sinh viên</p>
            <input className='form-control w-50' name="maSinhVien" onChange={frmSV.handleChange} />
        </div>
        <div className='form-group'>
            <p>Tên sinh viên</p>
            <input className='form-control w-50' name="tenSinhVien" onChange={frmSV.handleChange} />
        </div>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control w-50' name="email" onChange={frmSV.handleChange} />
        </div>
        <div className='form-group'>
            <p>Số điện thoại</p>
            <input className='form-control w-50' name='soDienThoai'  onChange={frmSV.handleChange} />
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-dark my-2'>Thêm sinh viên</button>
        </div>
    </form>
  )
}

export default ThemSinhVien