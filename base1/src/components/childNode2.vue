<template>
    <div class="tip">
        <div class="title">This component is ChildNode2</div>
        <p>该组件中声明函数 handShow() 供父组件调用、传值 。{{ num }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let num = ref()
function handShow(str) {
    alert('子组件handShow()被调用了');
    num.value = str
}
defineExpose({
    // 子组件暴露的内容
    handShow
})
</script>

<style scoped>
.title {
    background-color: #2770FE;
    padding: 8px 10px;
    color: white;
}

.tip {
    margin-top: 10px;
    width: 600px;
    margin-left: 15px;
    border: 1px solid #2770FE;
    border-radius: 5px;
}

.text {
    padding: 10px;

}

button {
    padding: 5px 10px;
    margin-left: 5px;
    background-color: #4885f5;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:active {
    background-color: #1967f8;

}

input {
    border: 1px solid black;
    border-radius: 5px;
    outline-style: none;
    padding: 3px 6px;
}

p {
    margin: 10px 0;
    color: #999;
    padding: 5px 10px;
}
</style>