// Axios创建拦截器

// import HelwayAxios from 'axios'
// 定义响应头 case1
import axios from 'axios'
const HelwayAxios = axios.create({
    baseURL:'http://localhost:4025',
    headers:{'X-Custom-Header': 'foobar','authorization' :'ljq'}
})

// Axios 添加请求拦截器
HelwayAxios.interceptors.request.use(function(e){
    // 定义响应头 case2
    // e.baseURL = 'http://localhost:46208';
    // e.headers.authorization = 'abdc';
    
    // 为请求体添加参数，防止请求时可能会报错
    switch(e.method){
        case 'post':
        case 'put':
            if(e.data===undefined){
                e.data={}
            }
            e.data.PublicMsg = `请求拦截器（${e.method}请求）添加的请求数据`;
            break
        case 'get':
        case 'delete':
            if(e.params===undefined){
                e.params={}
            }
            e.params.PublicMsg = `请求拦截器（${e.method}请求）添加的请求数据`;
            break
        }
        // 请求时统一向后端提交Token：Token 数据配置在请求体的 headers 的 authorization 字段中
        // 设置完成返回config
        return e
},function(error){
    return Promise.reject(error)
})
// Axios 添加响应拦截器
HelwayAxios.interceptors.response.use(function(e){
        if (e.status === 200) {
            if (e.data.StatusCode === 'Success') {
                return e.data
            }
            else if (e.data.StatusCode === 'NullToken') {
                alert('请重新登陆')
            } else {
                alert('接口异常')
            }
        } else if (e.status === 404) {
            alert('接口不存在')
        } else {
            alert('网络请求错误')
        }
    
},function(error){
    return Promise.reject(error)
})
export default HelwayAxios