<template>
    <div>
        <h3>Axios</h3>
        <button @click="requestPost">以POST方法请求接口 (原生Axios)</button>
        <button @click="requestGet">以GET方法请求接口 (原生Axios)</button><br>
        <button @click="requestAll">以POST方法请求接口 (二次封装POST) </button>
        <button @click="reqIntercept">以GET方法请求接口 (拦截器GET) </button>
        <div v-if="loading" class="tips">
            <el-table v-loading="loading" :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </div>
        <div class="table" v-if="!loading">
            <el-table :data="data" style="width: 100%">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="url" label="Url" />
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance();
let data = ref([]);
const loading = ref(false)

// 原始Axios Get请求
function requestGet() {
    loading.value = true
    const promiseData = proxy.$protoAxios.get('http://localhost:4025/api/Training/Demo', {
        params: {
            'name': '原生GET'
        }
    })
    promiseData.then((res) => {
        if (res.status === 200) {
            if (res.data.StatusCode === 'Success') {
                loading.value = false
                data.value = res.data.JsonArrayCompanies
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
// 原始Axios Post请求
function requestPost() {
    loading.value = true;
    const promiseData = proxy.$protoAxios.post('http://localhost:4025/api/Training/Demo', { 'name': '原生POST' })
    promiseData.then((res) => {
        if (res.status === 200) {
            if (res.data.StatusCode === 'Success') {
                loading.value = false
                data.value = res.data.JsonArrayCompanies
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

// 二次封装后全局通用请求方法
function requestAll() {
    loading.value = true
    const promiseData = proxy.$resAxios('post', 'http://localhost:4025/api/Training/Demo', { 'name': '二次封装' }, (res) => {
        loading.value = false;
        data.value = res.JsonArrayCompanies
    })
}
// 拦截器请求
function reqIntercept() {
    loading.value = true
    const promiseData = proxy.$HelwayAxios.post('/api/Training/Demo', { 'name': '拦截器' });
    promiseData.then((res) => {
        loading.value = false;
        data.value = res.JsonArrayCompanies
    })
}



</script>

<style scoped>
h3 {
    color: #333;
    font-weight: bolder;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}


body {
    margin: 0;
}


.example-showcase .el-loading-mask {
    z-index: 9;
}


button {
    /* display: block; */
    padding: 8px 15px;
    margin: 10px;
    margin-left: 15px;
    background-color: #4885f5;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:active {
    background-color: #1967f8;

}
</style>

  