<template>
  <div class="demo">
    <h2 class="title">学生姓名：{{name}}</h2>
    <h2>年龄:{{age}}</h2>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            name:'张三',
            age:18,
        }
    },
}
</script>
<style scoped>
  .demo{
    background-color: pink;
  }
</style>
