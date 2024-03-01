import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetApi = (url) => {

    const [state,setState] = useState([])
    const getApi = async ()  => {
        const res = await axios({
            url:url,
            method:'GET'
        });
        //Lấy dữ liệu từ api về và search vào state=
        setState(res.data.content)
    }

    useEffect(()=>{
        getApi()
    },[])


  return state
}

export default useGetApi