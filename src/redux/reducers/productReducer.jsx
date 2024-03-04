//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrProduct:[],
    prodDetail: {

    }
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductAction: (state,action) =>{
        state.arrProduct = action.payload
    },
    setProductdetailAction: (state,action) =>{
        state.prodDetail = action.payload
    }
  }
});
export const {setProductAction,setProductdetailAction} = productReducer.actions
export default productReducer.reducer
//-------------------------- action async (action thunk)-------------------
export const getApiActionAsync = async (dispatch) => {
    //Xử lý logic api
    const res = await http.get('/api/product');
    //Sau khi có dữ liệu từ api thì dùng dispatch để gọi action thường
    const action = setProductAction(res.data.content)
    dispatch(action)
}
//closure function
export const getApiProductDetailActionAsync = (id) => {

    return async (dispatch)=>{
        //Xử lý logic api
        const res = await http.get(`/api/product/getbyid?id=${id}`);
        //Sau khi có dữ liệu sẽ dùng dispatch để đưa về redux
        const action = setProductdetailAction(res.data.content)
        dispatch(action)
    }
}





