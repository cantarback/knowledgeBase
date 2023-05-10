// Axios二次封装

import HelPerAxios from "axios";
// 通过axios.create 函数创建一个axios实例
const axiosInstance = HelPerAxios.create({
    baseURL:'http://localhost:4025',
    // timeout:5000,
    headers: { 'X-Custom-Header': 'foobar', 'authorization': '2cfz'}

});
// 配置式语法
// axiosInstance({url:'/Training/Demo',method:'get',params:{id:1}})
// axiosInstance({url:'/Training/Demo',method:'post',data:{id:1}})

// axios二次封装
function resAxios(strMethodIn,urlIn,reqData,funcFollowIn){
    // 定义请求体
    let reqParamInner = {
        url:urlIn,
        method:strMethodIn
    }
    switch(strMethodIn){
        case "post":
        case "put":
            reqParamInner.data = reqData;
            break;
        case "get":
        case "delete":
            reqParamInner.params = reqData;
            break;
                
    }
    const promiseReq = axiosInstance(reqParamInner);
    promiseReq.then(res=>{
        if (res.status === 200) {
            if (res.data.StatusCode === 'Success') {
                // 真实业务逻辑
                funcFollowIn(res.data)
            }
            else if (res.data.StatusCode === 'NullToken') {
                alert('请重新登陆')
            } else {
                alert('接口异常')

            }
        } else if (res.status === 404) {
            alert('接口不存在')
        } else {
            alert('网络请求错误')
        }
    })
}
export default resAxios