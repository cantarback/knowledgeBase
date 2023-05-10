<template>
    <div class="title">插槽</div>
    <div class="main">
        <div class="box">
            <PhotoAlbum><img src="/public/demo.jpg" alt=""></PhotoAlbum>
        </div>
        <div class="box">
            <PhotoAlbum><img src="/public/demo.jpg" alt=""></PhotoAlbum>
        </div>
        <div class="box">
            <PhotoAlbum><img src="/public/demo.jpg" alt=""></PhotoAlbum>
        </div>
        <div class="box">
            <PhotoAlbum><img src="/public/demo.jpg" alt=""></PhotoAlbum>
        </div>
    </div>
</template>

<script setup>
import PhotoAlbum from "../components/Slot.vue"
</script>
<style scoped>
img {
    width: 300px;
    border-radius: 5px;
}

.title {
    color: #333;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    /* width: 100%; */
}

.main {
    display: flex;
    flex-wrap: wrap;
}

.box {
    display: flex;
    flex-direction: column;
}
</style>