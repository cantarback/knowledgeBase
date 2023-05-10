<template>
    <div class="imgslot">
        <div class="title">相册组件</div>
        <div class="slot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, onUpdated, ref, watch, computed } from 'vue';
</script>
<style scoped>
div.imgslot {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px 20px;
    margin: 15px;
}

div.title {
    margin-bottom: 10px;
    color: #999;
}
</style>