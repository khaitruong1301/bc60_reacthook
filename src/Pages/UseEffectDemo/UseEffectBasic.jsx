import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
    const [like, setLike] = useState(1)
    useEffect(() => {
        //Hàm trong useeffect sẽ được tự động thực khi lần đầu tiên khi component render và sau mỗi lần bất kì state nào của component thay đổi
        //Ứng với class didmount và didupdate
        console.log('useeffect run')
        //Sử dụng khi có xử lý if (ít sử dụng)
    })
    



    return (
        <div className='container'>
            <button className='btn btn-primary' onClick={() => {
                setLike(like + 1)
            }}>
                <i className='fa fa-thumbs-up'></i> {like}
            </button>
        </div>
    )
}

export default UseEffectBasic