import React from 'react'
import { useSelector } from 'react-redux'

const Loading_API = () => {

    const {loading} = useSelector(state=>state.sinhVienReducer)


    if (loading){
        // return <img alt='loading' src='./img/loading.gif' width={20} height={20} />
        return <span> loading ...</span>
    }
    return ''
}

export default Loading_API