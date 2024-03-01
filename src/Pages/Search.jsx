//rafce
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import axios from 'axios'
const Search = () => {
    const tuKhoaRef = useRef('')
    const [searchParam,setSearchParam] = useSearchParams({
        tuKhoa: '',
        // thamSo2:''
    });
    const [arrProduct,setArrayProduct] = useState([])
    const tuKhoa = searchParam.get('tuKhoa');

    console.log(arrProduct)

    const getApiProducts = async (keyword) => {
        const res = await axios({
            url:`https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method:'GET'
        });
        //Sau khi có dữ liệu từ api => set vào arrProduct
        setArrayProduct(res.data.content)
    }

    useEffect(()=>{
        //Lấy dữ liệu param khi giao diện vừa load xong
        getApiProducts(tuKhoa)        
    },[tuKhoa])
    const handleChange = (e) => {
        tuKhoaRef.current = e.target.value;
        console.log(tuKhoaRef.current)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSearchParam({
            tuKhoa: tuKhoaRef.current,
            // thamSo2:'dsadsa'
        })
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Tìm kiếm sản phẩm</h3>
        <div className='form-group'>
            <input className='form-control' name='tuKhoa' id="tuKhoa" onChange={handleChange}/>
            <button className='btn btn-dark my-2'>Tìm kiếm</button>
        </div>

        <div className='content'>
            <h5>Kết quả tìm kiếm</h5>
            <div className='row'>
                {arrProduct.map((prod)=>{
                    return <div className='col-4 mt-2' key={prod.id}>
                    <div className='card'>
                        <img src={prod.image} alt="..." />
                        <div className='card-body'>
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                            <NavLink to={`/detail/${prod.id}`} className='btn btn-primary'>View detail</NavLink>
                        </div>
                    </div>
                </div>
                })}
                
            </div>
        </div>

    </form>
  )
}

export default Search