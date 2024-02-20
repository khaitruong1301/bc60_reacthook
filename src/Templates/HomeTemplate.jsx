/*rafce */
import React from 'react'
import Header from '../Components/Header'
import {Outlet} from 'react-router-dom'
const HomeTemplate = () => {
    
  return (
    <div>
        <Header/>
        <div className='content' style={{minHeight:650}}>
            <Outlet></Outlet>
        </div>
        <div className='p-3 text-center bg-dark text-white'>
            Footer template
        </div>
    </div>
  )
}

export default HomeTemplate