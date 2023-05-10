<template>
    <div>
        <h3>KeepAlive</h3>
        <div>
            <div class="main">
                <router-link to="/API/KeepAlive/KeepAlive-demo1">demo01</router-link>
                <router-link to="/API/KeepAlive/KeepAlive-demo2">demo02</router-link>
            </div>
            <div class="box">
                <router-view v-slot="{ Component }">
                    <component :is="Component"></component>
                </router-view>
                <router-view v-slot="{ Component }">
                    <!-- include 白名单 : 保留数组内name的组件-->
                    <!-- exclude 黑名单 : 保留除开数组内name的组件-->
                    <!-- :include="['']" :exclude="['']" -->
                    <keep-alive :include="['demo01']">
                        <component :is="Component"></component>
                    </keep-alive>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
h3 {
    margin: 10px 20px;
}

a {
    margin: 0 20px;
    color: #999;
    text-decoration: none;
}

.main {
    text-align: center
}

.box {
    margin: 20px auto;
    flex-direction: column;
    display: flex;
}

a:hover {
    text-decoration: underline;
    color: blue;
}
</style>