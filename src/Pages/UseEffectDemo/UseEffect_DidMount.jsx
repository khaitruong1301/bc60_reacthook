import React, { useEffect, useState } from 'react'
import axios from 'axios'
//useEffectDidmount dùng cho các api get All
const UseEffect_DidMount = () => {
    const [like,setLike] = useState(1)
    const [arrProduct,setArrProduct] = useState([])
    // console.log(arrProduct)
    const getAllProductApi = async () => {
        const res = await axios({
            url:'https://shop.cyberlearn.vn/api/Product',
            method:'GET'
        });
        //Sau khi lấy dữ liệu từ api về thì đưa vào state arrProduct thông qua phương thức setArrayProduct
        setArrProduct(res.data.content)
    }

    useEffect(()=>{
        //useEffect chứa dependency rỗng => dùng tương tự lifecycle componentDidmount cho việc gọi các api getall
        console.log('useEffect run')
        getAllProductApi()
    },[])


  return (
    <div className='container'>
        <button className='btn btn-primary' onClick={()=>{
            setLike(like + 1)
        }}><i className='fa fa-thumbs-up'></i> {like}</button>
        <h3>Product list</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>img</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {arrProduct.map((prod)=>{
                    return  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td><img src={prod.image} width={50} height={50} alt="..."/></td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default UseEffect_DidMount