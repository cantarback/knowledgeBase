<template>
    <div>
        <div>
            <div>
                <span>{{ allselect.name }}</span> <input type="checkbox" v-model="allselect.checked" @click="changeall">
            </div>
            <div v-for="item in list">
                <span>{{ item.name }}</span> <input type="checkbox" :checked="item.checked" @click="change">
            </div>
        </div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            allselect: {
                name: '全选',
                checked: false
            },
            list: [{
                name: '苹果',
                checked: false
            }, {
                name: '梨子',
                checked: false
            }, {
                name: '香蕉',
                checked: false
            }, {
                name: '草莓',
                checked: false
            }]
        }
    },
    methods: {
        changeall() {
            this.allselect.checked = !this.allselect.checked
            for (let i = 0; i < this.list.length; i++) {
                this.list[i].checked = this.allselect.checked
            }
            console.log(this.list);
        },
        change() {
            console.log(this.list);
        }
    },
    mounted() {
    },

}
</script>

<style scoped></style>