import React, { useState } from 'react'
//react functional component
const ChangeNumber = () => {
    const [state, setState] = useState(1);
    const [like, setLike] = useState(1);
    const [fSize, setSize] = useState(32);
    /*
        this.state = {
            state1: 1,
            state2: 1
        }
    */
    const handleLike = () => {
        setLike(like + 1)
    }
    return (
        <div className='container'>
            <h3>Number: {state}</h3>
            <button className='btn btn-dark' onClick={() => {
                setState(state + 1)
            }}>+</button>
            <hr />
            <h3>Like: {like} <i className='fa fa-thumbs-up'></i></h3>
            <button className='btn btn-primary' onClick={() => {
                handleLike()
            }}> <i className='fa fa-thumbs-up'></i> </button>
            <hr />
            <p style={{ fontSize: fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi voluptatibus molestiae quo maxime cumque officia suscipit eligendi nostrum quia, dicta qui obcaecati, quaerat deleniti error nam, vero molestias minus?</p>
            <button className='btn btn-dark me-2' onClick={() => {
                setSize(fSize + 5)
            }}>+</button>
            <button className='btn btn-dark mx-2' onClick={() => {
                setSize(fSize - 5)
            }}>-</button>
        </div>
    )
}

export default ChangeNumber