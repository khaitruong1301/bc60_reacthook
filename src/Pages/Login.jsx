import React from 'react'
//hook lấy dữ liệu từ form và validation
import {useFormik} from 'formik'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate()
    const frmLogin = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank').email('email is invalid').matches(/.*cybersoft.*/,'lỗi regex'),
            password:yup.string().required('password cannot be blank').min(6,'lỗi min').max(32,'lỗi max')
        }),
        onSubmit:(userLogin) => {
            console.log(userLogin)
            //Xử lý chuyển hướng trang tại function
            if(userLogin.email === 'cybersoft@gmail.com' && userLogin.password === '123456'){
                navigate('/profile')
            }else{
                navigate('/forgot-pass')
            }
        }
    })

  return (
    <form className='container' onSubmit={frmLogin.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control' id="email" name="email" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
            {frmLogin.errors.email && <p className='text text-danger'>{frmLogin.errors.email}</p> }
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id="password" name="password" type='password' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
            {frmLogin.errors.password && <p className='text text-danger'>{frmLogin.errors.password}</p> }
        </div>
        <div className='form-group'>
            <button className='btn btn-success' type='submit'>Password</button>
        </div>
    </form>
  )
}

export default Login