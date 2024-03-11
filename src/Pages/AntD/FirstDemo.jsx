//Phần 1: Import 
import React from 'react';
import { DatePicker } from 'antd';
import * as dayjs from 'dayjs'
//Phần 2: Các biến và hàm ngoài function component
const FirstDemo = () => {
    //Phần 3: Các biến, hàm, hook, và nội dung bên trong component

    return <div className='container'>
        <DatePicker showTime onChange={(date,dateString)=>{
            console.log(dayjs(date).format('DD-MM-YYYY hh:mm:ss'))
            console.log(dateString)
        }}/>
    </div>
}

export default FirstDemo