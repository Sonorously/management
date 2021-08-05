


// const Home = () => import("@/views/public/home/Home")

const dynamic = [
    {
        path: '/home',
        name: 'home',
        component: ()=> import("@/views/public/home/Home"),
        meta: {
            name: '首页',
            icon: 'el-icon-location'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: ()=> import("@/views/public/about"),
        meta: {
            name: '关于',
            icon: 'el-icon-location'
        },
        children:[
            {
                path: 'about1',
                name: 'about1',
                component: ()=> import("@/views/public/about/about1/About"),
                meta: {
                    name: '关于1'
                },
            },
            {
                path: 'about2',
                name: 'about2',
                component: ()=> import("@/views/public/about/about2/About"),
                meta: {
                    name: '关于2'
                },
            },
        ]
    },
]
export default dynamic;