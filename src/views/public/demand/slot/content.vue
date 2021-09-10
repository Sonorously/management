<template>
<div>
  <el-button @click="row('真的好')">点击我看看</el-button>
</div>
</template>

<script>
export default {
  name: "content",
  components: {},
  data() {
    return {}
  },
  mounted() {

  },
  methods: {
    row(things){
      this.$emit("list",things)
    }
  }
}
</script>

<style scoped lang='scss'>

</style>