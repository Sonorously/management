<template>
  <div id="main-layout">
    <!--  头部信息标题  -->
    <myHead/>
    <!--  中间菜单和内容展示区域  -->
    <div class="middle-content">
      <asideBar class="aside-bar"/>
      <mainContent/>
    </div>
    <!--  尾部信息标题  -->
    <myFooter/>
  </div>
</template>

<script>
import myHead from "./myHead";
import myFooter from "./myFooter";
import asideBar from "./asideBar";
import mainContent from "./mainContent/index"
export default {
  name: "index",
  components:{myHead,myFooter,asideBar,mainContent}
}
</script>

<style scoped lang="scss">
#main-layout{
  height: 100%;
}
</style>