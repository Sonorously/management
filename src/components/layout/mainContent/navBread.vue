<template>
  <aside class="nav-bread">
    <el-breadcrumb separator="/">
      <template v-for="(item,index) in crumbList">
<!--        <el-breadcrumb-item
            :key="item.name"
            :to="{name:item.name}"
        >
          {{item.meta.name}}
        </el-breadcrumb-item>-->
      </template>
<!--      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
    </el-breadcrumb>
  </aside>

</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "navBread",
  computed:{
    ...mapState(['crumbList'])
  }
}
</script>

<style scoped lang="scss">
.nav-bread{
  height: 30px;
}
</style>