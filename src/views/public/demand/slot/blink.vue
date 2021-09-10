<template>
<div v-show="flag">
  <!-- 主要是依靠这个 slot 插槽功能来显示 父组建中加载的 -->
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "blink",
  components: {},
  props:['interval'],
  data() {
    return {
      flag:true
    }
  },
  mounted() {
    let timer = setInterval( this.show,this.$props.interval);
    clearInterval(timer);
  },
  methods: {
    show(){
      this.flag = !this.flag;
    }
  }
}
</script>

<style scoped lang='scss'>

</style>