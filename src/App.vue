<template>
  <div id="app">
    <layout></layout>

  </div>
</template>

<script>
import layout from '@/components/layout/index.vue'

export default {
  name: "index",
  components:{layout}
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: #fefefe;
/*  >div{
    height: 100%;
  }*/
}

</style>
