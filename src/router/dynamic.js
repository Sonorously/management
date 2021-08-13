/*
* 路由菜单配置界面，在此配置路由，首先动态路由加载和MENU菜单的联动
*
* */


// const Home = () => import("@/views/public/home")

const dynamic = [
    {
        path: '/home',
        name: 'home',
        component: () => import("@/views/public/home"),
        meta: {
            name: '我的页面',
            icon: 'el-icon-house'
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import("@/components/public/404"),
        meta: {
            name: '404',
            icon: 'el-icon-house'
        }
    },
    {
        path: '/element',
        name: 'element',
        component: () => import("@/views/public/element"),
        meta: {
            name: 'ElementPlus',
            icon: 'el-icon-brush'
        },
        children:[
            {
                path: '/form',
                name: 'form',
                component: () => import("@/views/public/element/form"),
                meta: {
                    name: '表单'
                },
            },
            {
                path: '/tree',
                name: 'tree',
                component: () => import("@/views/public/element/tree"),
                meta: {
                    name: '树菜单'
                }
            },
            {
                path: '/table',
                name: 'table',
                component: () => import("@/views/public/element/table"),
                meta: {
                    name: '表格'
                },
                children:[
                    {
                        path: '/child-table',
                        name: 'child-table',
                        component: () => import("@/views/public/element/table/child-table"),
                        meta: {
                            name: '子表'
                        }
                    },
                    {
                        path: '/compound-form',
                        name: 'compound-form',
                        component: () => import("@/views/public/element/table/compound-form"),
                        meta: {
                            name: '复合表格'
                        }
                    },
                    {
                        path: '/drag-table',
                        name: 'drag-table',
                        component: () => import("@/views/public/element/table/drag-table"),
                        meta: {
                            name: '表格拖拽'
                        }
                    },
                ]
            },
        ]
    },//element
    {
        path: '/demand',
        name: 'demand',
        component: () => import("@/views/public/demand"),
        meta:{
            name: '功能需求',
            icon: 'el-icon-guide'
        },
        children: [
            {
                path: '/3D',
                name: '3D',
                component:() => import("../views/public/demand/3D"),
                meta:{
                    name: "3D"
                }
            },
            {
                path: '/canvas',
                name: 'canvas',
                component:() => import("../views/public/demand/canvas"),
                meta:{
                    name: "手绘板"
                }
            },
            {
                path: '/charts',
                name: 'charts',
                component:() => import("../views/public/demand/charts"),
                meta:{
                    name: "图表"
                }
            },
            {
                path: '/dialog',
                name: 'dialog',
                component:() => import("../views/public/demand/dialog"),
                meta:{
                    name: "对话框"
                }
            },
            {
                path: '/game',
                name: 'game',
                component:() => import("../views/public/demand/game"),
                meta:{
                    name: "页面游戏"
                }
            },
            {
                path: '/map',
                name: 'map',
                component:() => import("../views/public/demand/map"),
                meta:{
                    name: "地图展示"
                }
            },
            {
                path: '/rule',
                name: 'rule',
                component:() => import("../views/public/demand/rule"),
                meta:{
                    name: "规则配置"
                }
            },
        ]

    },//需求
]
export default dynamic;