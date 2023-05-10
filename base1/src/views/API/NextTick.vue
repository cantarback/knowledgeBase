<template>
    <div class="main">
        <div class="text">{{ msg }}</div>
        <button @click="changeMsg">显示NextTick</button>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
let msg = ref('8 9 10');

function changeMsg() {
    msg.value = ' J Q K';
    nextTick(() => {
        // setTimeout(() => {
        let res = document.querySelector('.text');
        console.log(res.innerHTML);
        // })
    })
}
</script>

<style scoped>
button {
    margin-top: 20px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(15, 126, 238);
    color: white;
    cursor: pointer;
}

.main {
    margin: 20px;
}

.text {
    color: #999;
}

button:active {
    background-color: #0874cc;
}
</style>