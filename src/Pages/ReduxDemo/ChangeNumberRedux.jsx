//rfcredux | rafce
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeNumberAction } from '../../redux/reducers/numberReducer';

const ChangeNumberRedux = () => {
    //useSelector tương tự mapStateToProps dùng để lấy state từ redux về component
    const number = useSelector(state => state.numberReducer.number)
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <h3>number : {number}</h3>
        <button className='btn btn-success' onClick={()=>{
            //Tạo ra action từ rxslice
            const action = changeNumberAction(1);
            //dispatch lên redux
            dispatch(action)
        }}>Change number</button>
    </div>
  )
}

export default ChangeNumberRedux