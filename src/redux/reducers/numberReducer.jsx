//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 10
}

const numberReducer = createSlice({
  name: 'numberReducer',
  initialState,
  reducers: {
    changeNumberAction: (state,action) => {
        state.number += action.payload
    }
  }
});

export const {changeNumberAction} = numberReducer.actions

export default numberReducer.reducer