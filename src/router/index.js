import { createRouter, createWebHashHistory} from 'vue-router'


import HelloWorld from '../components/HelloWorld'
import dynamic from "./dynamic";

import layout from '@/components/layout/index.vue'
import {store} from "core-js/internals/reflect-metadata";

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

  // {
  //   path: '*',
  //   component: () => import("../components/public/404"),
  // }
]


let router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


router.afterEach( (to,from,next)=>{
  var routerList = to.matched;
  console.log("1111111",to);
  if (to.name && to.name.split('/').length > 1) {
    console.log("1111111",to);
    // let allListRoute = store.state.getRouters.filter(item => item.name === 'container')[0].children;children
    // console.log("allListRoute123===",store.state.getRouters)
    // let tempName = to.name.split('/')[0];
    // let allChildrenRoute = [];
    // allListRoute.forEach(item => {
    //   if (item.children) {
    //     allChildrenRoute = allChildrenRoute.concat(item.children);
    //   }
    // });
    // allChildrenRoute = allChildrenRoute.filter(item => item);
    // let listNameObj = allChildrenRoute.filter(item => {
    //   return item.name === tempName;
    // })[0];
    // // console.log(12, listNameObj, allChildrenRoute)
    // if (listNameObj) {
    //   routerList = deepCopy(routerList);
    //   let tempJson = {
    //     name: listNameObj.name,
    //     meta: listNameObj.meta
    //   }
    //   routerList.splice(1, 0, tempJson);
    //   // console.log(routerList)
    // }
  }







  store.commit('SET_BREAD',routerList)
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
