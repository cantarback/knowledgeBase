<template>
    <div>
        <h3>父组件调用子组件的函数</h3>
        <childNode2 ref="childBar"></childNode2>
        <button @click="fn2">执行handShow()函数</button>
    </div>
</template>

<script setup>
import childNode2 from '../../components/childNode2.vue';
import { ref } from 'vue';
// ref获取DOM
let childBar = ref(null)
function fn2() {
    // 调用子组件暴露出的函数
    // 变相子传父
    childBar.value.handShow('这句话来自父组件')
}
</script>

<style scoped>
button {
    padding: 5px 10px;
    margin: 15px;
    background-color: #4885f5;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:active {
    background-color: #1967f8;

}

h3 {
    color: #333;
    font-weight: bolder;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>