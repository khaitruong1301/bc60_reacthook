import React, { useState } from 'react'
import ContainerModal from '../HOC/ContainerModal'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
const DemoContainerComponent = () => {
    const [component,setComponent] = useState(<Login />)
    return (
        <div className='container'>
            <h3>Demo Container Modal (Container Modal)</h3>
            <button className='btn btn-success me-2' data-bs-toggle="modal"
                data-bs-target="#modalId" onClick={() => {
                    setComponent(<Login />)
                }}>Open Login</button>
            <button className='btn btn-dark' data-bs-toggle="modal"
                data-bs-target="#modalId" onClick={() => {
                    setComponent(<Register />)
                }}>Open register</button>
            {/* <ContainerModal component={Login} /> */}

            <ContainerModal component={component} />
        </div>
    )
}

export default DemoContainerComponent