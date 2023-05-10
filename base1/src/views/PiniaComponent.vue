<template>
    <div>
        <h3>Pinia 状态管理</h3>
        <PiniaDemo01></PiniaDemo01>
        <PiniaDemo02></PiniaDemo02>
        <button @click="setValFnCount">count++</button>
    </div>
</template>

<script setup>
import PiniaDemo01 from "../components/PiniaDemo01.vue"
import PiniaDemo02 from "../components/PiniaDemo02.vue"
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/demo.js'
const store = useStore();
let { name, count, doubleCount } = storeToRefs(store);
function setValFnCount() {
    store.increment();
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

h3 {
    color: #333;
    font-weight: bolder;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

button:active {
    background-color: #1967f8;

}
</style>