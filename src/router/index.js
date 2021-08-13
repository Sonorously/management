import { createRouter, createWebHashHistory} from 'vue-router'

import dynamic from "./dynamic";

import layout from '@/components/layout/index.vue'
import store from "@/store";

const routes = [
  {
    path: '',
    component: layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    children:[
      ...dynamic
    ]
  },
  {
    path: '/404',
    component: () => import("@/components/public/404"),
  }
]


let router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to,from,next) => {
//   console.log(to);
//   console.log(from);
//   console.log(next);
//
// })

router.afterEach( (to,from,next) =>{

  //当前功能是给面面包屑赋值
  let routerList = to.matched;
  let getBreadRoute = routerList.slice(1);//在不改变原数组的情况下拷贝数组
  let breadList = [];
  getBreadRoute.forEach( item => {
    breadList.push(item.meta)
  })
  store.commit('SET_BREAD',breadList);


})



/*
如果单纯的使用 createWebHistory 历史路由，在路由菜单配置不完整的情况下，会出现菜单不匹配，鄙怯会报 loading chunk 0 failed
这个时候如果换乘hash路由，页面就没有出现这个错误
*/
/*router.onError((error)=>{
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
})*/



export default router
