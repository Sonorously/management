<!-- 图表展示 -->
<template>
  <div class="container">
    <div class="sign-box">
      <div id="canvas" ref="canvas"></div>
      <div class="button-box">
        <div id="clearCanvas" ref="clearCanvas">
          <p>清除</p>
        </div>
        <div id="saveCanvas" ref="saveCanvas">
          <p>保存</p>
        </div>
      </div>
    </div>
    <div class="mySign" v-show="isSign">
      <img :src="signSrc" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSign: false,
      signSrc: ""
    };
  },
  created() {},
  mounted() {
    this.lineCanvas({
      el: this.$refs.canvas, //绘制canvas的父级div
      clearEl: this.$refs.clearCanvas, //清除按钮
      saveEl: this.$refs.saveCanvas //保存按钮
    });
  },
  methods: {
    lineCanvas(obj) {
      for (var i in obj) {
        this[i] = obj[i];
      }
      this.canvas = document.createElement("canvas");
      this.el.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      let size = {
        width: this.el.clientWidth,
        height: this.el.clientHeight
      };
      this.canvas.width = size.width;
      this.canvas.height = size.height;
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(0, 0, size.width, size.height);
      this.ctx.strokeStyle = "#000";
      //用绝对坐标来创建一条路径
      this.ctx.beginPath();

      //将这条线绘制到canvas上
      this.ctx.stroke(); //只有调用stroke canvas 才会绘制图像显示结果
      this.ctx.lineWidth = 2;
      this.ctx.lineCap = "round";
      //开始绘制
      this.canvas.addEventListener(
          "touchstart",
          function(e) {
            this.ctx.beginPath();
            this.ctx.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          }.bind(this),
          false
      );
      //绘制中
      this.canvas.addEventListener(
          "touchmove",
          function(e) {
            this.ctx.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
            this.ctx.stroke();
          }.bind(this),
          false
      );
      //结束绘制
      // this.canvas.addEventListener(
      //   "touchend",
      //   function() {
      //     this.ctx.closePath();
      //     // let imgBase64 = this.canvas.toDataURL();
      //     //console.log(imgBase64);
      //     // this.signSrc= imgBase64;
      //     // this.isSign = true;
      //   }.bind(this),
      //   false
      // );
      // //清除画布
      this.clearEl.addEventListener(
          "click",
          function() {
            this.ctx.clearRect(0, 0, size.width, size.height);
          }.bind(this),
          false
      );
      //保存图片，直接转base64
      this.saveEl.addEventListener(
          "click",
          function() {


            let imgBase64 = this.canvas.toDataURL();
            this.signSrc = imgBase64;
            this.isSign = true;
            this.ctx.clearRect(0, 0, size.width, size.height);
          }.bind(this),
          false
      );
    }
  }
};
</script>

<style scoped lang="scss">
div.sign-box {
  display: flex;
  height: 100%;
  div.button-box {
    width: 20%;
    height: 100%;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
      text-align: center;
      // border: 1px solid blue;
      height: 50%;
      overflow: hidden;
      p {
        line-height: 50vh;
        transform: rotate(90deg);
      }
    }
  }
  #canvas {
    width: 80%;
    height: 100%;
    position: relative;
    // background: bisque;
    canvas {
      display: block;
    }
  }
}

.mySign {
  width: 100%;
  border: 1px solid red;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}
</style>