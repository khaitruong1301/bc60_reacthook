import React, { useState,useRef } from 'react'

//useRef dùng để làm gì
//useRef khác useState chỗ nào
// => useRef sẽ lưu lại giá trị sau mỗi lần render và khi thay đổi giá trị giao diện không render lại. Thường dùng cho việc lấy giá trị từ input form mà các giá trị đó không cần hiển thị lên giao diện
const UseRefDemo = () => {
    const [userLogin,setUserLogin] = useState({
        email:'',
        password:''
    })
    const refUserLogin = useRef({
        email:'',
        password:''
    })
    const [number,setNumber] = useState(1)

    const userLoginInfo = {
        email: '',
        password:''
    }

    console.log(refUserLogin.current)
    const handleChange = (e) => {
        const {id,value} = e.target; //Lấy input từ form
        // setUserLogin({ //set vào giá trị state
        //     ...userLogin,
        //     [id]:value
        // })
        refUserLogin.current[id] = value
        // userLoginInfo[id] = value
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refUserLogin.current)
        // console.log(userLoginInfo)
    }

  return (
    <form className='container' onSubmit={handleSubmit}>
        <button className='btn btn-success' onClick={()=>{
            setNumber(number + 1)
        }}>{number}</button>
        <h3>Login</h3>
        <div className='form-group'>
            <p>email</p>
            <input className='form-control' id="email" name="email" onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id="password" name="password" type='password' onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <button className='btn btn-success' type='submit'>Login</button>
        </div>
    </form>
  )
}

export default UseRefDemo