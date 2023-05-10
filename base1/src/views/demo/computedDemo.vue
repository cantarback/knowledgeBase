<template>
    <div>
        <!-- <inputBar class="ipt" v-model="iptData"></inputBar> -->
        <ipt v-model="fromData"></ipt>
        <button @click="change">111</button>
    </div>
</template>

<script setup>
import ipt from '@/components/computedpon.vue'
// import inputBar from '@/components/computedBar.vue'
import { ref } from 'vue';
const fromData = ref({
    keyword: '',
    goods_name: '',
    goods_sort: null,
    goods_file: [],
    goods_Index: '',
    goods_trans: '',
    goods_stats: '1',
    goods_sortnum: 1
})
function change() {
    console.log(fromData.value);
}
</script>

<style scoped>
.ipt {
    margin: 100px auto;
    width: 400px;
}
</style>