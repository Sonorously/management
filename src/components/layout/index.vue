<template>
  <div id="main-layout">
    <myHead/>

    <div class="middle-content">
      <asideBar class="aside-bar"/>
      <mainContent/>
    </div>

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