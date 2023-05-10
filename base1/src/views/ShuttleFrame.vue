<template>
    <div>
        <h3>穿梭框 ( ShuttleFrame )</h3>
        <div class="container">
            <div class="left">
                <div class="header">
                    <div @click="allselect(OptionList1)">
                        <input type="checkbox" :checked="allsel">
                        List1
                    </div>
                    <span>{{ list1.listNum }} / {{ list1.listAll }}</span>
                </div>
                <div class="nodata" v-show="isshowl">NO DATA</div>
                <div class="box" v-for="item in OptionList1" @click="changeclil(item)">
                    <input type="checkbox" :checked="item.checked">
                    <span> {{ item.title }}
                    </span>
                </div>
            </div>
            <span class="btn">
                <button @click="fromLeft"> ＜ </button>
                <button @click="fromRight"> ＞ </button>
            </span>
            <div class="rigth">
                <div class="header">
                    <div @click="allselectr(OptionList2)">
                        <input type="checkbox" id="ipt" :checked="allse2">
                        List2
                    </div>
                    <span>{{ list2.listNum }} / {{ list2.listAll }}</span>
                </div>
                <div class="nodata" v-show="isshowr">NO DATA</div>
                <div class="box" v-for="item in OptionList2" @click="changeclir(item)">
                    <input type="checkbox" :checked="item.checked">
                    <span> {{ item.title }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
let isshowr = ref(true);
let isshowl = ref(false);
let allsel = ref(false);
let allse2 = ref(false);
let OptionList1 = ref([
    { id: 1, title: 'Option01', checked: false }, { id: 2, title: 'Option02', checked: false }, { id: 3, title: 'Option03', checked: false },
    { id: 4, title: 'Option04', checked: false }, { id: 5, title: 'Option05', checked: false }, { id: 6, title: 'Option06', checked: false },
    { id: 7, title: 'Option07', checked: false }, { id: 8, title: 'Option08', checked: false }, { id: 9, title: 'Option09', checked: false },
    { id: 10, title: 'Option10', checked: false }, { id: 11, title: 'Option11', checked: false }, { id: 12, title: 'Option12', checked: false },
    { id: 13, title: 'Option13', checked: false }, { id: 14, title: 'Option14', checked: false }, { id: 15, title: 'Option15', checked: false }])
let OptionList2 = ref([])
let list1 = ref({
    'listNum': 0,
    'listAll': OptionList1.value.length
})
let list2 = ref({
    'listNum': 0,
    'listAll': OptionList2.value.length
})
// 向右传输数据
function fromRight() {
    let arr = OptionList1.value.filter((e) => {
        return e.checked === true
    })
    arr = JSON.stringify(arr);
    arr = JSON.parse(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i].checked = false
    }
    OptionList2.value.push(...arr);
    changenum(OptionList2, list2);
    delCake(OptionList1);
    allsel.value = false;
    isnone()
}
// 向左传输数据
function fromLeft() {
    let arr = OptionList2.value.filter((e) => {
        return e.checked === true
    })
    arr = JSON.stringify(arr);
    arr = JSON.parse(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i].checked = false
    }
    OptionList1.value.push(...arr);
    changenum(OptionList1, list1);
    delCakel(OptionList2);
    allse2.value = false;
    isnone()

}
// 条目转移后删除条目
function delCake(optionlist) {
    let arr = []
    optionlist.value.forEach((e) => {
        if (e.checked == false) {
            arr.push(e)
        }
    })
    optionlist.value = arr
    changenum(OptionList1, list1)
    ifAllSel(OptionList1, allsel)
}
function delCakel(optionlist) {
    let arr = []
    optionlist.value.forEach((e) => {
        if (e.checked == false) {
            arr.push(e)
        }
    })
    optionlist.value = arr
    changenum(OptionList2, list2)
    ifAllSel(OptionList2, allse2)
}
// 单个栏目点击(左)
function changeclil(e) {
    e.checked = !e.checked;
    changenum(OptionList1, list1)
    ifAllSel(OptionList1, allsel)
}
// 单个栏目点击(右)
function changeclir(e) {
    e.checked = !e.checked;
    changenum(OptionList2, list2)
    ifAllSel(OptionList2, allse2)
}
// 判断是否全选
function ifAllSel(optionlist, key) {
    let arr = optionlist.value.filter((e) => {
        return e.checked === true
    })
    if (arr.length == optionlist.value.length && arr.length != 0) {
        key.value = true
    } else {
        key.value = false
    }
}
// 计算选中数
function changenum(optionlist, key) {
    let arr = optionlist.value.filter((e) => {
        return e.checked === true
    })
    key.value.listNum = arr.length;
    key.value.listAll = optionlist.value.length
}
// 全选按钮
function allselect(optionlist) {
    allsel.value = !allsel.value;
    for (let i = 0; i < optionlist.length; i++) {
        optionlist[i].checked = allsel.value
    }
    changenum(OptionList1, list1);
}
function allselectr(optionlist) {
    allse2.value = !allse2.value;
    for (let i = 0; i < optionlist.length; i++) {
        optionlist[i].checked = allse2.value
    }
    changenum(OptionList2, list2);
}
// 判断是否为空
function isnone() {
    if (OptionList2.value.length == 0) {
        isshowr.value = true;
        isshowl.value = false
    } else if (OptionList1.value.length == 0) {
        isshowl.value = true;
        isshowr.value = false
    } else {
        isshowl.value = false
        isshowr.value = false
    }
}
// 条目排序
function listsort(list) {
    list.value.sort(function (a, b) {
        return a.id - b.id
    })
}
// 视图改变判断全选状态 && 排序
watch([OptionList1, OptionList2], () => {
    ifAllSel(OptionList2, allse2);
    ifAllSel(OptionList1, allsel);
    listsort(OptionList1); listsort(OptionList2);

})
</script>

<style scoped>
h3 {
    color: #333;
    font-weight: bolder;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.nodata {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: #999;
    /* cursor: no-drop; */
    cursor: not-allowed;

}

.container {
    margin: 100px 20px;
    justify-content: space-between;
    width: 700px;
    display: flex;
    align-items: center;
}

.box {
    padding: 10px 20px;
    cursor: pointer;
}

.box>span:hover {
    color: blue;
}

.box>span {
    margin-left: 5px;
}

.container>div {
    height: 500px;
    border: 2px solid #EBEBEB;
    border-radius: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 16px;
}

.header {
    background-color: #EBEBEB;
    padding: 10px 20px;
    width: 200px;
    display: flex;
    justify-content: space-between;
}

.btn>button {
    background-color: #90C4F8;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    padding: 5px 18px;
    margin: 0px 10px;
    cursor: pointer;
}

.btn>button:active {
    background-color: dodgerblue;
}

.header span {
    color: #999;
}

input {
    margin-right: 5px;
}
</style>