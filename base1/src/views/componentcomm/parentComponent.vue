<template>
    <div>
        <childNode :title="parentValue" @sentChild="sentchildvalue"></childNode>
        <div class="tip">
            <div class="title">This component is ParentNoder</div>
            <p>从子组件接受到的值：{{ childValue }}</p>
            <div class="text"><input type="text" v-model="sentParent" placeholder="文本框内容会被发送">
                <button @click="sentValue">发送到子组件</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import childNode from '../../components/childNode.vue';
import { ref } from 'vue';
// 父传子
let parentValue = ref();
let sentParent = ref();
function sentValue() {
    parentValue.value = sentParent.value;
}
// 子传父
let childValue = ref();
function sentchildvalue(child) {
    childValue.value = child;
}
// 父组件调用子组件的函数
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