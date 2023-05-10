<template>
    <div>
        <h3>Promise 对象</h3>
        <div>{{ testvalue }}</div>
    </div>
</template>

<script setup>
// promise基本使用
// console.log(1);
// const promisedemo = new Promise(function (resolve) {
//     setTimeout(function () {
//         console.log(2);
//         resolve(null)
//     }, 3000)
// })
// promisedemo.then(() => {
//     console.log(3);
// })
// let num = 10
// const promisedemo = new Promise(function (resolve) {
//     setTimeout(function () {
//         let numall = num * 10 - 10
//         resolve(numall)
//     }, 3000)
// })
let testvalue = null;
// 简易封装promise
let promiseResult = promiseFN()
function promiseFN() {
    let num = 10
    const promisedemo = new Promise(function (resolve) {
        setTimeout(function () {
            let numall = num * 10 - 10
            resolve(numall)
        }, 3000)
    })
    return promisedemo
}
// 返回结果为promise对象，故可以一直.then()操作
// numIn来自promise对象中的 resolve
promiseResult.then((numIn) => {
    console.log(numIn);
    return numIn
}).then((res) => {
    // res是前一个then()的返回值
    console.log(res);
})

// ···················································
let numFlag = 0;
function promiseFun() {
    if (numFlag === 0) {
        let num = 10
        const promisedemo = new Promise(
            function (resolve) {
                setTimeout(
                    function () {
                        let numall = num * 10 - 10
                        resolve(numall)
                    }, 3000)
            })
        // 返回promise对象
        return promisedemo
    } else {
        // 返回number对象
        return Promise.resolve(250)
    }
}
// 统一处理promise对象
let flagTest = promiseFun();
flagTest.then((res) => { console.log(res); })

</script>

<style scoped>
h3 {
    color: #333;
    font-weight: bolder;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>