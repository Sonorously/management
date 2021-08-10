<!-- Menu菜单位置确定 -->
<template>
  <div class="aside-menu">
    <el-menu
        default-active="$route.path"
        :collapse="isSidebarNavCollapse"
        background-color="#ffffff"
        active-text-color="#fefefe"
        text-color="#5e616d"
        router
    >
      <aside-menu :menuList="getRouters" />
    </el-menu>
  </div>
</template>

<script>

import AsideMenu from "@/components/public/AsideMenu.vue"
import {mapState} from 'vuex'
export default {
  name: "asideBar",
  components:{AsideMenu},
  computed:{
    ...mapState(['isSidebarNavCollapse','getRouters']),
  },
  mounted() {
    // console.log("this.isSidebarNavCollapse===",this.isSidebarNavCollapse);
    // console.log("this.getRouters===",this.getRouters);
    // console.log("this.$route.path===",this.$route.path);
  },

}
</script>

<style scoped lang="scss">
.aside-menu{

  //overflow-y: auto;
}

</style>