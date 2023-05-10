<template>
    <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
</template>
  
<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
function handleNodeClick(data) {
    if (data.path != undefined) {
        proxy.$router.push({
            path: data.path
        })
    }
}
const data = [
    {
        label: 'Level one 1',
        children: [
            {
                label: 'Level two 1-1',
                children: [
                    {
                        label: 'Level two 1-1',
                        path: '/',
                    },
                ],
            },
        ],
    },
]
const defaultProps = {
    children: 'children',
    label: 'label',
}
</script>
<style scoped></style>
  