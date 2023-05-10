<template>
    <div>
        <h3>防抖 & 节流</h3>
        <div class="container">
            <div> 初始事件 ：<input type="text" v-model="data.startValue"></div>
            <div> 防抖事件 ：<input type="text" v-model="data.debounceValue"></div>
            <div> 节流事件 ：<input type="text" v-model="data.throttleValue"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { ElMessage } from 'element-plus'
const tips = (e) => {
    ElMessage({
        showClose: true,
        message: `输入${e}`,
        type: 'success',
    })
}
let data = ref({
    startValue: null,
    debounceValue: null,
    throttleValue: null
})
// Debounce (防抖): 每次触发事件时设置延迟调用函数，在此期间取消以前触发的事件.
function handleDebounce(funcFollowIn, numDelayIn) {
    let timerInner = null;
    return (...args) => {
        if (timerInner) clearTimeout(timerInner);
        timerInner = setTimeout(() => {
            funcFollowIn.apply(this, args);
        }, numDelayIn);
    };
}
// Throttle (节流): 事件占用一个时间段, 在此时间段内不会再接受事件触发.
function handleThrottle(funcFollowIn, numDelayIn) {
    let timerInner = null;
    return (...args) => {
        if (!timerInner) {
            timerInner = setTimeout(() => {
                funcFollowIn.apply(this, args);
                timerInner = null;
            }, numDelayIn);
        }
    };
}
// 二次定义防抖
let dobDebounce = handleDebounce((value) => {
    tips(value);
}, 2000)
// 二次定义节流
let dobThrottle = handleThrottle((value) => {
    tips(value);
}, 2000)
watch(() => data.value.debounceValue, (newval, oldval) => {
    dobDebounce(newval)
})
watch(() => data.value.startValue, (newval, oldval) => {
    tips(newval)
})
watch(() => data.value.throttleValue, (newval, oldval) => {
    dobThrottle(newval)
})
</script>

<style scoped>
h3 {
    color: #333;
    font-weight: bolder;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.container>div {
    color: #999;
    padding: 5px 20px;
}

input {
    width: 300px;
    padding: 5px 10px;
    border-radius: 8px;
    outline-style: none;
    border: 1px solid #999;
}
</style>