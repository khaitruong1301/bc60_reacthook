import axios from "axios";
import { history } from "../index";
import {jwtDecode} from 'jwt-decode';
export const TOKEN = 'accesstoken'
export const DOMAIN_BACKEND = 'https://shop.cyberlearn.vn'


// const decodedToken1 = jwtDecode(localStorage.getItem(TOKEN))
// const date1 = new Date(decodedToken1.exp * 1000); 
// console.log(date1.toLocaleTimeString(),'hạn sử dụng')

//Cấu hình các file dùng chung cho hệ thống
//Cấu hình interceptor cho axios (cấu hình cho tất cả request và response khi sử dụng axios)
//Tạo ra 1 phiên bản của axios (instance axios)
export const http = axios.create({
    baseURL:DOMAIN_BACKEND, //domain
    timeout:30000 //thời gian tối đa chờ của 1 request
})

//cấu hình request
http.interceptors.request.use((config)=>{
    //tất cả các request gửi đi sẽ được chứa trong phần header là token đăng nhập
    config.headers = {...config.headers,
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
    return config
}, err=>{
    return Promise.reject(err)
})
//cấu hình response

http.interceptors.response.use((res)=>{
    //Thành công 
    return res
},err => {
    //Xử lý thất bại
    // window.location.href = '/';
    console.log('util',err.response)
    const statusCode = err.response.status
    if (statusCode === 400) {
        //Chuyển hướng trang về home
        history.push('/')
    }else if (statusCode === 401) {
        //Kiểm tra token hết hạn hay chưa
        //Nếu hết hạn thì gọi api refeshtoken
        const decodedToken = jwtDecode(localStorage.getItem(TOKEN))
        const date = new Date(decodedToken.exp * 1000); 
        console.log(date)
        if (date < Date.now()) {
            //Gọi api refresh token 
            console.log('gọi api refresh token')
        }  
        //Không có token chuyển hướng về trang login bắt đăng nhập
        alert('Đăng nhập để vào trang này')
        history.push('/login')
    }else if (statusCode === 403) {
        alert('Không đủ quyền truy cập vào trang này')
        history.push('/')
    }else if (statusCode === 500){
        console.log(err.response.message)
    }

    return Promise.reject(err)
})

/* 
    statusCode:
    200: success request gửi đi và nhận kết quả trả về thành công
    201: created kết trả về là dữ liệu đã được khởi tạo
    400: bad request, yêu cầu không hợp lệ (không có api này)
    404: not found không tìm thấy dữ liệu trên server dựa trên thông client cung cấp
    401: Unauthorized Không có quyền truy cập vào api này (thiếu token, token không hợp lệ)
    403: Forbiden không đủ quyền truy cập vào api này (token không hợp lệ, có token nhưng token chưa đủ quyền để gọi api này)
    500: error in server
        + Backend code lỗi ở server (trường hợp rất ít)
        + Frontend gửi sai format data (=>test lại bằng postman với data test của backend gửi so sánh với data của mình)
*/