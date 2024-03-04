//rafce
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { http } from '../util/config'

const Profile = () => {
  const [userProfile, setUserProfile] = useState({})
  console.log(userProfile)

  const getApiProfile = async () => {
    try {
      const res = await http.post('/api/Users/getProfile');
      console.log(res.data.content)
      setUserProfile(res.data.content)
    }catch(err) {
      console.log(err)
    }

   
  }

  useEffect(() => {
    //Gọi api lấy thông tin profile
    getApiProfile()
  }, [])

  
  return (
    <div className='container'>
      <h3>Profile</h3>
      <div className='row mt-2'>
        <div className='col-3'>
          <div className='w-100' style={{ width: 300, height: 300 }}>
            <img src={userProfile.avatar} alt='...' className='w-100' />
          </div>
        </div>
        <div className='col-9'>
          <form className='row'>
            <div className='col-6'>
              <div className='form-group'>
                <p>email</p>
                <input className='form-control' readOnly disabled value={userProfile.email} name='email' />
              </div>
              <div className='form-group'>
                <p>name</p>
                <input className='form-control'  value={userProfile.name} name='name' />
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group'>
                <p>Phone</p>
                <input className='form-control' value={userProfile.phone} name='phone' />
              </div>
              <div className='form-group'>
                <p>Password</p>
                <input className='form-control' value={userProfile.password} name='password' type='password' />
              </div>
              <div className='form-group'>
              <button className='btn btn-success mt-2' type='submit'>Update</button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile