<template>
  <div class="demo">
    <h3>{{title}}分类</h3>
    <slot :games="games">我是一些默认值，当使用者没有传递具体结构时马，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data() {
      return {
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      }
    },
}
</script>

<style>
    .demo {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    .demo h3 {
        background-color: orange;
        text-align: center;
    }
</style>