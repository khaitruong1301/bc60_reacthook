import React, { useEffect } from 'react'
import { getApiActionAsync } from '../../redux/reducers/productReducer'
import { useDispatch, useSelector } from 'react-redux'

const useHome = () => {
    const { arrProduct } = useSelector(state => state.productReducer)
    const dispatch = useDispatch()
    console.log(arrProduct)
    const getProductApi = async () => {
        const action = getApiActionAsync;
        dispatch(action)
    }

    useEffect(() => {
        getProductApi()
    }, [])
    return {arrProduct}
}

export default useHome