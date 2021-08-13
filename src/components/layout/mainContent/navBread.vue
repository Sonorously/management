<template>
  <aside class="nav-bread">
    <div class="change-aside-nav" @click="changeNav()">
      <i :class=" isSidebarNavCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold' "></i>
    </div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <template v-for="item in crumbList">
        <!-- <el-breadcrumb-item :to="{name:item.name}"> -->
        <el-breadcrumb-item>
          {{item.name}}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </aside>

</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "navBread",
  computed:{
    ...mapState(['crumbList','isSidebarNavCollapse'])
  },
  mounted() {
  },
  methods:{
    changeNav(){
      this.$store.commit('targetNENU')
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bread{
  height: 30px;
  /*切换状态栏按钮*/
  .change-aside-nav{
    height: 20px;
    margin-right: 8px;
    float: left;
    cursor: pointer;
    margin-top: -2px;
  }
}

/* 层叠掉 在面包屑点击可以跳转路由的情况下的字体加粗*/
/deep/.el-breadcrumb__inner.is-link{
  font-weight: unset!important;
}
</style>