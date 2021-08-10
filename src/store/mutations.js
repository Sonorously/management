
export default {
    SET_MENU(state,menu){
        state.getRouters = menu
    },
    SET_BREAD(list){
        state.crumbList = list
    }
}