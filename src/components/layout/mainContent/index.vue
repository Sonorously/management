<template>
  <div class="main-content">
    <navBread/>
    <content/>
  </div>

</template>

<script>
import navBread from "./navBread";
import content from "./content";
export default {
  name: "index",
  components: {navBread,content},
  data() {
    return {}
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped lang='scss'>
.main-content{
  padding: 10px;
}
</style>