//对axios进行二次封装
import axios from 'axios'

//1、利用axios对象的方法create,去创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，requests发出的请求在端口号后面会跟改baseURl
    baseURL: 'https://api.github.com',
    //代表请求超时的时间5s
    timeout: 5000,
})
//请求拦截器，在请求发出之前做些事情
requests.interceptors.request.use((config) => {
    //config:配置对象，对象里面有个属性很重要，header请求头，配置token
    if (!config.headers.Authorization) {
        config.headers['Authorization'] =
            `Bearer ${localStorage.getItem('token')}` || ''
    }
    return config
})
//响应拦截器,对响应的数据做一些操作
requests.interceptors.response.use(
    (res) => {
        //成功回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
        return res.data as any
    },
    (error) => {
        //响应失败回调函数，如终结Promise链
        console.log('请求失败:', error)
        return Promise.reject(error)
    }
)
//对外暴露
export default requests
