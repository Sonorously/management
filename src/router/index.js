import { createRouter, createWebHashHistory} from 'vue-router'


import HelloWorld from '../components/HelloWorld'
import dynamic from "./dynamic";

console.log("dynamic====",...dynamic);
const routes = [

        ...dynamic




]

let router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
/*
如果单纯的使用 createWebHistory 历史路由，在路由菜单配置不完整的情况下，会出现菜单不匹配，鄙怯会报 loading chunk 0 failed
这个时候如果换乘hash路由，页面就没有出现这个错误
*/
router.onError((error)=>{
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
})
export default router
