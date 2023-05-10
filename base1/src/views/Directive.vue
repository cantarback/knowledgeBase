<template>
    <div>
        <div class="title">指令 (Directive)</div>
        <div class="main">
            <h4>v-html</h4>
            <div class="container">
                <div>{{ msg }}</div>
                <div v-html="msg"></div>
            </div>
        </div>
        <div class="main">
            <h4>v-if / v-else-if / v-else</h4>
            <div class="iftest" v-if="isshow == 1">第1个div标签</div>
            <div class="iftest" v-else-if="isshow == 2">第2个div标签</div>
            <div class="iftest" v-else>第3个div标签</div>
        </div>
        <div class="main">
            <h4>v-show</h4>
            <div class="iftest" v-show="isshow == 2">是否显示此标签</div>
        </div>
        <div class="main">
            <h4>v-once</h4>
            <span class="iftest">{{ price }}</span> <span class="iftest" v-once>{{ price }}</span>
            <button @click="changePrice">count++</button>
        </div>
    </div>
</template>

<script >
export default ({
    data() {
        return {
            msg: "<img src='/demo.jpg' alt='' style='width:400px'>",
            isshow: 2,
            price: 100
        }
    },
    methods: {
        changePrice() {
            this.price++
        }
    },
})
</script>

<style scoped>
.title {
    color: #333;
    font-weight: bolder;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    /* width: 100%; */
}

button {
    margin-left: 10px;
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
    margin: 30px 20px;
}

.container>div {
    /* display: flex; */
    margin: 10px 0;
}

.iftest {
    color: #999;
    margin: 10px 0;
}
</style>