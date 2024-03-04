import React, { useEffect, useState } from 'react'
import {http} from '../util/config'
import { useDispatch, useSelector } from 'react-redux'
import { getApiActionAsync, setProductAction } from '../redux/reducers/productReducer'
import { NavLink } from 'react-router-dom'
const Home = () => {

    // const [arrProduct,setArrayProduct] = useState([])
    const {arrProduct} = useSelector(state => state.productReducer)
    const dispatch = useDispatch()
    console.log(arrProduct)
    const getProductApi = async () => {
        // const res = await http.get('/api/product');
        // //Sau khi lấy dữ liệu từ api về đưa vào state
        // const action = setProductAction(res.data.content)
        // dispatch(action)
        //1 - Cần đưa logic api lên redux (tái sử dụng trên nhiều component khác nhau)
        /*
            Có 2 loại action trong redux:
            + action = {type: 'name', payload: data}
            + action_async = (dispatch) => {
                //xử lý logic 
                sau khi có dữ liệu dùng tham số dispatch để đưa lên redux
            }
        */
       const action = getApiActionAsync;
       dispatch(action)
    }

    useEffect(()=>{
        getProductApi()
    },[])
  return (
    <div className='container'>
        <h3>Home</h3>
        <div className='row'>
            {arrProduct.map((prod)=>{
                return <div className='col-4 mt-2' key={prod.id}>
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