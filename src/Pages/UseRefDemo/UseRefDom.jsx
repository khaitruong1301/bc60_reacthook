//rafce
import React,{ useRef }  from 'react'
import ClassComDemo from './ClassComDemo'

const UseRefDom = () => {
    const refTag = useRef()
    const refCom = useRef()
  return (
    <div className='container'>

        <p ref={refTag}>Lorem ipsum dolor sit amet.</p>
        <button  className='btn btn-success' onClick={()=>{
            refTag.current.style.color = 'red'
            //.innerHTML, .style, ... :thuộc tính
            //.click() , focus(): phương thức
        }}>Change color</button>
        <br />
        <button className='btn btn-danger' onClick={()=>{
            console.log(refCom.current.changeNumber())
        }}>Dom Component</button>

        <ClassComDemo ref={refCom} />
    </div>
  )
}

export default UseRefDom