<template>
    <div>
        <h3>生命周期及其在选项式API中的钩子函数</h3>
        <div class="main">
            <p>handleShow 函数执行次数：{{ num }}</p>
            <button @click="handleShow">handleShow</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1
        }
    },
    methods: {
        handleShow() {
            this.num++
        }
    },
    beforeCreate() {
        // 创建前
    },
    created() {
        // 创建后
    },
    beforeMount() {
        // 挂载前
    },
    mounted() {
        // 挂载后
    },
    beforeUpdate() {
        // 数据更新前
    },
    updated() {
        // 数据更新后
    },
    beforeDestroy() {
        // 组件销毁前
    },
    destroyed() {
        // 组件销毁后
    },

}
</script>

<style scoped>
h3 {
    margin: 10px 20px;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(15, 126, 238);
    color: white;
    cursor: pointer;
}

button:active {
    background-color: #0874cc;
}

.main {
    margin: 20px;
    color: #999;
}
</style>