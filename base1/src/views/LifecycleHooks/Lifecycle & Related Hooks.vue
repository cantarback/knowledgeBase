<template>
    <div>
        <router-link to="/Lifecycle/OptionHooks" class="sort">生命周期及其在选项式API中的钩子函数</router-link>
        <router-link to="/Lifecycle/CombinedHooks" class="sort">生命周期及其在组合式API中的钩子函数</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sort {
    font-size: 14px;
    display: block;
    padding: 10px 20px;
    color: #999999;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s linear;
}



.sort:hover {
    background-color: #E9EDF0;
}
</style>