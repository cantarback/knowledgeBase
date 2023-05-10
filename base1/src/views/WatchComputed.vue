<template>
    <div class="main">
        <div class="title">Watch & Computed</div>
        <div class="container">
            <div class="tips">
                金额 1 : <span>{{ price1 }}</span>&nbsp;&nbsp; <span>{{ change1 }}</span><br>
                金额 2 : <span>{{ price2 }}</span>&nbsp;&nbsp; <span>{{ change2 }}</span>
            </div>
            <div class="change">
                <br>
                变化金额 :
                <input type="text" v-model="call1">
                <input type="text" v-model="call2">
                <button @click="priceChange1">确定</button><button @click="priceChange2">JSON变化</button>
                <br>{{ defeat.num }} <span>{{ defeat.tip }}</span>
            </div>
            <hr> 总计金额 : &nbsp;&nbsp;&nbsp;<span>{{ allprice }}</span>
        </div>
    </div>
</template>

<script>
export default ({
    data() {
        return {
            price1: 10,
            price2: 10,
            change1: '未变化',
            change2: '未变化',
            call1: "0",
            call2: "0",
            defeat: {
                num: 10,
                age: 20,
                tip: '',
            }
        }
    },
    methods: {
        priceChange1() {
            this.price1 += parseFloat(this.call1);
            this.price2 += parseFloat(this.call2)
        },
        priceChange2() {
            this.defeat.num++;
        },
    },
    watch: {
        'price1': {
            handler(newValue, oldValue) {
                this.change1 = oldValue + ' 变更为 ' + newValue
            }
        },
        'price2': {
            handler(newValue, oldValue) {
                this.change2 = oldValue + ' 变更为 ' + newValue
            },
        },
        'defeat': {
            handler(newValue) {
                this.defeat.tip = '新值为 : ' + newValue.num
            }, deep: true
        }

    },
    computed: {
        allprice: function () {
            return this.price1 + this.price2
        }
    }


})
</script>

<style scoped>
hr {
    margin: 10px 0;
}

.title {
    color: #333;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

button {
    padding: 5px 10px;
    margin-top: 10px;
    margin-left: 5px;
    background-color: #4885f5;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:active {
    background-color: #1967f8;

}

.container {
    margin: 20px;
    color: #999;
}

.tips {
    padding: 5px 10px;
    border-radius: 5px;
    line-height: 30px;
    background-color: rgba(0, 0, 0, 0.05);
}

span {
    color: rgb(22, 121, 219);
}

.change {
    padding: 0px 10px;
    margin-top: 10px;
}

input {
    padding: 5px 10px;
    outline-style: none;
    margin-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>