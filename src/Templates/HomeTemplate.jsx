/*rafce */
import React from 'react'
import Header from '../Components/Header'
import {Outlet} from 'react-router-dom'
import ReponsiveItem from '../Templates/ReponsiveItem'
import FooterMobile from '../Components/Footer/FooterMobile'

const FooterDesktop = <div className='p-3 text-center bg-dark text-white'>
Footer template
</div>

const HomeTemplate = () => {
    
  return (
    <div>
        <Header/>
        <div className='content' style={{minHeight:650,marginBottom:100}}>
            <Outlet></Outlet>
        </div>
        <ReponsiveItem component={FooterDesktop} mobileComponent={<FooterMobile />}></ReponsiveItem>
    </div>
  )
}

export default HomeTemplate