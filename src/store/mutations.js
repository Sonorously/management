/*
* 用来触发改变state中的值
*
* */
export default {
    //用来对也面路由赋值
    SET_MENU(state,menu){
        state.getRouters = menu
    },
    //用来对面包屑进行赋值
    SET_BREAD(state,list){
        state.crumbList = list
    }
}