import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiActionAsync } from '../redux/reducers/productReducer';

const ProductList = () => {
    //Lấy dữ liệu product từ api về
    const {arrProduct} = useSelector(state => state.productReducer);
    console.log(arrProduct)
    const dispatch = useDispatch()
    const getProductApi = () => {
        const action = getApiActionAsync
        dispatch(action)
    }
    useEffect(()=>{
        getProductApi()
    },[])

  return (
    <div className='container'>
        <h3>ProductList</h3>

    </div>
  )
}

export default ProductList