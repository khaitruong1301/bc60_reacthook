import {configureStore} from '@reduxjs/toolkit'
import numberReducer from './reducers/numberReducer'
import fakeBookReducer from './reducers/fakeBookReducer'
import productReducer from './reducers/productReducer'
import sinhVienReducer from './reducers/sinhVienReducer'


export const store = configureStore({
    reducer:{
        numberReducer:numberReducer,
        fakeBookReducer:fakeBookReducer,
        productReducer:productReducer,
        sinhVienReducer:sinhVienReducer
    }
})