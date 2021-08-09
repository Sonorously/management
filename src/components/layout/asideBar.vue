<!-- Menu菜单位置确定 -->
<template>
  <div class="aside-menu">
<!--    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>-->
    <el-menu
        default-active="$route.path"
        :collapse="isSidebarNavCollapse"
        background-color="#5e616d"
        active-text-color="#ffd04b"
        text-color="#ffffff"
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
    console.log(this.isSidebarNavCollapse);
    console.log(this.getRouters);
    console.log(this.$route.path);
  },

}
</script>

<style scoped lang="scss">
.aside-menu{

  //overflow-y: auto;
}

</style>