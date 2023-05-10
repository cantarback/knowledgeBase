<template>
    <div class="title">动态组件</div>
    <component :is="componentShow"></component>
    <button @click="change">组件切换</button>
</template>

<script setup>
import imgChange from '@/components/dyanmic.vue'
import tipChange from '@/components/tip.vue'
import { shallowRef } from 'vue';
let componentShow = shallowRef(imgChange)
function change() {
    if (componentShow.value == imgChange) {
        componentShow.value = tipChange
    } else {
        componentShow.value = imgChange
    }
}
</script>
<style scoped>
button {
    display: block;
    padding: 5px 10px;
    width: 80px;
    margin-top: 10px;
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

.title {
    color: #333;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);


}
</style>