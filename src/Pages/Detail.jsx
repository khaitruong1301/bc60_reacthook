import { NavLink, useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { http } from "../util/config"
import { useDispatch, useSelector } from "react-redux"
import { getApiProductDetailActionAsync } from "../redux/reducers/productReducer"

const Detail = () => {
    //useParam dùng để lấy tham số trên thanh url
    const params = useParams()
    const {prodDetail} = useSelector(state =>state.productReducer)
    const dispatch = useDispatch()
    console.log(prodDetail)

    const getApiProductDetail = async ()=>{
        const action = getApiProductDetailActionAsync(params.id)
        dispatch(action)
    }

    useEffect(()=>{
        getApiProductDetail()
    },[params.id])

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