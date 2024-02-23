//rafce
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../../redux/reducers/fakeBookReducer';

const FakeBookApp = () => {
    //Lấy state từ redux về sử dụng Destructuring
    const {arrComment} = useSelector(state => state.fakeBookReducer)
    const dispatch = useDispatch();
    const commentRef = useRef({
        name:'',
        content: ''
    })

    const handleChange = (e) => {
        const {id,value} = e.target;
        commentRef.current[id] = value
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //Gửi action lên redux
        const action = addCommentAction(commentRef.current);
        dispatch(action)
    }

    console.log(arrComment)
    return (
        <div className='container'>
            <h3>Fakebook app</h3>
            <div className='card'>
                <div className='card-header'>
                    {arrComment.map((comment,index)=>{
                        return <div className='d-flex mt-2' key={index}>
                        <div className='avatar pe-3'>
                            <img style={{ maxWidth: 75 }} src={`https://i.pravatar.cc?u=${comment.name}`} alt='...' />
                        </div>
                        <div className='content'>
                            <h3 className='text-danger'>{comment.name}</h3>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                    })}
                    
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <p>name</p>
                            <input className='form-control' id="name" name="name" onChange={handleChange}/>
                        </div>
                        <div className='form-group'>
                            <p>content</p>
                            <input className='form-control' id="content" name='content' onChange={handleChange}/>
                        </div>
                        <div className='form-group mt-2'>
                            <button className='btn btn-dark' type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FakeBookApp