import React, { useEffect, useState } from 'react'
import { http } from '../../util/config'
import { useDispatch, useSelector } from 'react-redux'
import { getApiActionAsync, setProductAction } from '../../redux/reducers/productReducer'
import { NavLink } from 'react-router-dom'
import useHome from './useHome'
const Home = () => {

    const { arrProduct } = useHome()

    return (
        <div className='container'>
            <h3>Home</h3>
            <div className='row'>
                {arrProduct.map((prod) => {
                    return <div className='col-md-4 mt-2' key={prod.id}>
                        <div className='card'>
                            <img src={prod.image} alt='...' />
                            <div className='card-body'>
                                <h3>{prod.name}</h3>
                                <p>{prod.price}</p>
                                <NavLink to={`/detail/${prod.id}`} className={'btn btn-dark'}>View detail</NavLink>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Home