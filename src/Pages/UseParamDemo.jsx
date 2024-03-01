import React from 'react'
import { useParams } from 'react-router-dom'

const UseParamDemo = () => {

    const params = useParams()



    return (
        <div className='container'>
            useparam : {params.thamSo}
        </div>
    )
}

export default UseParamDemo