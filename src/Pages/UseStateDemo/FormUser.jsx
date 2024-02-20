import React,{useState} from 'react'

const FormUser = () => {
    const [userLogin,setUserLogin] = useState({
        email:'',
        password:''
    });
    console.log(userLogin)
    const handleChange = (e) => {
        const {value,id} = e.target;
        setUserLogin({
            ...userLogin, //lưu lại giá trị cũ
            [id]: value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(userLogin)
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control' name='email' id="email" onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <p>Password</p>
            <input className='form-control' name='password' id="password" type='password' onChange={handleChange} />
        </div>
        <div className='form-group'>
            <button className='btn btn-dark mt-2' type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default FormUser