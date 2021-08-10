


// const Home = () => import("@/views/public/home/Home")

const dynamic = [
    {
        path: '/home',
        name: 'home',
        component: ()=> import("@/views/public/home/Home"),
        meta: {
            name: '我的页面',
            icon: 'el-icon-house'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: ()=> import("@/views/public/about"),
        meta: {
            name: '关于',
            icon: 'el-icon-paperclip'
        },
        children:[
            {
                path: '/about1',
                name: 'about1',
                component: ()=> import("@/views/public/about/about1"),
                meta: {
                    name: '关于1'
                },
            },
            {
                path: '/about2',
                name: 'about2',
                component: ()=> import("@/views/public/about/about2"),
                meta: {
                    name: '关于2'
                },
                children:[
                    {
                        path: '/about3',
                        name: 'about3',
                        component: () => import("@/views/public/about/about2/about3"),
                        meta: {
                            name: '关于3'
                        }
                    }
                ]
            },
        ]
    },
]
export default dynamic;