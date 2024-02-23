import {configureStore} from '@reduxjs/toolkit'
import numberReducer from './reducers/numberReducer'
import fakeBookReducer from './reducers/fakeBookReducer'


export const store = configureStore({
    reducer:{
        numberReducer:numberReducer,
        fakeBookReducer:fakeBookReducer
    }
})