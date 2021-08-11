<template>
  <aside class="nav-bread">
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
    ...mapState(['crumbList'])
  },
  mounted() {
    console.log("这个值是什么",this.crumbList);
  }
}
</script>

<style scoped lang="scss">
.nav-bread{
  height: 30px;
}
/deep/.el-breadcrumb__inner.is-link{
  font-weight: unset!important;
}
</style>