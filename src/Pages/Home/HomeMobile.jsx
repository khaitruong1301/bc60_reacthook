import React, { useEffect } from 'react'
import { getApiActionAsync } from '../../redux/reducers/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useHome from './useHome'

const HomeMobile = () => {
    const {arrProduct} = useHome()
  
    return (
        <div className='container'>
            <h3>Danh sách sản phẩm</h3>
            {arrProduct.map((prod) => {
                return <div className='d-flex mt-2 border border-color-dark'>
                    <div className='item' style={{ height: 100 }}>
                        <img src={prod.image} alt='...' className='h-100' />
                    </div>
                    <div className='product-detail mt-2'>
                        <h3>{prod.name}</h3>
                        <p>{prod.description}</p>
                        <div className='button text-end'>
                            <NavLink className="btn btn-dark" to={`/detail/${prod.id}`}>View detail</NavLink>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default HomeMobile