<!-- Menu列表展示 -->
<template>
  <div class='menu-container'>
  <template v-for="item in menuList">
    <!-- 有子集菜单的情况 -->
    <el-submenu :index='item.name' v-if='item.children && item.children.length>0' :key='item.name' :class="( item.meta.icon && isSidebarNavCollapse ) ? 'displayArrow' : '' ">

        <template #title>
          <i :class="item.meta.icon"></i>
          <span v-if=" ( item.meta.icon && isSidebarNavCollapse ) ? false : true " >{{item.meta.name}}</span>
        </template>

      <el-menu-item-group>
        <aside-menu :menuList='item.children'></aside-menu>
      </el-menu-item-group>
    </el-submenu>

    <!-- 没有子集菜单的情况 -->
    <el-menu-item :key='item.name' :index='item.name' @click='gotoRoute(item.name)' v-else >
      <i :class="item.meta.icon"></i>
      <template #title>
        <span>{{item.meta.name}}</span>
      </template>
    </el-menu-item>
  </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "AsideMenu",
  components: {},
  computed:{
    ...mapState(['isSidebarNavCollapse'])
  },
  props:{
    menuList:{
      type:Array,
      default:()=>{
        return [];
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    gotoRoute(name) {
      // this.$router.push({ name });
      this.$router.replace({ name });
    }
  }
}
</script>

<style scoped lang='scss'>
.menu-container{

  //手动控制 在menu面板收缩的时候取消没有隐藏的箭头
  .displayArrow{
    /deep/.el-submenu__icon-arrow.el-icon-arrow-right{
      display: none;
    }
  }
}
/deep/ .el-menu-item-group__title{
  padding:0!important;
}
</style>