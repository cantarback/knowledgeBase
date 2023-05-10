<template>
    <div>
        <!--{{ fntest() }}-->
        {{ proxy.$strText }}
        {{ funAdd() }}
    </div>
</template>

<script setup>
// 选项式API
// export default ({
//     data() {
//         return {
//             num: 1,
//         }
//     },
//     methods: {
//         fntest() {
//             let diff = this.$strText;
//             return diff
//         }
//     },
// })

// 组合式API
import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
function funAdd() {
    // 不具有响应性
    let str = proxy.$strText
    return str
}
</script>

<style scoped></style>