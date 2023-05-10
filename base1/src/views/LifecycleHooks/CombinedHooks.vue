<template>
    <div>
        <h3>生命周期及其在组合式API中的钩子函数</h3>
        <div class="main">
            <p>handleShow 函数执行次数：{{ num }}</p>
            <button @click="handleShow">handleShow</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount } from 'vue'
let num = ref(0)
function handleShow() {
    num.value++;
    let oldvalue = document.querySelector('p').innerHTML
    console.log(`旧值：${oldvalue}\n新值：${num.value}`);
}
// 挂载前
onBeforeMount(() => {
})
// 挂载后
onMounted(() => {

})
// 更新前
onBeforeUpdate(() => {

})
// // 更新后
onUpdated(() => {

})
// 销毁前
onBeforeUnmount(() => {

})
// 销毁后
onUnmounted(() => {

})
</script>

<style scoped>
h3 {
    margin: 10px 20px;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(15, 126, 238);
    color: white;
    cursor: pointer;
}

button:active {
    background-color: #0874cc;
}

.main {
    margin: 20px;
    color: #999;
}
</style>