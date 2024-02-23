import React, { useCallback, useState } from 'react'
import Comment from './Comment';
export default function HookUseCallBack() {
    let [like, setLike] = useState(1);
    let [number, setNumber] = useState(1)
    const renderLike = () => {  //00xx
        return <div>
            <i className='fa fa-heart'></i> {like}
        </div>
    }
    //useCallback dùng để cache lại địa chỉ của biến là hàm 
    const callBackRenderLike = useCallback(renderLike, [like])
    return (
        <div className="m-5">
            <button className='btn btn-primary' onClick={() => {
                setNumber(number + 1)
            }}>{number}</button> <br />

            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            <Comment renderLike={callBackRenderLike} />
        </div>
    )
}