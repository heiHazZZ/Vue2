<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素过渡 使用：transition-group 元素要加key属性 -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="!isShow" key="2">上个硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name:'Test2',
  data() {
    return {
      isShow:true
    }
  },
}
</script>

<style scoped>
  h1 {
    background-color:red
    /* transfrom 也可以写在被绑定的元素上 */
    /* transition: 0.5s linear; */
  }
  /* 进入的起点，离开的终点 */
  .hello-enter,.hello-leave-to {
    transform: translateX(-100%);
  }
  .hello-enter-active,.hello-leave-active {
    transition: 0.5s linear;
  }
  /* 进入的终点，离开的起点 */
  .hello-enter-to,.hello-leave {
    transform: translateX(0);
  }
</style>