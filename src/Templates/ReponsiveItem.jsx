import React, { useEffect, useState } from 'react'

/*
    props = {
        component,
        mobileComponent: nếu có,
    }
*/
const ReponsiveItem = (props) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [component, setComponent] = useState(props.component)
    console.log(screenWidth)
    const changeScreen = () => {
        setScreenWidth(window.innerWidth)
        if (screenWidth < 768 && props.mobileComponent) {
            setComponent(props.mobileComponent)
        } else {
            setComponent(props.component)
        }
    }
    useEffect(() => {
        // changeScreen()
        window.addEventListener('resize',changeScreen)
        window.addEventListener('load',changeScreen)
        return () => {
            window.removeEventListener('resize',changeScreen)
            window.removeEventListener('load',changeScreen)
        }
    }, [screenWidth])
    return (
        <>
            {component}
        </>
    )
}

export default ReponsiveItem