import { NavLink, useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { http } from "../util/config"

const Detail = () => {
    //useParam dùng để lấy tham số trên thanh url
    const params = useParams()
    const [prodDetail, setProdDetail] = useState({})

    const getProductDetailApi = async () => {
        try {
            const res = await http.get('/api/Product/getbyid?id=' + params.id);
            //Sau khi lấy dữ liệu từ api về thì đưa dữ liệu vào state prodDetail
            setProdDetail(res.data.content)
            console.log(res.data.content)
        }catch(err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        //Gọi api sau khi giao diện vừa load xong
        //useEffect có dependency thường dùng cho các trang getDetail (tham số trên url)
        getProductDetailApi()
    }, [params.id]) //setup dependency của useEffect để tự kích hoạt lại hàm này mỗi khi tham số thay đổi

    return (
        <div className="container">
            Detail: id = {params.id}
            <div className="row">
                <div className="col-3">
                    <img src={prodDetail.image} className="w-100" alt="..." />
                </div>
                <div className="col-9">
                    <h3>{prodDetail.name}</h3>
                    <p>{prodDetail.description}</p>
                    <button className="btn btn-dark"><i className="fa fa-cart-plus"></i> Add to cart</button>
                </div>
            </div>
            <hr />
            <div className="row mt-2">

                <h3>Related Product</h3>
                {prodDetail.relatedProducts?.map((prod) => { //optional chaining
                    return <div className="col-4" key={prod.id}>
                        <div className="card">
                            <img src={prod.image} alt="..." />
                            <div className="card-body">
                                <h3>{prod.name}</h3>
                                <p>{prod.price} $</p>
                                <NavLink to={`/detail/${prod.id}`} className="btn btn-primary">Detail</NavLink>
                            </div>
                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default Detail