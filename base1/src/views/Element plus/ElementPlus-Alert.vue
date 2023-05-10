<template>
    <el-alert :title="item.tips" :type="item.type" description="" show-icon v-for="item in data" />
</template>
<script setup>
import { ref } from 'vue';
let data = ref([{
    tips: '这次成功了！',
    type: 'success',
    description: ''
}, {
    tips: '好像有点问题，还能改！',
    type: 'info',
    description: ''
}, {
    tips: '有问题，不完全算问题，要注意',
    type: 'warning',
    description: ''
}, {
    tips: '错完了，重新写',
    type: 'error',
    description: ''
}])
</script>
<style scoped>
.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}
</style>
  