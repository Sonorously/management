<!--对话框-->
<template>
  <div class="main">
    <span>
      {{ok}}
    </span>
    <Blink :interval="1000">
      <Content @list="lists"/>
    </Blink>
  </div>
</template>

<script>
import Blink from "./blink";
import Content from "./content";
export default {
  name: "index",
  components:{Blink,Content},
  data() {
    return {
      ok:"ok"
    }
  },
  mounted() {

  },
  methods: {
    lists(val){
      this.ok = val
    }
  }
}
</script>

<style scoped lang='scss'>

</style>