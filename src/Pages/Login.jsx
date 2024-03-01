import React from 'react'
//hook lấy dữ liệu từ form và validation
import { useFormik } from 'formik'
import * as yup from 'yup'
import { json, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

    const navigate = useNavigate()
    const frmLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank').email('email is invalid'),
            password: yup.string().required('password cannot be blank').min(3, 'lỗi min').max(32, 'lỗi max')
        }),
        onSubmit: async (userLogin) => {
            console.log(userLogin)
            //Xử lý chuyển hướng trang tại function
            try {
                //Sau khi submit => gọi api xác thực đăng nhập
                const res = await axios({
                    url: 'https://shop.cyberlearn.vn/api/Users/signin',
                    method: 'POST',
                    data: userLogin // object format giống server qui định
                });
                // đăng nhập thành công thì lưu token vào localstorage
                const token = res.data.content.accessToken;
                const userLoginResult = res.data.content;
                localStorage.setItem('user_login', JSON.stringify(userLoginResult))
                localStorage.setItem('accesstoken', token)
                //chuyển tra profile
                navigate('/profile')
            }catch (err){
                alert(err.response.data.message)
                // alert('đăng nhập thất bại !')
                // navigate('/forgot-pass')
            }
        }
    })

    return (
        <form className='container' onSubmit={frmLogin.handleSubmit}>
            <h3>Login</h3>
            <div className='form-group'>
                <p>Email</p>
                <input className='form-control' id="email" name="email" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                {frmLogin.errors.email && <p className='text text-danger'>{frmLogin.errors.email}</p>}
            </div>
            <div className='form-group'>
                <p>password</p>
                <input className='form-control' id="password" name="password" type='password' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                {frmLogin.errors.password && <p className='text text-danger'>{frmLogin.errors.password}</p>}
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-2' type='submit'>login</button>
            </div>
        </form>
    )
}

export default Login