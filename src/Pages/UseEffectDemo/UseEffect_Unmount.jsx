import React, { useEffect } from 'react'


let getApiSocket = {}

const UseEffect_Unmount = () => {


    
    useEffect(() => {
        getApiSocket = setInterval(() => {
            console.log('getapi')
        }, 1000);
        
        return () => {
            //return về callback => callback này sẽ kích hoạt khi component mất khỏi giao diện tương tự componentWillUnmount
            clearInterval(getApiSocket)
        }
    }, [])
    

    return (
        <div>UseEffect_Unmount</div>
    )
}

export default UseEffect_Unmount