import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import protoAxios from 'axios'
import 'element-plus/dist/index.css'
// 引入Axios二次封装文件
import resAxios from './unitl/HelPerAxios.js'
// 引入Axios拦截器文件
import HelwayAxios from './unitl/HelwayAxios.js'
// 创建app实例
const NewApp = createApp(App);
// 创建pinia实例
const pinia = createPinia();
// 创建全局变量
NewApp.config.globalProperties.$strText = '你TM劈我瓜是吧！';
// Axios 二次封装方法
NewApp.config.globalProperties.$resAxios = resAxios;
// Axios 原生方法
NewApp.config.globalProperties.$protoAxios = protoAxios;
// Axios 拦截器
NewApp.config.globalProperties.$HelwayAxios = HelwayAxios;

NewApp.use(router);
NewApp.use(pinia);
NewApp.use(ElementPlus);
NewApp.mount('#app')


// createApp(App).use(router).mount('#app')
















