//封装了axios
import axios from 'axios'

export function request(config){
    //1.创建一个axios实例
    const instance1 = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })

    //2.拦截器
    instance1.interceptors.request.use(config => {
        // console.log(config)
        return config
    },err => console.log(err))

    instance1.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    },err => console.log(err))


    //3.发送真正的网络请求
    return instance1(config)
}