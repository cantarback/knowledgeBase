<template>
    <div>我不想再劈瓜了！呜呜呜~~~
        <p> 我进来了：{{ cake }}次，我离开了{{ cass }}次 </p>
    </div>
</template>

<script setup>
import { ref, onActivated, onDeactivated } from 'vue'
let cake = ref(0);
let cass = ref(0)
onActivated(() => {
    cake.value++
})
onDeactivated(() => {
    cass.value++
})
</script>
<style scoped>
div {
    line-height: 25px;
    font-size: 20px;
    margin-top: 20px;
    color: #999;
    text-align: center;
}

p {
    font-size: 16px;
    text-align: center;
}
</style>