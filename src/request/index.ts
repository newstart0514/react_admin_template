import axios from "axios";

// 创建axios实例
const instance = axios.create({
    // 基本请求路径的抽取
    baseURL:'http://xue.cnkdl.cn:23683',
    // 这个时间是你每一次请求的过期时间，这次请求认为20秒之后这个请求就是失败的
    timeout: 20000
})

// 请求拦截器
instance.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error)
});

// 响应拦截器
instance.interceptors.response.use(res => {
    return res.data
},error => {
    return Promise.reject(error)
})

export default instance