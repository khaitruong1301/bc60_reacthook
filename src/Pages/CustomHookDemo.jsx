import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGetApi from '../CustomHooks/useGetApi'
import useCountDown from '../CustomHooks/useCountDown'

const CustomHookDemo = () => {
    const arrFilm = useGetApi('https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
    const count = useCountDown(10)


    return (
        <div className='container'>
            <h3>Number Count Down: {count}</h3>
            <h3>Danh sách phim</h3>
            <div className='row'>
                {arrFilm.map((film)=>{
                    return <div className='col-4' key={film.maPhim}>
                    <div className='card'>
                        <img src={film.hinhAnh} alt='...' />
                        <div className='card-body'>
                            <h3>{film.tenPhim}</h3>
                            <p>{film.moTa}</p>
                            <button className='btn btn-dark'>Đặt vé</button>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </div>
    )
}

export default CustomHookDemo