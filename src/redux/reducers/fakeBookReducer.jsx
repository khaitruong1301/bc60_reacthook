//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name:'abc',content:'ahihi'},
        {name:'xyz',content: 'hello cybersoft'}
    ]
}

// arrComment = ['001','002','002','002']
const fakeBookReducer = createSlice({
  name: 'fakeBookReducer',
  initialState,
  reducers: {
    addCommentAction:(state,action)=>{
        state.arrComment = [...state.arrComment,action.payload]

    }
  }
});

export const {addCommentAction} = fakeBookReducer.actions

export default fakeBookReducer.reducer