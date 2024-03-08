import React from 'react'

const Register = () => {
  return (
    <form className='container'>
        <h3>Register</h3>
        <div className='form-group'>
            <p>email</p>
            <input className='form-control' id="email" name="email" />
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id="password" name="password" />
        </div>
        <div className='form-group'>
            <p>fullName</p>
            <input className='form-control' id="fullName" name="fullName" />
        </div>
        <div className='form-group'>
            <p>phone</p>
            <input className='form-control' id="phone" name="phone" />
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-success mt-2'>Register </button>
        </div>
    </form>
  )
}

export default Register