<template>
  <div class="demo">
    <h3>{{title}}分类</h3>
    <slot>我是一些默认值，当使用者没有传递具体结构时马，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData','title']
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