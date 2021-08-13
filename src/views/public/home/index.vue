<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/bingo.png">
    <div class="font"> 欢迎来到BINGO的世界</div>
  </div>

</template>

<script>


export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 35%;
  }

  .font {
    position: absolute;
    top: 140px;
    font-size: 60px;
    font-weight: bold;
    color:#0f1423;
  }
}

</style>
