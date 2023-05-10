<template>
    <div>
        <img src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/85/853yj2.jpg?w=400&h=200&fmt=webp" alt=""><br>
        <input type="text" v-model="num">
        <p> 我进来了：{{ cake }}次，我离开了{{ cass }}次 </p>
    </div>
</template>

<script setup>
import { ref, onDeactivated, onActivated } from 'vue'
let num = ref(999);
let cake = ref(0);
let cass = ref(0)
onActivated(() => {
    cake.value++
})
onDeactivated(() => {
    cass.value++
})
</script>
<script>
export default {
    name: 'demo01'
}
</script>
<style scoped>
div {
    margin-top: 20px;
    color: #999;
    text-align: center;
}

input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #999;
    outline-style: none;
    padding: 5px 10px;
    border-radius: 5px;
}


img {
    height: 200px;
}
</style>