<template>
<div class="content">
  <router-view/>
</div>
</template>

<script>
export default {
  name: "content"
}
</script>

<style scoped lang="scss">
.content{
  height: calc(100% - 30px);
  background-color: #fff;
  >div{
    height: 100%;
  }
}
</style>