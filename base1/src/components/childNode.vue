<template>
    <div class="tip">
        <div class="title">This component is ChildNode</div>
        <p>从父组件接受到的值：{{ jsonProp.title }}</p>
        <div class="text"><input type="text" v-model="childValue" placeholder="文本框内容会被发送">
            <button @click="sentValue">发送到父组件</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// 接受父组件传来的值
const jsonProp = defineProps({
    title: String
})
let childValue = ref()
// 子传父
const emiFunc = defineEmits(['sentChild'])
function sentValue() {
    // 子组件抛出的事件和要传递给父组件的值
    emiFunc('sentChild', childValue.value)
}
</script>

<style scoped>
.title {
    background-color: #2770FE;
    padding: 8px 10px;
    color: white;
}

.tip {
    margin-top: 10px;
    width: 500px;
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
    margin-top: 5px;
    color: #999;
    padding: 5px 10px;
}
</style>