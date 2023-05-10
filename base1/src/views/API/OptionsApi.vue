<template>
    <h3>选项式应用程序接口 (Options Api)</h3>
    <div class="main">
        <div class="tips">初始金额：<span class="price">{{ price }}</span></div>
        <input type="text" v-model="price" class="ipt"><button class="btn" v-on:click="changePrice">点击加钱</button>
        <div class="content">
            <div class="tips">显示全部公司</div>
            <div class="company">
                <table>
                    <tr>
                        <th>编号</th>
                        <th>Name</th>
                        <th>国家</th>
                        <th>URL</th>
                    </tr>
                    <tr v-for="item in company" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.country }}</td>
                        <td>{{ item.url }}</td>
                    </tr>
                </table>
                <div class="tips">显示中国公司</div>
                <table>
                    <tr>
                        <th>编号</th>
                        <th>Name</th>
                        <th>国家</th>
                        <th>URL</th>
                    </tr>
                    <tr v-for="item in showChinaCompainy() " :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.country }}</td>
                        <td>{{ item.url }}</td>
                    </tr>
                </table>
                <button class="btn" v-on:click="addCompany">增加公司</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Options Api',
    data() {
        return {
            price: 100,
            company: [{
                id: 1, name: 'Google', country: 'USA', url: 'http://www.google.com'
            }, {
                id: 2, name: 'Baidu', country: 'PRC', url: 'http://www.baidu.com'
            }, {
                id: 3, name: 'TenCent', country: 'PRC', url: 'http://www.tencent.com'
            }, {
                id: 4, name: 'Microsoft', country: 'USA', url: 'http://www.microsoft.com'
            }, {
                id: 5, name: 'Alibaba', country: 'PRC', url: 'http://www.alibaba.com'
            }, {
                id: 6, name: 'ByteDance', country: 'PRC', url: 'http://www.bytedance.com'
            }, {
                id: 7, name: 'MiHoyo', country: 'PRC', url: 'http://www.mihoyo.com'
            }, {
                id: 8, name: 'XiaoMi', country: 'PRC', url: 'http://www.xiaomi.com'
            },]
        }
    },
    methods: {
        changePrice() {
            this.price++
        },
        showChinaCompainy() {
            let chinaCompany = this.company.filter((e) => {
                return e.country == 'PRC'
            })
            return chinaCompany;
        },
        addCompany() {
            this.company.push({
                id: 8, name: 'XiaoMi', country: 'PRC', url: 'http://www.xiaomi.com'
            })
        }
    },
    // beforeUpdate() {
    //     showChinaCompainy()
    // },
}
</script>

<style scoped>
h3 {
    margin: 10px 20px;
}

table {
    border-collapse: collapse;
}

td,
th {
    border: 1px solid #999;
    padding: 5px 20px;
    text-align: center;
    /* width: 200px; */
}

.ipt {
    padding: 3px 10px;
    margin-top: 10px;
    outline-style: none;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

.btn {
    margin: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background-color: #2F6EF8;
    color: white;
    cursor: pointer;
}

.btn:active {
    background-color: blue;
}

.price {
    color: #2F6EF8;
}

.tips {
    margin: 10px 0;
    color: #999;
}

.main {
    margin: 20px;
}

.company {
    margin-top: 20px;
}
</style>