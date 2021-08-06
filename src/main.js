import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.scss'

//设置element插件
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

//首页路由页面加载
import dynamic from "@/router/dynamic";
//dynamic获取到了页面路由配置页面，直接在此给store中的state赋值，就可以在页面中显示MENU菜单
store.commit('SET_MENU',dynamic);

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
