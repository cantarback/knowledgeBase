<template>
    <div class="tip">
        <div class="title">This component is inputBarPinia</div>
        <p>组件2</p>
        <p>count : {{ count }}<br>doubleCount : {{ doubleCount }}<br>
            name : {{ name }}
        </p>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/demo.js'
const store = useStore();
let { name, count, doubleCount } = storeToRefs(store);
function setValFnCount() {
    store.increment();
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