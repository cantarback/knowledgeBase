// 项目左侧导航入口文件
class LeftTitle{
    static start(){
        return[{
            id:1,
            name:'动态组件 (Dyanmic)',
            path:'/'
        },{
            id:2,
            name:'插槽 (Slot)',
            path:'/Slot'
        },{
            id:3,
            name:'Vue Router',
            path:'/Router'
        },{
            id:4,
            name:'API',
            path:'/Api',
            children:[{
                id:4.1,
                name:' 组合式应用程序接口 (Composition Api)',
                path:'/Api/CompositionApi'
            },{
                id:4.2,
                name:'选项式应用程序接口 (Options Api)',
                path:'/Api/OptionsApi'
            },{
                id:4.3,
                name:'NextTick',
                path:'/Api/NextTick'
            },{
                id:4.4,
                name:'KeepAlive',
                path:'/Api/KeepAlive'
            }]
        },{
            id:5,
            name:'指令 (Directive)',
            path:'/Directive'
        },{
            id:6,
            name:'Watch & Computed',
            path:'/WatchComputed'
        },{
            id:7,
            name:'全局属性 (Global Properties)',
            path:'/Global'
        },{
            id:8,
            name:'Lifecycle & Related Hooks.vue',
            path:'/Lifecycle',
            children:[{
                id:8.1,
                name:' 生命周期及其在组合式API中的钩子函数',
                path:'/Lifecycle/CombinedHooks'
            },{
                id:8.2,
                name:'生命周期及其在选项式API中的钩子函数',
                path:'/Lifecycle/OptionHooks'
            }]
        },{
            id:9,
            name:'Demo案例',
            children:[{
                id:9.1,
                name:'全选',
                path:'/AllSelect'
            },{
                id:9.2,
                name:'穿梭框 (ShuttleFrame)',
                path:'/ShuttleFrame'
            },{
                id:9.3,
                name:'computedDemo',
                path:'/computedDemo'
            }]
        },{
            id:10,
            name:'ElementPlus使用',
            children:[{
                id:10.1,
                name:'Tree 树形控件',
                path:'/ElementPlusTrueSelect'
            },{
                id:10.2,
                name:'Alert 提示',
                path:'/ElementPlusAlert'
            },{
                id:10.3,
                name:'Message 消息提示',
                path:'/ElementPlusMessage'
            },{
                id:10.4,
                name:'Form 表单',
                path:'/ElementPlusForm'
            },{
                id:10.5,
                name:'Table 表格',
                path:'/ElementPlusTable'
            }]
        },{
            id:11,
            name:'组件间通信',
            children:[{
                id:11.1,
                name:'父子组件间传值',
                path:'/parentComponent'
            },{
                id:11.2,
                name:'祖孙组件间传值',
                path:'/ElementPlusAlert'
            },{
                id:11.3,
                name:'Pina 状态管理',
                path:'/PiniaComponent'
            },{
                id:11.4,
                name:'父组件调用子组件的函数',
                path:'/parentSentFn'
            }]
        },{
            id:12,
            name:'接口请求 / 异步(Async)',
            children:[{
                id:12.1,
                name:'Promise 对象',
                path:'/Promise'
            },{
                id:12.2,
                name:'Axios',
                path:'/Axios'
            },{
                id:12.3,
                name:'跨域 / 请求代理',
                path:'/CrossDomain'
            },{
                id:12.4,
                name:'防抖 (Debounce) 和 节流 (Throttle)',
                path:'/Debounce'
            }]
        }
    ]
    }
}
export {LeftTitle}