import { defineStore } from "pinia";
export const useStore = defineStore('counter',{
    state(){
        return{count:0,name:''}
    },
    actions:{
        increment(){
            this.count++
        }
    },
    getters:{
        doubleCount:(state)=>state.count*2,
        // 形如
        // doubleCount(state) {
        //     return state.count * 2
        //   },
    }
})