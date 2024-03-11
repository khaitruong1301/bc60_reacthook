import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterMobile = () => {



  return (
    <div 
    className='bg-dark text-white p-3'
    style={{
        position:'fixed',
        bottom:0,
        left:0,
        width:'100%',
    }}>
        <div className='row text-center'>
            <div className='col-4'>
                <NavLink to={'/profile'} className={'nav-link'} style={({isActive})=> isActive ? {
                    color:'orange'
                } : {}}>
                    <i className='fa fa-user'></i>
                    <br />
                    <p>Profile</p>
                </NavLink>
            </div>
            <div className='col-4'>
                <NavLink to={'/'} className={'nav-link'} style={({isActive})=> isActive ? {
                    color:'orange'
                } : {}}>
                    <i className='fa fa-home'></i>
                    <br />
                    <p>Home</p>
                </NavLink>
            </div>
            <div className='col-4'>
                <NavLink to={'/search'} className={'nav-link'} style={({isActive})=> isActive ? {
                    color:'orange'
                } : {}}>
                    <i className='fa fa-search'></i>
                    <br />
                    <p>Search</p>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default FooterMobile