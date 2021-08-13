<!-- Menu菜单位置确定 -->
<template>
  <div class="aside-menu">
    <el-menu
        default-active="$route.path"
        :collapse="isSidebarNavCollapse"
        background-color="#ffffff"
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

  //el-menu生成的ul>li标签，ul自带一个右边框，在此去掉ul自带的右边框
  /deep/.el-menu {
    border-right: 0;
  }
}

</style>