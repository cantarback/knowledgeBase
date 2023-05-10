import { createRouter,createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
const jsonArrayRouter = [
    {
        path:'/Slot',
        component:()=>import("@/views/SlotView.vue")
    },{
        path:'/',
        component:()=>import("@/views/DynamicComponnents.vue")
    },{
        path:'/Api',
        component:()=>import("@/views/API/Api.vue"),
        children:[{
            path:'CompositionApi',
            component:()=>import("@/views/API/CompositionApi.vue"),
        },{
            path:'OptionsApi',
            component:()=>import("@/views/API/OptionsApi.vue"),
        },{
            path:'NextTick',
            component:()=>import("@/views/API/NextTick.vue"),
        },{
            path:'KeepAlive',
            component:()=>import("@/views/API/Keep - Alive.vue"),
            children:[{
                name:'demo01',
                path:'KeepAlive-demo1',
            component:()=>import("@/components/KeepAlive-demo1.vue"),
            },{
                name:'demo02',
                path:'KeepAlive-demo2',
            component:()=>import("@/components/KeepAlive-demo2.vue"),
            }]
        }]
    },{
        path:'/Directive',
        component:()=>import("@/views/Directive.vue")
    },{
        path:'/WatchComputed',
        component:()=>import("@/views/WatchComputed.vue")
    },{
        path:'/Router',
        component:()=>import("@/views/VueRouter.vue")
    },
    ,{
        path:'/Global',
        component:()=>import("@/views/GlobalProperties.vue")
    },{
        path:'/Lifecycle',
        component:()=>import("@/views/LifecycleHooks/Lifecycle & Related Hooks.vue"),
        children:[{
            path:'CombinedHooks',
            component:()=>import("@/views/LifecycleHooks/CombinedHooks.vue"),
        },{
            path:'OptionHooks',
            component:()=>import("@/views/LifecycleHooks/OptionHooks.vue")
        }]
    },{
        path:'/AllSelect',
        component:()=>import("@/views/demo/AllSelect.vue")
    },{
        path:'/ElementPlusTrueSelect',
        component:()=>import("@/views/Element plus/ElementPlus-TrueSelect.vue")
    },{
        path:'/ElementPlusAlert',
        component:()=>import("@/views/Element plus/ElementPlus-Alert.vue")
    },{
        path:'/ElementPlusMessage',
        component:()=>import("@/views/Element plus/Elementplus-Message.vue")
    },{
        path:'/ElementPlusForm',
        component:()=>import("@/views/Element plus/ElementPlus-Form.vue")
    },{
        path:'/ElementPlusTable',
        component:()=>import("@/views/Element plus/ElementPlus-Table.vue")
    },
    {
        path:'/parentComponent',
        component:()=>import("@/views/componentcomm/parentComponent.vue")
    },
    {
        path:'/parentSentFn',
        component:()=>import("@/views/componentcomm/parentSentFn.vue")
    },
    {
        path:'/PiniaComponent',
        component:()=>import("@/views/PiniaComponent.vue")
    },
    {
        path:'/Promise',
        component:()=>import("@/views/PromiseDemo.vue")
    },
    {
        path:'/Axios',
        component:()=>import("@/views/PostAndAsync/AxiosDemo.vue")
    },
    {
        path:'/CrossDomain',
        component:()=>import("@/views/PostAndAsync/CrossDomain.vue")
    },
    {
        path:'/Debounce',
        component:()=>import("@/views/DebounceAndThrottle.vue")
    },{
        path:'/ShuttleFrame',
        component:()=>import("@/views/ShuttleFrame.vue")
    },{
        path:'/computedDemo',
        component:()=>import("@/views/demo/computedDemo.vue")
    }
];        

const router = createRouter({
    history:routerHistory,
    routes:jsonArrayRouter,
    
});
export {router};