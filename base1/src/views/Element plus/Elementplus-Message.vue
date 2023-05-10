<template>
    <div>
        <el-button :plain="true" @click="open1" class="sort">message</el-button>
        <el-button :plain="true" @click="open2" class="sort">success</el-button>
        <el-button :plain="true" @click="open3" class="sort">warning</el-button>
        <el-button :plain="true" @click="open4" class="sort">error</el-button>
    </div>
</template>
  
<script setup>
import { ElMessage } from 'element-plus'

const open1 = () => {
    ElMessage({
        showClose: true,
        message: 'This is a message.',
    })
}
const open2 = () => {
    ElMessage({
        showClose: true,
        message: 'Congrats, this is a success message.',
        type: 'success',
    })
}
const open3 = () => {
    ElMessage({
        showClose: true,
        message: 'Warning, this is a warning message.',
        type: 'warning',
    })
}
const open4 = () => {
    ElMessage({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: 'error',
    })
}
</script>
<style scoped></style>
  