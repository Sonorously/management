<template>
  <div :class = " isSidebarNavCollapse ? 'main-content-close' : 'main-content'  " >
    <navBread/>
    <content/>
  </div>

</template>

<script>
import navBread from "./navBread";
import content from "./content";
import {mapState} from 'vuex'
export default {
  name: "index",
  components: {navBread,content},
  computed:{
    ...mapState(['isSidebarNavCollapse'])
  },
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
.main-content-close{
  padding: 10px;
}

</style>