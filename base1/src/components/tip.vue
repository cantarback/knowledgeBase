<template>
    <div class="tip">
        <div class="title">This component is TextBarvue</div>
        <div class="text">动态组件演示</div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated, ref, watch, computed } from 'vue';

</script>

<style scoped>
.title {
    background-color: #2770FE;
    padding: 8px 10px;
    color: white;
}

.tip {
    margin-top: 10px;
    width: 500px;
    margin-left: 15px;
    border: 1px solid #2770FE;
    border-radius: 5px;
}

.text {
    padding: 10px;

}
</style>