<template>
    <div class="content">
        <router-link to="/Api/CompositionApi" class="sort">组合式应用程序接口 (Composition Api)</router-link>
        <router-link to="/Api/OptionsApi" class="sort">选项式应用程序接口 (Options Api)</router-link>
        <router-link to="/Api/NextTick" class="sort">NextTick</router-link>
        <router-link to="/Api/KeepAlive" class="sort">KeepAlive</router-link>
    </div>
    <router-view></router-view>
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

.content {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

}

.sort:hover {
    background-color: #E9EDF0;
}
</style>