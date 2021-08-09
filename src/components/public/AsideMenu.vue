<!-- Menu列表展示 -->
<template>
  <div class='menu-container'>
  <template v-for="item in menuList">
    <el-submenu :index='item.name' v-if='item.children && item.children.length>0' :key='item.name'>
      <template #title>
        <i :class="item.meta.icon"></i>
        <!-- <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon"></svg-icon>-->
        <span>{{item.meta.name}}</span>
      </template>
      <el-menu-item-group>
        <aside-menu :menuList='item.children'></aside-menu>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item :key='item.name' :index='item.name' @click='gotoRoute(item.name)' v-else>
      <template #title>
        <i :class="item.meta.icon"></i>
        <!-- <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon"></svg-icon>-->
        <span>{{item.meta.name}}</span>
      </template>

    </el-menu-item>
  </template>
  </div>
</template>

<script>
export default {
  name: "AsideMenu",
  components: {},
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
      this.$router.push({ name })
    }
  }
}
</script>

<style scoped lang='scss'>
.menu-container{
  width: 200px;
}
/deep/ .el-menu-item-group__title{
  padding:0!important;
}
</style>